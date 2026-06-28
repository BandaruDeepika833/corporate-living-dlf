from dotenv import load_dotenv
from pathlib import Path

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / ".env")

import os
import logging
import uuid
from datetime import datetime, timezone, timedelta
from typing import List, Optional

import bcrypt
import jwt
from fastapi import FastAPI, APIRouter, HTTPException, Depends, Request, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
from pydantic import BaseModel, Field, ConfigDict, EmailStr

# ---------------------------------------------------------------------------
# Config
# ---------------------------------------------------------------------------
mongo_url = os.environ["MONGO_URL"]
db_name = os.environ["DB_NAME"]
client = AsyncIOMotorClient(mongo_url)
db = client[db_name]

JWT_SECRET = os.environ["JWT_SECRET"]
JWT_ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 60 * 24  # 24 hours for admin convenience

ADMIN_EMAIL = os.environ.get("ADMIN_EMAIL", "admin@nestrohousingpg.com")
ADMIN_PASSWORD = os.environ.get("ADMIN_PASSWORD", "Nestro@2026")

app = FastAPI(title="Nestro Housing PG API")
api_router = APIRouter(prefix="/api")
security = HTTPBearer(auto_error=False)


# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------
def hash_password(password: str) -> str:
    salt = bcrypt.gensalt()
    return bcrypt.hashpw(password.encode("utf-8"), salt).decode("utf-8")


def verify_password(plain: str, hashed: str) -> bool:
    try:
        return bcrypt.checkpw(plain.encode("utf-8"), hashed.encode("utf-8"))
    except Exception:
        return False


def create_access_token(user_id: str, email: str) -> str:
    payload = {
        "sub": user_id,
        "email": email,
        "exp": datetime.now(timezone.utc) + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES),
        "type": "access",
    }
    return jwt.encode(payload, JWT_SECRET, algorithm=JWT_ALGORITHM)


async def get_current_user(
    credentials: Optional[HTTPAuthorizationCredentials] = Depends(security),
) -> dict:
    if credentials is None or not credentials.credentials:
        raise HTTPException(status_code=401, detail="Not authenticated")
    token = credentials.credentials
    try:
        payload = jwt.decode(token, JWT_SECRET, algorithms=[JWT_ALGORITHM])
        if payload.get("type") != "access":
            raise HTTPException(status_code=401, detail="Invalid token")
        user = await db.users.find_one({"id": payload["sub"]}, {"_id": 0, "password_hash": 0})
        if not user:
            raise HTTPException(status_code=401, detail="User not found")
        return user
    except jwt.ExpiredSignatureError:
        raise HTTPException(status_code=401, detail="Token expired")
    except jwt.InvalidTokenError:
        raise HTTPException(status_code=401, detail="Invalid token")


# ---------------------------------------------------------------------------
# Models
# ---------------------------------------------------------------------------
class LoginRequest(BaseModel):
    email: EmailStr
    password: str


class LoginResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"
    user: dict


class InquiryCreate(BaseModel):
    model_config = ConfigDict(extra="ignore")
    name: str = Field(min_length=2, max_length=100)
    phone: str = Field(min_length=6, max_length=20)
    email: Optional[str] = None
    gender: Optional[str] = None  # Male / Female / Other
    room_type: Optional[str] = None  # Private / Twin / Front Side Private
    move_in_date: Optional[str] = None  # ISO date string
    message: Optional[str] = None
    source: Optional[str] = "website"


class Inquiry(BaseModel):
    id: str
    name: str
    phone: str
    email: Optional[str] = None
    gender: Optional[str] = None
    room_type: Optional[str] = None
    move_in_date: Optional[str] = None
    message: Optional[str] = None
    source: Optional[str] = None
    status: str = "new"  # new / contacted / booked / closed
    created_at: str


class InquiryStatusUpdate(BaseModel):
    status: str


# ---------------------------------------------------------------------------
# Routes - Public
# ---------------------------------------------------------------------------
@api_router.get("/")
async def root():
    return {"message": "Nestro Housing PG API", "ok": True}


@api_router.get("/health")
async def health():
    return {"status": "healthy"}


