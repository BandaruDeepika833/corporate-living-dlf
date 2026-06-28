import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "sonner";
import { LogOut, RefreshCw, Trash2, Phone, MessageCircle } from "lucide-react";
import { api, whatsappLink } from "@/lib/api";

const STATUS_OPTIONS = ["new", "contacted", "booked", "closed"];

function statusClasses(s) {
  switch (s) {
    case "new": return "bg-gold/15 text-gold-700";
    case "contacted": return "bg-navy/10 text-navy";
    case "booked": return "bg-green-100 text-green-700";
    case "closed": return "bg-gray-200 text-gray-700";
    default: return "bg-gray-100 text-gray-700";
  }
}

export default function AdminDashboard() {
  const [inquiries, setInquiries] = useState([]);
  const [stats, setStats] = useState({ total: 0, new: 0, contacted: 0, booked: 0 });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const load = async () => {
    setLoading(true);
    try {
      const [a, b] = await Promise.all([
        api.get("/admin/inquiries"),
        api.get("/admin/stats"),
      ]);
      setInquiries(a.data);
      setStats(b.data);
    } catch (e) {
      toast.error("Could not load inquiries");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []);

  const updateStatus = async (id, status) => {
    try {
      await api.patch(`/admin/inquiries/${id}`, { status });
      toast.success(`Status updated → ${status}`);
      load();
    } catch (e) {
      toast.error("Update failed");
    }
  };

  const remove = async (id) => {
    if (!window.confirm("Delete this inquiry?")) return;
    try {
      await api.delete(`/admin/inquiries/${id}`);
      toast.success("Inquiry deleted");
      load();
    } catch (e) {
      toast.error("Delete failed");
    }
  };

  const logout = () => {
    localStorage.removeItem("nestro_admin_token");
    navigate("/admin/login");
  };

  return (
    <div data-testid="admin-dashboard" className="min-h-screen bg-cloud">
      <header className="bg-white border-b border-navy/10">
        <div className="container-x py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="h-9 w-9 rounded-lg bg-navy flex items-center justify-center">
              <span className="font-heading text-white text-lg leading-none">N</span>
            </div>
            <div className="leading-tight">
              <div className="font-heading text-navy">Nestro Admin</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-gold-600 font-semibold">Inquiry dashboard</div>
            </div>
          </Link>
          <div className="flex items-center gap-2">
            <button onClick={load} className="btn-secondary !py-2 !px-4 text-sm" data-testid="refresh-btn">
              <RefreshCw className="h-4 w-4" /> Refresh
            </button>
            <button onClick={logout} className="btn-primary !py-2 !px-4 text-sm" data-testid="logout-btn">
              <LogOut className="h-4 w-4" /> Logout
            </button>
          </div>
        </div>
      </header>

      <main className="container-x py-10">
        <h1 className="font-heading text-3xl text-navy">Inquiries</h1>

        <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { k: "total", label: "Total" },
            { k: "new", label: "New" },
            { k: "contacted", label: "Contacted" },
            { k: "booked", label: "Booked" },
          ].map((s) => (
            <div key={s.k} className="card-soft p-5" data-testid={`stat-${s.k}`}>
              <div className="text-xs uppercase tracking-wider text-ink/55">{s.label}</div>
              <div className="mt-1 font-heading text-3xl text-navy">{stats[s.k] ?? 0}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 card-soft overflow-hidden">
          {loading ? (
            <div className="p-10 text-center text-ink/60">Loading…</div>
          ) : inquiries.length === 0 ? (
            <div className="p-10 text-center text-ink/60">No inquiries yet.</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm" data-testid="inquiries-table">
                <thead className="bg-navy/[0.04] text-ink/70">
                  <tr>
                    <Th>Date</Th>
                    <Th>Name</Th>
                    <Th>Phone / Email</Th>
                    <Th>Room</Th>
                    <Th>Move-in</Th>
                    <Th>Message</Th>
                    <Th>Status</Th>
                    <Th>Actions</Th>
                  </tr>
                </thead>
                <tbody>
                  {inquiries.map((it) => (
                    <tr key={it.id} className="border-t border-navy/[0.06]" data-testid={`row-${it.id}`}>
                      <Td className="text-xs text-ink/60 whitespace-nowrap">{new Date(it.created_at).toLocaleString("en-IN")}</Td>
                      <Td className="font-semibold text-navy whitespace-nowrap">{it.name}<div className="text-[11px] font-normal text-ink/55">{it.gender || "—"}</div></Td>
                      <Td>
                        <div className="flex flex-col gap-0.5">
                          <span>{it.phone}</span>
                          {it.email && <span className="text-xs text-ink/55">{it.email}</span>}
                        </div>
                      </Td>
                      <Td className="whitespace-nowrap">{it.room_type || "—"}</Td>
                      <Td className="whitespace-nowrap">{it.move_in_date || "—"}</Td>
                      <Td className="max-w-xs">
                        <div className="line-clamp-2 text-ink/75">{it.message || "—"}</div>
                      </Td>
                      <Td>
                        <select
                          value={it.status}
                          onChange={(e) => updateStatus(it.id, e.target.value)}
                          className={`text-[11px] font-semibold uppercase tracking-wider rounded-full px-3 py-1 border-0 ${statusClasses(it.status)}`}
                          data-testid={`status-select-${it.id}`}
                        >
                          {STATUS_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </Td>
                      <Td>
                        <div className="flex items-center gap-1.5">
                          <a href={`tel:${it.phone}`} className="h-8 w-8 rounded-full bg-navy/[0.06] hover:bg-navy hover:text-white text-navy flex items-center justify-center" aria-label="Call">
                            <Phone className="h-3.5 w-3.5" />
                          </a>
                          <a href={whatsappLink(`Hi ${it.name}, this is Nestro Housing PG.`)} target="_blank" rel="noreferrer" className="h-8 w-8 rounded-full bg-[#25D366]/15 hover:bg-[#25D366] hover:text-white text-[#0c8a4a] flex items-center justify-center" aria-label="WhatsApp">
                            <MessageCircle className="h-3.5 w-3.5" />
                          </a>
                          <button onClick={() => remove(it.id)} className="h-8 w-8 rounded-full bg-red-50 hover:bg-red-500 hover:text-white text-red-600 flex items-center justify-center" aria-label="Delete" data-testid={`delete-${it.id}`}>
                            <Trash2 className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </Td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

function Th({ children }) {
  return <th className="text-left text-[11px] uppercase tracking-wider font-semibold px-5 py-3">{children}</th>;
}
function Td({ children, className = "" }) {
  return <td className={`px-5 py-4 align-top ${className}`}>{children}</td>;
}
