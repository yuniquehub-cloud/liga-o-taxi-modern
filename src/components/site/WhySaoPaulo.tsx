import { Phone, Snowflake, Plane, Landmark, Clock, MapPinned, Waves, Ticket, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { company, whatsappLink } from "@/config/company";

const highlights = [
  { icon: ShieldCheck, title: "Serviço na Mooca", text: "O melhor serviço de táxi na Mooca, em São Paulo." },
  { icon: Snowflake, title: "Conforto", text: "Carros com ar-condicionado e motoristas qualificados." },
  { icon: Waves, title: "Litoral e interior", text: "Preços especiais para o Litoral e o Interior paulista." },
  { icon: Clock, title: "Reserva antecipada", text: "Reserve seu táxi com antecedência, sem custo adicional." },
  { icon: Plane, title: "Aeroportos", text: "Atendimento em aeroportos, com sinal de identificação." },
  { icon: Landmark, title: "Pontos turísticos", text: "Passeios aos principais pontos turísticos de São Paulo." },
  { icon: Ticket, title: "Pacotes", text: "Pacotes para reservas por tempo pré-determinado." },
  { icon: MapPinned, title: "Regiões atendidas", text: "Mooca, Tatuapé, Vila Prudente, Belém e Brás." },
];

export function WhySaoPaulo() {
  return (
    <section
      id="conheca-sp"
      aria-labelledby="conheca-sp-titulo"
      className="surface-soft relative overflow-hidden border-b border-border"
    >
      <div className="pointer-events-none absolute inset-0 grid-lines-light" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <h2
          id="conheca-sp-titulo"
          className="max-w-2xl text-3xl font-extrabold text-foreground sm:text-4xl"
        >
          Conheça São Paulo através dos{" "}
          <span className="italic text-yellow-strong">serviços de táxi</span>
        </h2>
        <div className="mt-5 h-1 w-16 rounded-full bg-yellow" />

        <Carousel opts={{ align: "start", loop: true }} className="mt-10">
          <CarouselContent className="-ml-4">
            {highlights.map(({ icon: Icon, title, text }) => (
              <CarouselItem key={title} className="pl-4 sm:basis-1/2 lg:basis-1/3">
                <article className="card-lift h-full rounded-2xl border border-border bg-card p-6 shadow-soft">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow">
                    <Icon className="h-5 w-5 text-yellow-foreground" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-base font-extrabold text-foreground">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-6 flex items-center gap-3">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Arraste para ver mais
            </p>
          </div>
        </Carousel>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button variant="call" size="xl" asChild>
            <a href={`tel:${company.phoneTel}`}>
              <Phone aria-hidden="true" />
              Ligar para a central
            </a>
          </Button>
          {whatsappLink ? (
            <Button variant="outlineDark" size="xl" asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Chamar no WhatsApp
              </a>
            </Button>
          ) : null}
        </div>
      </div>
    </section>
  );
}