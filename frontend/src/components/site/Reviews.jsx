import { Star, Quote } from "lucide-react";
import { REVIEWS } from "@/lib/data";

export default function Reviews() {
  return (
    <section id="reviews" data-testid="reviews-section" className="section-y bg-cloud">
      <div className="container-x">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div className="max-w-2xl">
            <span className="eyebrow">Google Reviews</span>
            <h2 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl text-navy leading-tight">
              Loved by residents.
            </h2>
          </div>
          <div className="flex items-center gap-3 card-soft px-5 py-3">
            <div className="flex">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-5 w-5 fill-gold text-gold" />
              ))}
            </div>
            <div>
              <div className="text-navy font-heading text-lg">4.9 / 5</div>
              <div className="text-xs text-ink/60">Based on Google Reviews</div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {REVIEWS.map((r, i) => (
            <article
              key={r.name}
              data-testid={`review-${i}`}
              className="card-soft p-6 flex flex-col transition-all duration-300 hover:shadow-card hover:-translate-y-1"
            >
              <Quote className="h-6 w-6 text-gold" />
              <p className="mt-4 text-ink/80 text-sm leading-relaxed flex-1">&ldquo;{r.text}&rdquo;</p>
              <div className="mt-5 pt-5 border-t border-navy/10">
                <div className="font-semibold text-navy">{r.name}</div>
                <div className="text-xs text-ink/60">{r.role}</div>
                <div className="mt-2 flex">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
