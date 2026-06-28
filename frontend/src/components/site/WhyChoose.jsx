import * as Icons from "lucide-react";
import { WHY_CHOOSE } from "@/lib/data";

export default function WhyChoose() {
  return (
    <section id="why" data-testid="why-section" className="section-y bg-cloud">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">Why Choose Nestro</span>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl text-navy leading-tight">
            Everything you need to live well, work better.
          </h2>
          <p className="mt-4 text-ink/70 max-w-xl">
            13 carefully chosen essentials that turn a PG into a premium residence.
          </p>
        </div>

        <div className="mt-10 sm:mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5">
          {WHY_CHOOSE.map(({ icon, title }) => {
            const Icon = Icons[icon] || Icons.Sparkles;
            return (
              <div
                key={title}
                data-testid={`why-card-${title.toLowerCase().replace(/\s+/g, "-")}`}
                className="card-soft p-5 sm:p-6 text-center transition-all duration-300 hover:shadow-card hover:-translate-y-1 hover:border-gold/40"
              >
                <div className="mx-auto h-12 w-12 rounded-full bg-navy text-white flex items-center justify-center transition-colors duration-300 group-hover:bg-gold">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="mt-3.5 text-sm font-semibold text-navy">{title}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
