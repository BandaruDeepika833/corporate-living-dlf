import { useState } from "react";
import { toast } from "sonner";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import { api, BUSINESS, callLink, whatsappLink, formatApiErrorDetail } from "@/lib/api";

const ROOM_TYPES = ["Private Room", "Twin Sharing", "Front Side Private"];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    gender: "",
    room_type: "",
    move_in_date: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      toast.error("Please enter your name and phone number.");
      return;
    }
    setSubmitting(true);
    try {
      await api.post("/inquiries", form);
      toast.success("Thank you! Our team will get in touch within 24 hours.");
      setForm({ name: "", phone: "", email: "", gender: "", room_type: "", move_in_date: "", message: "" });
    } catch (err) {
      toast.error(formatApiErrorDetail(err.response?.data?.detail) || "Could not submit. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" data-testid="contact-section" className="section-y bg-white">
      <div className="container-x">
        <div className="rounded-3xl bg-navy text-white overflow-hidden shadow-lift">
          <div className="grid lg:grid-cols-12 gap-0">
            <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(200,162,74,0.18),_transparent_60%)]">
              <span className="eyebrow !text-gold-200">Ready to move in?</span>
              <h2 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl leading-tight">
                Book a room. <br /> Or visit us today.
              </h2>
              <p className="mt-5 text-white/80 leading-relaxed max-w-md">
                Tell us a bit about your stay – our team will call you back within 24 hours
                to arrange a visit or finalise your booking.
              </p>

              <div className="mt-8 space-y-3 text-sm">
                <a href={callLink} className="flex items-center gap-3 text-white/95 hover:text-gold-200" data-testid="contact-call">
                  <Phone className="h-4 w-4 text-gold-200" /> {BUSINESS.phoneDisplay}
                </a>
                <a href={whatsappLink()} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-white/95 hover:text-gold-200" data-testid="contact-whatsapp">
                  <MessageCircle className="h-4 w-4 text-gold-200" /> WhatsApp Chat
                </a>
                <a href={`mailto:${BUSINESS.email}`} className="flex items-center gap-3 text-white/95 hover:text-gold-200" data-testid="contact-email">
                  <Mail className="h-4 w-4 text-gold-200" /> {BUSINESS.email}
                </a>
                <div className="flex items-start gap-3 text-white/80">
                  <MapPin className="h-4 w-4 text-gold-200 mt-0.5 flex-shrink-0" />
                  <span>{BUSINESS.address}</span>
                </div>
              </div>

              <div className="mt-8 flex gap-3">
                <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn-gold !py-2.5 !px-5 text-sm" data-testid="contact-cta-whatsapp">
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
                <a href={callLink} className="btn-secondary !bg-white/10 !text-white !border-white/20 !py-2.5 !px-5 text-sm hover:!bg-white/20" data-testid="contact-cta-call">
                  <Phone className="h-4 w-4" /> Call
                </a>
              </div>
            </div>

            <form onSubmit={onSubmit} className="lg:col-span-7 bg-white text-ink p-8 sm:p-10 lg:p-12" data-testid="contact-form">
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Full Name *" testid="form-name">
                  <input
                    value={form.name}
                    onChange={update("name")}
                    required
                    type="text"
                    placeholder="Your name"
                    className="input"
                    data-testid="form-name-input"
                  />
                </Field>
                <Field label="Phone *" testid="form-phone">
                  <input
                    value={form.phone}
                    onChange={update("phone")}
                    required
                    type="tel"
                    placeholder="+91 98XXXXXXXX"
                    className="input"
                    data-testid="form-phone-input"
                  />
                </Field>
                <Field label="Email" testid="form-email">
                  <input
                    value={form.email}
                    onChange={update("email")}
                    type="email"
                    placeholder="you@email.com"
                    className="input"
                    data-testid="form-email-input"
                  />
                </Field>
                <Field label="Gender" testid="form-gender">
                  <select value={form.gender} onChange={update("gender")} className="input" data-testid="form-gender-input">
                    <option value="">Select</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </Field>
                <Field label="Room Type" testid="form-room">
                  <select value={form.room_type} onChange={update("room_type")} className="input" data-testid="form-room-input">
                    <option value="">Select room type</option>
                    {ROOM_TYPES.map((r) => (
                      <option key={r}>{r}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Move-in Date" testid="form-movein">
                  <input
                    value={form.move_in_date}
                    onChange={update("move_in_date")}
                    type="date"
                    className="input"
                    data-testid="form-movein-input"
                  />
                </Field>
                <div className="sm:col-span-2">
                  <Field label="Message" testid="form-message">
                    <textarea
                      value={form.message}
                      onChange={update("message")}
                      rows={4}
                      placeholder="Anything specific we should know?"
                      className="input resize-none"
                      data-testid="form-message-input"
                    />
                  </Field>
                </div>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="btn-primary mt-6 w-full sm:w-auto !px-10 disabled:opacity-60"
                data-testid="form-submit-btn"
              >
                {submitting ? "Submitting…" : "Book a Room"}
              </button>
              <p className="mt-3 text-xs text-ink/55">
                By submitting, you agree to be contacted by our team about your booking.
              </p>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        .input {
          width: 100%;
          padding: 0.7rem 0.9rem;
          border-radius: 0.75rem;
          border: 1px solid rgba(14,42,71,0.12);
          background: #F8FAFC;
          color: #1F2937;
          font-size: 0.9rem;
          transition: border-color 0.2s, background 0.2s;
        }
        .input:focus { outline: none; border-color: #C8A24A; background: #fff; }
      `}</style>
    </section>
  );
}

function Field({ label, children, testid }) {
  return (
    <label className="block" data-testid={testid}>
      <span className="text-xs font-semibold uppercase tracking-wider text-ink/65">{label}</span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}
