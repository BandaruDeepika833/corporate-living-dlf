import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { BUSINESS, callLink } from "@/lib/api";

const links = [
  { href: "#rooms", label: "Rooms" },
  { href: "#pricing", label: "Pricing" },
  { href: "#amenities", label: "Amenities" },
  { href: "#location", label: "Location" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-navbar"
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-soft"
          : "bg-white/40 backdrop-blur-sm"
      }`}
    >
      <div className="container-x flex items-center justify-between py-3.5">
        <a href="#top" className="flex items-center gap-2.5" data-testid="nav-logo">
          <div className="h-9 w-9 rounded-lg bg-navy flex items-center justify-center">
            <span className="font-heading text-white text-lg leading-none">N</span>
          </div>
          <div className="leading-tight">
            <div className="font-heading text-navy text-base sm:text-lg font-semibold">
              {BUSINESS.name}
            </div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-gold-600 font-semibold hidden sm:block">
              DLF Phase 3 · Gurgaon
            </div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link" data-testid={`nav-${l.label.toLowerCase()}`}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href={callLink} className="btn-secondary !py-2 !px-4 text-sm" data-testid="nav-call-btn">
            <Phone className="h-4 w-4" /> {BUSINESS.phoneDisplay}
          </a>
          <a href="#contact" className="btn-primary !py-2 !px-5 text-sm" data-testid="nav-book-btn">
            Book a Room
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden h-10 w-10 inline-flex items-center justify-center rounded-full bg-white border border-navy/10"
          data-testid="nav-mobile-toggle"
        >
          {open ? <X className="h-5 w-5 text-navy" /> : <Menu className="h-5 w-5 text-navy" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-navy/10 bg-white" data-testid="mobile-menu">
          <div className="container-x py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="nav-link py-2"
                data-testid={`mobile-nav-${l.label.toLowerCase()}`}
              >
                {l.label}
              </a>
            ))}
            <div className="flex gap-2 pt-2">
              <a href={callLink} className="btn-secondary flex-1 !py-2 text-sm" data-testid="mobile-call-btn">
                <Phone className="h-4 w-4" /> Call
              </a>
              <a href="#contact" onClick={() => setOpen(false)} className="btn-primary flex-1 !py-2 text-sm" data-testid="mobile-book-btn">
                Book
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
