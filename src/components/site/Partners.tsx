import Autoplay from "embla-carousel-autoplay";
import { Handshake, ShieldAlert } from "lucide-react";
import { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import faixaPedestre from "@/assets/partners/aviso-faixa-pedestre.png";
import transitoSeguro from "@/assets/partners/aviso-transito-seguro.png";
import autoGeralPardal from "@/assets/partners/parceiro-auto-geral-pardal.png";
import leiteSouto from "@/assets/partners/parceiro-leite-souto.png";

const partnerSlides = [
  {
    image: faixaPedestre,
    title: "Perceba o risco. Proteja a vida.",
    tag: "Aviso",
    icon: ShieldAlert,
    alt: "Aviso de segurança para atravessar somente na faixa de pedestre",
  },
  {
    image: transitoSeguro,
    title: "Trânsito seguro",
    tag: "Aviso",
    icon: ShieldAlert,
    alt: "Aviso de trânsito seguro para pedestres, ciclistas, motociclistas e motoristas",
  },
  {
    image: autoGeralPardal,
    title: "Auto Geral Pardal",
    tag: "Parceiro",
    icon: Handshake,
    alt: "Cartão do parceiro Auto Geral Pardal",
  },
  {
    image: leiteSouto,
    title: "Leite e Souto Advogados",
    tag: "Parceiro",
    icon: Handshake,
    alt: "Marca Leite e Souto Sociedade de Advogados",
  },
];

export function Partners() {
  const autoplay = useRef(
    Autoplay({ delay: 3500, stopOnMouseEnter: true, stopOnInteraction: false }),
  );

  return (
    <section id="parceiros" aria-labelledby="parceiros-titulo" className="surface-soft relative overflow-hidden border-b border-border">
      <div className="pointer-events-none absolute inset-0 grid-lines-light" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center text-yellow-foreground/70">Rede de apoio</p>
          <h2 id="parceiros-titulo" className="mt-3 text-4xl font-extrabold text-foreground sm:text-5xl">
            Parceiros e Avisos
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-yellow" aria-hidden="true" />
        </div>

        <Carousel opts={{ align: "start", loop: true }} plugins={[autoplay.current]} className="mx-auto mt-10 max-w-6xl">
          <CarouselContent className="-ml-6">
            {partnerSlides.map(({ image, title, tag, icon: Icon, alt }) => (
              <CarouselItem key={title} className="pl-6 sm:basis-1/2">
                <figure className="flex h-full flex-col items-center">
                  <div className="flex w-full flex-1 items-center justify-center rounded-2xl bg-background p-6 shadow-soft">
                    <img
                      src={image}
                      alt={alt}
                      loading="lazy"
                      decoding="async"
                      className="h-auto max-h-[18rem] w-auto max-w-full object-contain"
                    />
                  </div>
                  <figcaption className="mt-4 flex items-center justify-center gap-2 text-center">
                    <Icon className="h-4 w-4 text-yellow-foreground" aria-hidden="true" />
                    <span className="text-xs font-extrabold uppercase tracking-wide text-muted-foreground">{tag}</span>
                    <span className="text-sm font-extrabold text-foreground">{title}</span>
                  </figcaption>
                </figure>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-6 flex items-center justify-center gap-3">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Arraste para ver mais</p>
          </div>
        </Carousel>

      </div>
    </section>
  );
}