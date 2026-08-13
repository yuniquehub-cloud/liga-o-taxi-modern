import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/config/company";

export function WhatsAppButton() {
  if (!whatsappLink) return null;
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chamar táxi pelo WhatsApp"
      className="fixed bottom-24 right-4 z-40 flex h-13 w-13 items-center justify-center rounded-full bg-yellow text-yellow-foreground shadow-lift transition-transform hover:scale-105 md:bottom-6"
    >
      <MessageCircle className="h-6 w-6" aria-hidden="true" />
    </a>
  );
}
