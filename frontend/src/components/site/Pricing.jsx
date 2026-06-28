import { Check } from "lucide-react";
import { PRICING, MEAL_PRICING } from "@/lib/data";

export default function Pricing() {
  return (
    <section id="pricing" data-testid="pricing-section" className="section-y bg-cloud">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">Transparent Pricing</span>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl text-navy leading-tight">
            Honest pricing. No hidden charges.
          </h2>
          <p className="mt-4 text-ink/70">
            Pick the room and the meal plan that fits your routine. Switch any time at the start of a month.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {PRICING.map((p) => (
            <div
              key={p.key}
              data-testid={`pricing-${p.key}`}
              className="relative bg-white rounded-3xl shadow-card border border-navy/[0.06] p-7 sm:p-8 flex flex-col"
            >
              <div className="flex items-baseline justify-between">
                <h3 className="font-heading text-2xl text-navy">{p.name}</h3>
                <span className="text-[11px] uppercase tracking-[0.2em] text-gold-600 font-semibold">
                  /month
                </span>
              </div>
              <p className="mt-1 text-sm text-ink/65">{p.headline}</p>

              <ul className="mt-6 space-y-3 flex-1">
                {p.plans.map((pl) => (
                  <li
                    key={pl.label}
                    className={`flex items-center justify-between rounded-xl px-4 py-3 border ${
                      pl.featured
                        ? "border-gold/50 bg-gold/5"
                        : "border-navy/10 bg-cloud/60"
                    }`}
                  >
                    <span className="flex items-center gap-2 text-sm text-ink/85">
                      <Check className={`h-4 w-4 ${pl.featured ? "text-gold-600" : "text-navy/70"}`} />
                      {pl.label}
                    </span>
                    <span className="font-heading text-lg text-navy">
                      ₹{pl.price.toLocaleString("en-IN")}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="btn-primary mt-7 w-full justify-center"
                data-testid={`pricing-book-${p.key}`}
              >
                Book {p.name}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-14 grid md:grid-cols-2 gap-6 items-stretch">
          <div className="card-soft p-7">
            <h4 className="font-heading text-xl text-navy">Meal Pricing (À la Carte)</h4>
            <p className="mt-1.5 text-sm text-ink/65">
              Don’t want a full plan? Pick individual meals as you go.
            </p>
            <div className="mt-5 grid grid-cols-3 gap-3">
              {MEAL_PRICING.map((m) => (
                <div key={m.meal} className="bg-cloud rounded-xl p-4 text-center">
                  <div className="text-xs uppercase tracking-wider text-ink/60">{m.meal}</div>
                  <div className="mt-1 font-heading text-2xl text-navy">₹{m.price}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="card-soft p-7 bg-navy text-white border-navy">
            <h4 className="font-heading text-xl">À la Carte Menu Available</h4>
            <p className="mt-2 text-white/80 text-sm leading-relaxed">
              Order any specific meal item from our daily menu – ideal for late shifts,
              travel days, or when you just want something different.
            </p>
            <a href="#contact" className="btn-gold mt-5 inline-flex" data-testid="pricing-menu-cta">
              Request Menu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
