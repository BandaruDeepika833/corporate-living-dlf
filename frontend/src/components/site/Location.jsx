import { MapPin, Train, Building2, Landmark, ArrowRight } from "lucide-react";
import { BUSINESS } from "@/lib/api";

const landmarks = [
  { icon: Building2, title: "Cyber City", text: "~5 minutes drive" },
  { icon: Train, title: "Rapid Metro", text: "Walking distance" },
  { icon: Building2, title: "Udyog Vihar", text: "~7 minutes drive" },
  { icon: Landmark, title: "Shani Mandir", text: "Right next door" },
];

export default function Location() {
  const mapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent(
    BUSINESS.mapsQuery,
  )}&output=embed`;
  const directions = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    BUSINESS.mapsQuery,
  )}`;
  return (
    <section id="location" data-testid="location-section" className="section-y bg-cloud">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">Prime Location</span>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl text-navy leading-tight">
            Located in DLF Phase 3, <br className="hidden sm:block" />
            near Cyber City & Rapid Metro.
          </h2>
        </div>

        <div className="mt-10 grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 rounded-3xl overflow-hidden shadow-card border border-navy/[0.06] bg-white">
            <iframe
              title="Nestro Housing PG location"
              src={mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[420px] sm:h-[520px] border-0"
              data-testid="map-iframe"
            />
          </div>
          <aside className="lg:col-span-4 flex flex-col gap-5">
            <div className="card-soft p-6">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-xl bg-navy/[0.06] flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-navy" />
                </div>
                <div>
                  <div className="font-heading text-lg text-navy">Our address</div>
                  <p className="mt-1 text-sm text-ink/75 leading-relaxed">
                    {BUSINESS.address}
                  </p>
                  <a
                    href={directions}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary mt-5 text-sm !py-2.5 !px-5"
                    data-testid="get-directions-btn"
                  >
                    Get Directions <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="card-soft p-6">
              <div className="font-heading text-lg text-navy">Nearby landmarks</div>
              <ul className="mt-4 space-y-3">
                {landmarks.map(({ icon: Icon, title, text }) => (
                  <li key={title} className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-4 w-4 text-gold-700" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-navy">{title}</div>
                      <div className="text-xs text-ink/60">{text}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