@api_router.post("/inquiries", response_model=Inquiry, status_code=201)
async def create_inquiry(payload: InquiryCreate):
    doc = {
        "id": str(uuid.uuid4()),
        "name": payload.name.strip(),
        "phone": payload.phone.strip(),
        "email": (payload.email or "").strip().lower() or None,
        "gender": payload.gender,
        "room_type": payload.room_type,
        "move_in_date": payload.move_in_date,
        "message": (payload.message or "").strip() or None,
        "source": payload.source or "website",
        "status": "new",
        "created_at": datetime.now(timezone.utc).isoformat(),
    }
    await db.inquiries.insert_one(doc)
    doc.pop("_id", None)
    return doc


# ---------------------------------------------------------------------------
# Routes - Auth
# ---------------------------------------------------------------------------
@api_router.post("/auth/login", response_model=LoginResponse)
async def login(req: LoginRequest):
    email = req.email.lower().strip()
    user = await db.users.find_one({"email": email})
    if not user or not verify_password(req.password, user.get("password_hash", "")):
        raise HTTPException(status_code=401, detail="Invalid email or password")
    token = create_access_token(user["id"], user["email"])
    safe_user = {k: v for k, v in user.items() if k not in ("password_hash", "_id")}
    return {"access_token": token, "token_type": "bearer", "user": safe_user}


@api_router.get("/auth/me")
async def me(user: dict = Depends(get_current_user)):
    return user


# ---------------------------------------------------------------------------
# Routes - Admin protected
# ---------------------------------------------------------------------------
@api_router.get("/admin/inquiries", response_model=List[Inquiry])
async def list_inquiries(user: dict = Depends(get_current_user)):
    docs = (
        await db.inquiries.find({}, {"_id": 0}).sort("created_at", -1).to_list(1000)
    )
    return docs


@api_router.patch("/admin/inquiries/{inquiry_id}", response_model=Inquiry)
async def update_inquiry_status(
    inquiry_id: str,
    payload: InquiryStatusUpdate,
    user: dict = Depends(get_current_user),
):
    if payload.status not in {"new", "contacted", "booked", "closed"}:
        raise HTTPException(status_code=400, detail="Invalid status")
    result = await db.inquiries.find_one_and_update(
        {"id": inquiry_id},
        {"$set": {"status": payload.status}},
        return_document=True,
        projection={"_id": 0},
    )
    if not result:
        raise HTTPException(status_code=404, detail="Inquiry not found")
    return result


@api_router.delete("/admin/inquiries/{inquiry_id}")
async def delete_inquiry(inquiry_id: str, user: dict = Depends(get_current_user)):
    result = await db.inquiries.delete_one({"id": inquiry_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Inquiry not found")
    return {"ok": True}


@api_router.get("/admin/stats")
async def admin_stats(user: dict = Depends(get_current_user)):
    total = await db.inquiries.count_documents({})
    new = await db.inquiries.count_documents({"status": "new"})
    contacted = await db.inquiries.count_documents({"status": "contacted"})
    booked = await db.inquiries.count_documents({"status": "booked"})
    return {"total": total, "new": new, "contacted": contacted, "booked": booked}


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get("CORS_ORIGINS", "*").split(","),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
)
logger = logging.getLogger(__name__)


# ---------------------------------------------------------------------------
# Startup - seed admin + indexes
# ---------------------------------------------------------------------------
@app.on_event("startup")
async def on_startup():
    try:
        await db.users.create_index("email", unique=True)
        await db.inquiries.create_index("created_at")
    except Exception as e:
        logger.warning(f"Index creation issue: {e}")

    existing = await db.users.find_one({"email": ADMIN_EMAIL})
    if existing is None:
        await db.users.insert_one(
            {
                "id": str(uuid.uuid4()),
                "email": ADMIN_EMAIL,
                "password_hash": hash_password(ADMIN_PASSWORD),
                "name": "Nestro Admin",
                "role": "admin",
                "created_at": datetime.now(timezone.utc).isoformat(),
            }
        )
        logger.info(f"Seeded admin user: {ADMIN_EMAIL}")
    elif not verify_password(ADMIN_PASSWORD, existing.get("password_hash", "")):
        await db.users.update_one(
            {"email": ADMIN_EMAIL},
            {"$set": {"password_hash": hash_password(ADMIN_PASSWORD)}},
        )
        logger.info(f"Updated admin password for: {ADMIN_EMAIL}")


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
