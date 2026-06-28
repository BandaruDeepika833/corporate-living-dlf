import { IMAGES } from "@/lib/data";
import { ArrowRight } from "lucide-react";

const items = [
  { key: "gym", title: "Modern Gym", text: "A fully equipped gym with cardio + strength stations, perfect for daily workouts.", img: IMAGES.lifestyle.gym },
  { key: "gaming", title: "Gaming Lounge", text: "PS, snooker, table tennis & board games to unwind after a long workday.", img: IMAGES.lifestyle.gaming },
  { key: "dining", title: "Dining Area", text: "Hygienic, well-lit dining hall serving home-style meals and à la carte options.", img: IMAGES.lifestyle.dining },
  { key: "lounge", title: "Community Lounge", text: "Bright lounges to network, read or watch the big game with neighbours.", img: IMAGES.lifestyle.lounge },
  { key: "laundry", title: "Laundry Area", text: "In-house laundry with washing machines and dedicated drying zones.", img: IMAGES.lifestyle.laundry },
  { key: "parking", title: "Parking", text: "Secure two-wheeler parking inside the premises; four-wheeler on request.", img: IMAGES.lifestyle.parking },
  { key: "exterior", title: "Exterior", text: "A clean, modern facade in a quiet residential street of DLF Phase 3.", img: IMAGES.lifestyle.exterior },
];

export default function Lifestyle() {
  return (
    <section id="lifestyle" data-testid="lifestyle-section" className="section-y bg-white">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">Inside the residence</span>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl text-navy leading-tight">
            A lifestyle, not just a stay.
          </h2>
        </div>

        <div className="mt-10 sm:mt-14 space-y-6">
          {items.map((it, idx) => (
            <article
              key={it.key}
              data-testid={`lifestyle-${it.key}`}
              className={`group grid lg:grid-cols-12 gap-6 lg:gap-10 items-center bg-cloud rounded-3xl overflow-hidden shadow-soft border border-navy/[0.05] ${
                idx % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="relative lg:col-span-7 h-64 sm:h-80 lg:h-96 overflow-hidden">
                <img
                  src={it.img}
                  alt={it.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10">
                <h3 className="font-heading text-2xl sm:text-3xl text-navy">{it.title}</h3>
                <p className="mt-3 text-ink/75 leading-relaxed">{it.text}</p>
                <a href="#contact" className="btn-secondary mt-6 text-sm">
                  Book a Visit <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
