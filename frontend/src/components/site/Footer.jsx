import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";
import { BUSINESS } from "@/lib/api";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer data-testid="site-footer" className="bg-navy text-white">
      <div className="container-x py-14 sm:py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="h-10 w-10 rounded-lg bg-gold flex items-center justify-center">
              <span className="font-heading text-navy text-xl leading-none">N</span>
            </div>
            <div className="leading-tight">
              <div className="font-heading text-lg">{BUSINESS.name}</div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-gold-200">
                DLF Phase 3 · Gurgaon
              </div>
            </div>
          </div>
          <p className="mt-5 text-sm text-white/70 leading-relaxed">
            Modern PG & co-living designed for working professionals, students and corporate residents.
          </p>
        </div>

        <div>
          <div className="font-heading text-base mb-4">Quick Links</div>
          <ul className="space-y-2 text-sm">
            {[
              ["#about", "About"],
              ["#rooms", "Rooms"],
              ["#pricing", "Pricing"],
              ["#amenities", "Amenities"],
              ["#faq", "FAQ"],
              ["/admin/login", "Admin"],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} className="text-white/75 hover:text-gold-200">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="font-heading text-base mb-4">Contact</div>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 text-gold-200 flex-shrink-0" />
              <span className="text-white/75">{BUSINESS.address}</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-gold-200" />
              <a href={`tel:${BUSINESS.phone}`} className="text-white/85 hover:text-gold-200">
                {BUSINESS.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-gold-200" />
              <a href={`mailto:${BUSINESS.email}`} className="text-white/85 hover:text-gold-200">
                {BUSINESS.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <div className="font-heading text-base mb-4">Find us</div>
          <a
            href={`https://www.google.com/maps?q=${encodeURIComponent(BUSINESS.mapsQuery)}`}
            target="_blank"
            rel="noreferrer"
            className="block rounded-xl overflow-hidden border border-white/10 hover:border-gold/40 transition"
          >
            <img
              src={`https://staticmap.openstreetmap.de/staticmap.php?center=28.4894,77.0900&zoom=14&size=400x180&maptype=mapnik`}
              alt="Map preview"
              loading="lazy"
              className="w-full h-32 object-cover bg-white/5"
              onError={(e) => (e.currentTarget.style.display = "none")}
            />
          </a>
          <div className="mt-4 flex gap-3">
            <a aria-label="Instagram" href="#" className="h-9 w-9 rounded-full bg-white/10 hover:bg-gold flex items-center justify-center"><Instagram className="h-4 w-4" /></a>
            <a aria-label="Facebook" href="#" className="h-9 w-9 rounded-full bg-white/10 hover:bg-gold flex items-center justify-center"><Facebook className="h-4 w-4" /></a>
            <a aria-label="LinkedIn" href="#" className="h-9 w-9 rounded-full bg-white/10 hover:bg-gold flex items-center justify-center"><Linkedin className="h-4 w-4" /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-5 text-xs text-white/60 flex flex-wrap items-center justify-between gap-3">
          <div>© {year} {BUSINESS.name}. All rights reserved.</div>
          <div className="text-white/50">Crafted for premium co-living · nestrohousingpg.com</div>
        </div>
      </div>
    </footer>
  );
}
