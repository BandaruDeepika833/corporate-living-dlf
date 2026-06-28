import { ArrowDown, MessageCircle, Phone } from "lucide-react";
import { IMAGES } from "@/lib/data";
import { BUSINESS, callLink, whatsappLink } from "@/lib/api";

export default function Hero() {
  return (
    <section id="top" data-testid="hero-section" className="relative isolate overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${IMAGES.heroBuilding})` }}
        aria-hidden
      />
      {/* Very light navy overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-navy/30 via-navy/20 to-navy/55" aria-hidden />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.10),_transparent_60%)]" aria-hidden />

      <div className="container-x pt-32 sm:pt-40 lg:pt-48 pb-24 sm:pb-32 lg:pb-40">
        <div className="max-w-3xl animate-fade-up">
          <span className="eyebrow text-gold !text-gold-200" data-testid="hero-eyebrow">
            <span className="h-px w-8 bg-gold-200" /> Premium PG & Co-living
          </span>
          <h1
            data-testid="hero-headline"
            className="mt-5 font-heading text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-shadow-strong"
          >
            {BUSINESS.name}
          </h1>
          <p
            data-testid="hero-subhead"
            className="mt-4 sm:mt-5 text-lg sm:text-xl text-white/95 text-shadow-strong font-light max-w-2xl"
          >
            {BUSINESS.tagline}
          </p>
          <p className="mt-5 text-sm sm:text-base text-white/90 max-w-2xl leading-relaxed text-shadow-strong">
            Premium fully furnished accommodation designed for students and working
            professionals with modern amenities, home-style meals and a vibrant community.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3">
            <a href="#contact" className="btn-gold" data-testid="hero-book-btn">
              Book a Room
            </a>
            <a href={callLink} className="btn-secondary !bg-white/95" data-testid="hero-call-btn">
              <Phone className="h-4 w-4" /> Call Now
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary !bg-white/95"
              data-testid="hero-whatsapp-btn"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      <a
        href="#categories"
        className="absolute left-1/2 -translate-x-1/2 bottom-6 sm:bottom-8 z-10 flex flex-col items-center gap-1 text-white/85 hover:text-white"
        data-testid="hero-scroll-indicator"
      >
        <span className="text-[10px] uppercase tracking-[0.25em]">Scroll</span>
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  );
}
