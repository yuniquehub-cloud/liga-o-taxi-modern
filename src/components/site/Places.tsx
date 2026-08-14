import museu from "@/assets/sp-museu-imigracao.jpg";
import ibirapuera from "@/assets/sp-ibirapuera.jpg";
import mercado from "@/assets/sp-mercado-municipal.jpg";
import masp from "@/assets/sp-masp.jpg";
import liberdade from "@/assets/sp-liberdade.jpg";
import pacaembu from "@/assets/sp-pacaembu.jpg";
import transatlantico from "@/assets/sp-transatlantico.jpg";
import guaruja from "@/assets/sp-guaruja-praia.jpg";
import congonhas from "@/assets/sp-congonhas.jpg";
import gru from "@/assets/sp-gru.jpg";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const places = [
  {
    image: museu,
    title: "Museu da Imigração",
    text: "Fica no complexo histórico da antiga Hospedaria de Imigrantes do Brás.",
  },
  {
    image: ibirapuera,
    title: "Parque do Ibirapuera",
    text: "Ideal para um passeio ao ar livre, andar de bicicleta ou fazer um piquenique.",
  },
  {
    image: mercado,
    title: "Mercado Municipal Paulistano",
    text: "Visita obrigatória: um dos pontos gourmet mais tradicionais da cidade.",
  },
  {
    image: masp,
    title: "MASP",
    text: "Museu de Arte de São Paulo, o primeiro museu moderno do Brasil.",
  },
  {
    image: liberdade,
    title: "Bairro da Liberdade",
    text: "Maior reduto da comunidade japonesa de SP, referência fora do Japão.",
  },
  {
    image: pacaembu,
    title: "Estádio do Pacaembu",
    text: "Arquitetura histórica do Estádio Municipal Paulo Machado de Carvalho.",
  },
  {
    image: transatlantico,
    title: "Transatlântico no Guarujá",
    text: "Levamos você até o embarque dos cruzeiros na região de Santos e Guarujá.",
  },
  {
    image: guaruja,
    title: "Praias do Guarujá",
    text: "Corridas para o litoral: Enseada, Pitangueiras e praias vizinhas.",
  },
  {
    image: congonhas,
    title: "Aeroporto de Congonhas",
    text: "Transfer pontual para voos domésticos, com acompanhamento do horário.",
  },
  {
    image: gru,
    title: "Aeroporto de Guarulhos (GRU)",
    text: "Traslado para voos nacionais e internacionais, ida e volta agendadas.",
  },
];

export function Places() {
  const autoplay = useRef(
    Autoplay({ delay: 3000, stopOnMouseEnter: true, stopOnInteraction: false }),
  );

  return (
    <section
      id="lugares"
      aria-labelledby="lugares-titulo"
      className="surface-glow relative overflow-hidden border-b border-border"
    >
      <div className="pointer-events-none absolute inset-0 grid-lines-light" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-24">
        <div className="max-w-2xl">
          <p className="eyebrow text-yellow-foreground/70">Turismo</p>
          <h2 id="lugares-titulo" className="mt-3 text-4xl font-extrabold text-foreground sm:text-5xl">
            Lugares para conhecer em São Paulo
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Leve seu roteiro pela cidade com um táxi que conhece as rotas.
          </p>
        </div>

        <Carousel opts={{ align: "start", loop: true }} plugins={[autoplay.current]} className="mt-10">
          <CarouselContent className="-ml-5">
            {places.map((p) => (
              <CarouselItem key={p.title} className="pl-5 sm:basis-4/5 lg:basis-1/2">
                <article className="card-lift group relative h-full overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
                  <img
                    src={p.image}
                    alt={p.title}
                    width={1024}
                    height={768}
                    loading="lazy"
                    decoding="async"
                    className="h-[20rem] w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-[26rem]"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(to_top,oklch(0.12_0.01_70/90%)_0%,oklch(0.12_0.01_70/55%)_60%,transparent_100%)] p-6 pt-14">
                    <h3 className="text-xl font-extrabold text-graphite-foreground sm:text-2xl">{p.title}</h3>
                    <p className="mt-2 max-w-md text-base leading-relaxed text-graphite-foreground/80">{p.text}</p>
                  </div>
                  <span
                    className="absolute right-4 top-4 h-1.5 w-8 rounded-full bg-yellow opacity-0 transition-opacity group-hover:opacity-100"
                    aria-hidden="true"
                  />
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-6 flex items-center justify-between gap-4">
            <p className="text-sm font-semibold text-muted-foreground">Arraste para ver mais destinos</p>
            <div className="flex gap-2">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
}