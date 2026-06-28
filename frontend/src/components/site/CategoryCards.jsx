import { IMAGES } from "@/lib/data";

const cards = [
  { key: "private", title: "Private Room", desc: "Single-occupancy fully furnished rooms with wide windows.", img: IMAGES.category.private },
  { key: "twin", title: "Twin Sharing Room", desc: "Spacious shared rooms with individual storage & study area.", img: IMAGES.category.twin },
  { key: "common", title: "Common Area", desc: "Bright community lounges for unwinding & socialising.", img: IMAGES.category.common },
  { key: "dining", title: "Dining Area", desc: "Hygienic dining hall serving home-style meals daily.", img: IMAGES.category.dining },
];

export default function CategoryCards() {
  return (
    <section id="categories" data-testid="category-cards-section" className="bg-cloud section-y">
      <div className="container-x">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10 sm:mb-14">
          <div className="max-w-2xl">
            <span className="eyebrow">Explore the residence</span>
            <h2 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl text-navy leading-tight">
              Step inside Nestro Housing PG
            </h2>
          </div>
          <p className="text-ink/70 max-w-md text-sm sm:text-base">
            Four spaces, one premium experience – professionally designed for residents who value comfort, focus and community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {cards.map((c) => (
            <a
              key={c.key}
              href="#rooms"
              data-testid={`category-card-${c.key}`}
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden shadow-card border border-navy/[0.06]"
            >
              <img
                src={c.img}
                alt={c.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 text-white">
                <h3 className="font-heading text-xl sm:text-2xl">{c.title}</h3>
                <p className="mt-1.5 text-sm text-white/85">{c.desc}</p>
                <div className="mt-3 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold-200 font-semibold opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  View details →
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 flex justify-center">
          <a href="#contact" className="btn-gold !px-10 !py-4 text-base" data-testid="categories-book-cta">
            Book Your Room
          </a>
        </div>
      </div>
    </section>
  );
}
