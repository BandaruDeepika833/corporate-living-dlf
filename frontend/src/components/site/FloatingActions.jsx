import { MessageCircle, Phone, CalendarCheck } from "lucide-react";
import { callLink, whatsappLink } from "@/lib/api";

export default function FloatingActions() {
  return (
    <div
      data-testid="floating-actions"
      className="fixed right-4 sm:right-6 bottom-4 sm:bottom-6 z-30 flex flex-col gap-3"
    >
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        data-testid="float-whatsapp"
        className="h-13 w-13 sm:h-14 sm:w-14 rounded-full bg-[#25D366] text-white shadow-lift flex items-center justify-center transition-transform hover:scale-110"
        style={{ height: 56, width: 56 }}
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <a
        href={callLink}
        aria-label="Call"
        data-testid="float-call"
        className="rounded-full bg-navy text-white shadow-lift flex items-center justify-center transition-transform hover:scale-110 hover:bg-gold"
        style={{ height: 56, width: 56 }}
      >
        <Phone className="h-5 w-5" />
      </a>
      <a
        href="#contact"
        aria-label="Book Visit"
        data-testid="float-book"
        className="hidden sm:inline-flex rounded-full bg-gold text-white shadow-lift items-center justify-center transition-transform hover:scale-110 hover:bg-navy"
        style={{ height: 56, width: 56 }}
      >
        <CalendarCheck className="h-5 w-5" />
      </a>
    </div>
  );
}
