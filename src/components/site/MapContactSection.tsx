import { Clock, MapPin, Navigation, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company, mapsDirectionsLink, mapsEmbedLink } from "@/config/company";

export function MapContactSection() {
  return (
    <section id="contato" className="border-b border-border bg-secondary/60">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">Onde estamos</h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Nossa base fica na Mooca, em São Paulo. Fale com a central ou venha até nós.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
            <iframe
              title="Mapa com a localização da Rádio Táxi Ligação na Mooca, São Paulo"
              src={mapsEmbedLink}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-72 w-full border-0 sm:h-full sm:min-h-[26rem]"
            />
          </div>

          <div className="grid gap-4">
            <article className="rounded-2xl bg-card p-6 shadow-soft">
              <MapPin className="h-5 w-5 text-yellow-strong" aria-hidden="true" />
              <h3 className="mt-3 text-base font-extrabold text-foreground">Endereço</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{company.address.short}</p>
              <p className="text-sm text-muted-foreground">CEP {company.address.zip}</p>
            </article>

            <article className="rounded-2xl bg-card p-6 shadow-soft">
              <Phone className="h-5 w-5 text-yellow-strong" aria-hidden="true" />
              <h3 className="mt-3 text-base font-extrabold text-foreground">Telefone</h3>
              <a
                href={`tel:${company.phoneTel}`}
                className="mt-1.5 inline-block text-sm font-bold text-foreground underline decoration-yellow decoration-2 underline-offset-4"
              >
                011 3535-5832
              </a>
              <p className="mt-1 text-sm text-muted-foreground">{company.email}</p>
            </article>

            <article className="rounded-2xl bg-card p-6 shadow-soft">
              <Clock className="h-5 w-5 text-yellow-strong" aria-hidden="true" />
              <h3 className="mt-3 text-base font-extrabold text-foreground">Horário de atendimento</h3>
              <ul className="mt-1.5 space-y-1 text-sm text-muted-foreground">
                <li>Seg-Sex: 5:00am - 7:30pm</li>
                <li>Sábado: 7:00am - 12:30pm</li>
              </ul>
            </article>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button variant="outlineDark" size="xl" className="flex-1" asChild>
                <a href={mapsDirectionsLink} target="_blank" rel="noopener noreferrer">
                  <Navigation aria-hidden="true" />
                  Como Chegar
                </a>
              </Button>
              <Button variant="cta" size="xl" className="flex-1" asChild>
                <a href={`tel:${company.phoneTel}`}>
                  <Phone aria-hidden="true" />
                  Ligar para a Central
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
