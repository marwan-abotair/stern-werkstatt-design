import { Phone, MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/contact";

export function MobileCallBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 grid grid-cols-2 shadow-[0_-4px_12px_rgba(0,0,0,0.15)]">
      <a
        href={CONTACT.phoneHref}
        className="flex items-center justify-center gap-2 bg-red-accent text-red-accent-foreground py-3 font-semibold"
      >
        <Phone className="h-5 w-5" /> Anrufen
      </a>
      <a
        href={CONTACT.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-whatsapp text-white py-3 font-semibold"
      >
        <MessageCircle className="h-5 w-5" /> WhatsApp
      </a>
    </div>
  );
}
