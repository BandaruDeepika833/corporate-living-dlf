import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS } from "@/lib/data";

export default function FAQ() {
  return (
    <section id="faq" data-testid="faq-section" className="section-y bg-white">
      <div className="container-x grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <span className="eyebrow">FAQ</span>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl text-navy leading-tight">
            Questions, answered.
          </h2>
          <p className="mt-4 text-ink/70">
            Couldn&apos;t find what you were looking for? Reach out on WhatsApp or call – we&apos;ll get back fast.
          </p>
        </div>
        <div className="lg:col-span-8">
          <Accordion type="single" collapsible className="space-y-3" data-testid="faq-accordion">
            {FAQS.map((f, idx) => (
              <AccordionItem
                key={idx}
                value={`faq-${idx}`}
                className="card-soft px-5 sm:px-6 border-0"
                data-testid={`faq-item-${idx}`}
              >
                <AccordionTrigger className="text-left text-navy font-semibold text-base sm:text-lg hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-ink/75 leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
