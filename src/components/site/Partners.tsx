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
import faixaPedestreAsset from "@/assets/partners/aviso-faixa-pedestre.png.asset.json";
import transitoSeguroAsset from "@/assets/partners/aviso-transito-seguro.png.asset.json";
import autoGeralPardalAsset from "@/assets/partners/parceiro-auto-geral-pardal.png.asset.json";
import leiteSoutoAsset from "@/assets/partners/parceiro-leite-souto.png.asset.json";

const partnerSlides = [
  {
    image: faixaPedestreAsset.url,
    title: "Perceba o risco. Proteja a vida.",
    tag: "Aviso",
    icon: ShieldAlert,
    alt: "Aviso de segurança para atravessar somente na faixa de pedestre",
  },
  {
    image: transitoSeguroAsset.url,
    title: "Trânsito seguro",
    tag: "Aviso",
    icon: ShieldAlert,
    alt: "Aviso de trânsito seguro para pedestres, ciclistas, motociclistas e motoristas",
  },
  {
    image: autoGeralPardalAsset.url,
    title: "Auto Geral Pardal",
    tag: "Parceiro",
    icon: Handshake,
    alt: "Cartão do parceiro Auto Geral Pardal",
  },
  {
    image: leiteSoutoAsset.url,
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

        <Carousel opts={{ align: "center", loop: true }} plugins={[autoplay.current]} className="mx-auto mt-10 max-w-4xl">
          <CarouselContent className="-ml-5">
            {partnerSlides.map(({ image, title, tag, icon: Icon, alt }) => (
              <CarouselItem key={title} className="pl-5 md:basis-4/5">
                <article className="card-lift overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
                  <div className="flex min-h-[21rem] items-center justify-center bg-background p-4 sm:min-h-[26rem] sm:p-8">
                    <img
                      src={image}
                      alt={alt}
                      width={900}
                      height={600}
                      loading="lazy"
                      decoding="async"
                      className="max-h-[18rem] w-full object-contain sm:max-h-[22rem]"
                    />
                  </div>
                  <div className="flex items-center justify-between gap-4 border-t border-border p-5">
                    <div>
                      <p className="text-xs font-extrabold uppercase tracking-wide text-muted-foreground">{tag}</p>
                      <h3 className="mt-1 text-lg font-extrabold text-foreground">{title}</h3>
                    </div>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-yellow text-yellow-foreground">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </div>
                </article>
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