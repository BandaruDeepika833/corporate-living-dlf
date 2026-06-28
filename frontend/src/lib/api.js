import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
export const API_BASE = `${BACKEND_URL}/api`;

export const api = axios.create({ baseURL: API_BASE });

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("nestro_admin_token");
  if (token) {
    config.headers = config.headers || {};
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const BUSINESS = {
  name: "Nestro Housing PG",
  tagline: "Modern PG & Co-living in DLF Phase 3, Gurgaon",
  phone: "+919810607422",
  phoneDisplay: "+91 98106 07422",
  whatsapp: "919810607422",
  email: "nestrostay@gmail.com",
  address: "T-14/9, DLF Phase 3, Near Shani Mandir, Gurgaon, Haryana",
  mapsQuery: "T-14/9, DLF Phase 3, Near Shani Mandir, Gurgaon, Haryana",
};

export function formatApiErrorDetail(detail) {
  if (detail == null) return "Something went wrong. Please try again.";
  if (typeof detail === "string") return detail;
  if (Array.isArray(detail))
    return detail
      .map((e) => (e && typeof e.msg === "string" ? e.msg : JSON.stringify(e)))
      .filter(Boolean)
      .join(" ");
  if (detail && typeof detail.msg === "string") return detail.msg;
  return String(detail);
}

export const whatsappLink = (text = "Hi, I'm interested in booking a room at Nestro Housing PG.") =>
  `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(text)}`;
export const callLink = `tel:${BUSINESS.phone}`;
