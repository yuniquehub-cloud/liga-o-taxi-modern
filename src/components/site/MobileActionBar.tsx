import { MessageCircle, Phone } from "lucide-react";
import { company, whatsappLink } from "@/config/company";

export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-border bg-background/95 backdrop-blur md:hidden">
      <a
        href={`tel:${company.phoneTel}`}
        className="flex min-h-14 items-center justify-center gap-2 bg-[image:var(--gradient-green)] text-sm font-extrabold text-green-foreground"
      >
        <Phone className="h-4 w-4" aria-hidden="true" />
        Ligar
      </a>
      <a
        href={whatsappLink ?? `tel:${company.phoneTel}`}
        target={whatsappLink ? "_blank" : undefined}
        rel={whatsappLink ? "noopener noreferrer" : undefined}
        className="flex min-h-14 items-center justify-center gap-2 bg-graphite text-sm font-extrabold text-graphite-foreground"
      >
        <MessageCircle className="h-4 w-4" aria-hidden="true" />
        {whatsappLink ? "WhatsApp" : "Chamar Táxi"}
      </a>
    </div>
  );
}
