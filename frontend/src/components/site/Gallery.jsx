import { useMemo, useState } from "react";
import { X } from "lucide-react";
import { IMAGES } from "@/lib/data";

const CATEGORIES = [
  "All",
  "Private Rooms",
  "Twin Sharing",
  "Bathrooms",
  "Dining",
  "Gym",
  "Gaming Area",
  "Common Area",
  "Reception",
  "Exterior",
];

export default function Gallery() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState(null);

  const items = useMemo(
    () => (active === "All" ? IMAGES.gallery : IMAGES.gallery.filter((g) => g.cat === active)),
    [active],
  );

  return (
    <section id="gallery" data-testid="gallery-section" className="section-y bg-white">
      <div className="container-x">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div className="max-w-2xl">
            <span className="eyebrow">Gallery</span>
            <h2 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl text-navy leading-tight">
              A closer look at the residence.
            </h2>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-2" data-testid="gallery-filter">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              data-testid={`gallery-filter-${c.toLowerCase().replace(/\s+/g, "-")}`}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                active === c
                  ? "bg-navy text-white shadow-soft"
                  : "bg-cloud text-navy/70 hover:bg-navy/5"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-8 sm:mt-10 columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-5 [column-fill:_balance]">
          {items.map((g, idx) => (
            <button
              key={`${g.src}-${idx}`}
              onClick={() => setLightbox(g)}
              data-testid={`gallery-item-${idx}`}
              className="group relative mb-4 sm:mb-5 block w-full overflow-hidden rounded-2xl shadow-soft border border-navy/[0.05] break-inside-avoid"
            >
              <img
                src={g.src}
                alt={g.cat}
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-white text-xs uppercase tracking-[0.2em] font-semibold">
                  {g.cat}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          role="dialog"
          aria-modal="true"
          data-testid="gallery-lightbox"
          className="fixed inset-0 z-[60] bg-navy/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            aria-label="Close"
            data-testid="gallery-lightbox-close"
            className="absolute top-5 right-5 h-11 w-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
          >
            <X className="h-5 w-5" />
          </button>
          <img
            src={lightbox.src}
            alt={lightbox.cat}
            className="max-h-[88vh] max-w-full rounded-2xl shadow-lift"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
