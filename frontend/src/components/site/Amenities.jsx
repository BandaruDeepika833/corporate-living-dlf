import * as Icons from "lucide-react";
import { AMENITIES } from "@/lib/data";

export default function Amenities() {
  return (
    <section id="amenities" data-testid="amenities-section" className="section-y bg-white">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">Amenities</span>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl text-navy leading-tight">
            Premium amenities, included.
          </h2>
        </div>

        <div className="mt-10 sm:mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {AMENITIES.map(({ icon, title }) => {
            const Icon = Icons[icon] || Icons.Sparkles;
            return (
              <div
                key={title}
                data-testid={`amenity-${title.toLowerCase().replace(/\s+/g, "-")}`}
                className="card-soft p-5 sm:p-6 flex items-center gap-4 transition-all duration-300 hover:shadow-card hover:border-gold/40"
              >
                <div className="h-11 w-11 rounded-xl bg-navy/[0.06] flex items-center justify-center">
                  <Icon className="h-5 w-5 text-navy" />
                </div>
                <div className="font-semibold text-navy text-sm sm:text-base">{title}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
