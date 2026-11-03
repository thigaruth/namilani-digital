import { MessageCircle } from "lucide-react";
import { whatsappMessageHref } from "@/lib/site";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappMessageHref()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Namilani Digital on WhatsApp"
      className="group fixed bottom-5 right-5 z-40 inline-flex items-center gap-2.5 rounded-full bg-teal py-3 pl-3 pr-3 text-ink shadow-glow-teal transition-transform hover:scale-[1.04] active:scale-95 sm:bottom-6 sm:right-6 sm:pr-4"
    >
      <span className="relative inline-flex size-9 items-center justify-center rounded-full bg-navy text-white">
        <span className="absolute inset-0 animate-pulse-ring rounded-full bg-teal/50" aria-hidden="true" />
        <MessageCircle className="relative size-4" aria-hidden="true" />
      </span>
      <span className="hidden text-xs font-bold uppercase tracking-[0.12em] sm:inline">
        WhatsApp
      </span>
    </a>
  );
}
