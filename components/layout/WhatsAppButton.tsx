import { MessageCircle } from "lucide-react";
import { whatsappMessageHref } from "@/lib/site";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappMessageHref()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Namilani Digital on WhatsApp"
      className="group fixed bottom-5 right-5 z-40 inline-flex items-center gap-2.5 border border-forest/15 bg-forest px-3 py-3 text-paper transition-colors hover:border-coral hover:bg-coral hover:text-ink sm:bottom-6 sm:right-6 sm:pr-4"
    >
      <MessageCircle className="size-4" aria-hidden="true" />
      <span className="hidden text-[0.625rem] font-semibold uppercase tracking-[0.16em] sm:inline">
        WhatsApp
      </span>
    </a>
  );
}
