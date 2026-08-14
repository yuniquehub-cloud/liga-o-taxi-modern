import { Calculator, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company, whatsappLink } from "@/config/company";

export function FinalCTA() {
  return (
    <section aria-labelledby="cta-final" className="surface-dark">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <h2 id="cta-final" className="max-w-2xl text-3xl font-extrabold sm:text-4xl">
          Precisa de um táxi? Fale com a {company.companyName}.
        </h2>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button variant="call" size="xl" asChild>
            <a href={`tel:${company.phoneTel}`}>
              <Phone aria-hidden="true" />
              Ligar Agora
            </a>
          </Button>
          <Button variant="outlineLight" size="xl" asChild>
            <a href={whatsappLink ?? `tel:${company.phoneTel}`}>
              <MessageCircle aria-hidden="true" />
              Chamar Táxi
            </a>
          </Button>
          <Button variant="outlineLight" size="xl" asChild>
            <a href="#estimativa">
              <Calculator aria-hidden="true" />
              Calcular Corrida
            </a>
          </Button>
        </div>

        <dl className="mt-12 grid gap-6 border-t border-graphite-foreground/15 pt-8 sm:grid-cols-3">
          <div className="flex items-start gap-3">
            <Phone className="mt-0.5 h-5 w-5 text-yellow" aria-hidden="true" />
            <div>
              <dt className="text-xs font-bold uppercase tracking-wide text-graphite-foreground/60">
                Telefone
              </dt>
              <dd className="mt-1 font-bold">
                <a href={`tel:${company.phoneTel}`}>{company.phone}</a>
              </dd>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Mail className="mt-0.5 h-5 w-5 text-yellow" aria-hidden="true" />
            <div>
              <dt className="text-xs font-bold uppercase tracking-wide text-graphite-foreground/60">
                E-mail
              </dt>
              <dd className="mt-1 break-all font-bold">
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </dd>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-5 w-5 text-yellow" aria-hidden="true" />
            <div>
              <dt className="text-xs font-bold uppercase tracking-wide text-graphite-foreground/60">
                Endereço
              </dt>
              <dd className="mt-1 font-bold">{company.address.short}</dd>
            </div>
          </div>
        </dl>
      </div>
    </section>
  );
}
