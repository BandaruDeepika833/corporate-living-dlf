import { useState } from "react";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";
import { IMAGES, ROOMS } from "@/lib/data";

function RoomSlider({ images, alt }) {
  const [i, setI] = useState(0);
  const prev = () => setI((p) => (p - 1 + images.length) % images.length);
  const next = () => setI((p) => (p + 1) % images.length);
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-card group">
      <div className="aspect-[4/3] sm:aspect-[16/11]">
        <img
          src={images[i]}
          alt={alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </div>
      <button
        onClick={prev}
        aria-label="Previous"
        data-testid="room-slider-prev"
        className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/85 hover:bg-white text-navy backdrop-blur-sm flex items-center justify-center shadow-soft"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={next}
        aria-label="Next"
        data-testid="room-slider-next"
        className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/85 hover:bg-white text-navy backdrop-blur-sm flex items-center justify-center shadow-soft"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`h-1.5 rounded-full transition-all ${
              idx === i ? "w-6 bg-gold" : "w-1.5 bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Rooms() {
  return (
    <section id="rooms" data-testid="rooms-section" className="section-y bg-cloud">
      <div className="container-x">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div className="max-w-2xl">
            <span className="eyebrow">Choose your room</span>
            <h2 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl text-navy leading-tight">
              Rooms designed for how you actually live.
            </h2>
          </div>
          <p className="text-ink/70 text-sm sm:text-base max-w-md">
            Three room categories, all fully furnished, with the same uncompromising
            standards of comfort, hygiene and natural light.
          </p>
        </div>

        <div className="mt-10 sm:mt-14 space-y-14 sm:space-y-20">
          {ROOMS.map((r, idx) => {
            const imgs = r.key === "private" ? IMAGES.rooms.private : IMAGES.rooms.twin;
            return (
              <div
                key={r.key}
                data-testid={`room-${r.key}`}
                className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                <div className={`lg:col-span-7 ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                  <RoomSlider images={imgs} alt={r.name} />
                </div>
                <div className="lg:col-span-5">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-gold/10 text-gold-700 text-[11px] uppercase tracking-[0.18em] font-semibold">
                    {r.tag}
                  </span>
                  <h3 className="mt-4 font-heading text-3xl sm:text-4xl text-navy">{r.name}</h3>
                  <p className="mt-3 text-ink/75 leading-relaxed">{r.description}</p>
                  <ul className="mt-6 grid sm:grid-cols-2 gap-x-4 gap-y-2.5">
                    {r.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-ink/80">
                        <Check className="h-4 w-4 text-gold mt-0.5 flex-shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-7 flex items-center gap-5">
                    <div>
                      <div className="text-[11px] uppercase tracking-[0.2em] text-ink/55 font-semibold">
                        Starting at
                      </div>
                      <div className="font-heading text-2xl text-navy">
                        ₹{r.starting.toLocaleString("en-IN")}
                        <span className="text-sm font-sans text-ink/60"> / month</span>
                      </div>
                    </div>
                    <a href="#contact" className="btn-primary" data-testid={`book-${r.key}-btn`}>
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
