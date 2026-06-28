import { Building2, ShieldCheck, MapPin, Users, Sun, Sparkles } from "lucide-react";

const pillars = [
  { icon: Building2, title: "Corporate Living", desc: "Designed for working professionals & students who expect professional standards." },
  { icon: ShieldCheck, title: "Safety First", desc: "24x7 trained security, CCTV-monitored common areas and biometric access." },
  { icon: Users, title: "Vibrant Community", desc: "A curated community of residents from MNCs, startups and top institutes." },
  { icon: MapPin, title: "Prime Location", desc: "Walk to DLF Phase 3 Rapid Metro; minutes from Cyber City & Udyog Vihar." },
  { icon: Sun, title: "Natural Light", desc: "Wide openable windows and excellent ventilation in every spacious room." },
  { icon: Sparkles, title: "Spotless Hygiene", desc: "Daily housekeeping with thorough bathroom & common-area sanitisation." },
];

export default function About() {
  return (
    <section id="about" data-testid="about-section" className="section-y bg-white">
      <div className="container-x grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5">
          <span className="eyebrow">About Nestro</span>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl text-navy leading-tight">
            A premium residence, <br /> not just another PG.
          </h2>
          <p className="mt-5 text-ink/75 leading-relaxed">
            Nestro Housing PG is a professionally managed co-living residence in the heart
            of DLF Phase 3, Gurgaon. Built for working professionals, MNC employees,
            students and interns, every detail – from spacious rooms with natural light to
            home-style meals and a vigilant security setup – is crafted to feel like a
            premium corporate address.
          </p>
          <p className="mt-4 text-ink/75 leading-relaxed">
            We believe a great PG is where comfort, safety, community and location come
            together. That is exactly the experience our residents come home to, every day.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4 max-w-md">
            {[
              { k: "200+", v: "Residents" },
              { k: "15+", v: "Amenities" },
              { k: "4.9★", v: "Reviews" },
            ].map((s) => (
              <div key={s.v} className="card-soft p-4 text-center">
                <div className="font-heading text-2xl text-navy">{s.k}</div>
                <div className="text-xs uppercase tracking-wider text-ink/60 mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4 sm:gap-5">
          {pillars.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="card-soft p-6 transition-all duration-300 hover:shadow-lift hover:-translate-y-1"
              data-testid={`about-pillar-${title.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <div className="h-11 w-11 rounded-xl bg-navy/5 flex items-center justify-center">
                <Icon className="h-5 w-5 text-navy" />
              </div>
              <h3 className="mt-4 font-heading text-lg text-navy">{title}</h3>
              <p className="mt-1.5 text-sm text-ink/70 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
