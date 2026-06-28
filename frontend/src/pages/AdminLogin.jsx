import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "sonner";
import { Lock, Mail } from "lucide-react";
import { api, formatApiErrorDetail } from "@/lib/api";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await api.post("/auth/login", { email, password });
      localStorage.setItem("nestro_admin_token", data.access_token);
      toast.success("Welcome back, Admin");
      navigate("/admin");
    } catch (err) {
      toast.error(formatApiErrorDetail(err.response?.data?.detail) || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div data-testid="admin-login-page" className="min-h-screen bg-cloud flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <Link to="/" className="flex items-center gap-2.5 mb-8">
          <div className="h-10 w-10 rounded-lg bg-navy flex items-center justify-center">
            <span className="font-heading text-white text-lg leading-none">N</span>
          </div>
          <div>
            <div className="font-heading text-navy text-lg">Nestro Housing PG</div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-gold-600 font-semibold">Admin Portal</div>
          </div>
        </Link>

        <div className="card-soft p-8">
          <h1 className="font-heading text-2xl text-navy">Sign in</h1>
          <p className="mt-1.5 text-sm text-ink/65">Access your inquiry dashboard.</p>

          <form onSubmit={onSubmit} className="mt-6 space-y-4" data-testid="admin-login-form">
            <label className="block">
              <span className="text-xs font-semibold uppercase tracking-wider text-ink/65">Email</span>
              <div className="mt-1.5 relative">
                <Mail className="h-4 w-4 text-ink/40 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-cloud border border-navy/10 text-sm focus:outline-none focus:border-gold"
                  data-testid="admin-email-input"
                />
              </div>
            </label>
            <label className="block">
              <span className="text-xs font-semibold uppercase tracking-wider text-ink/65">Password</span>
              <div className="mt-1.5 relative">
                <Lock className="h-4 w-4 text-ink/40 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  required
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-cloud border border-navy/10 text-sm focus:outline-none focus:border-gold"
                  data-testid="admin-password-input"
                />
              </div>
            </label>
            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full justify-center disabled:opacity-60"
              data-testid="admin-login-submit"
            >
              {loading ? "Signing in…" : "Sign in"}
            </button>
          </form>
        </div>

        <p className="text-xs text-center mt-5 text-ink/50">
          <Link to="/" className="hover:text-navy">← Back to website</Link>
        </p>
      </div>
    </div>
  );
}
