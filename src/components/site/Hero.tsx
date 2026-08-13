import { CalendarPlus, Calculator, MapPin, Phone, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import taxiFrota from "@/assets/taxi-frota.jpg.asset.json";
import { company } from "@/config/company";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden surface-dark">
      <div className="checker absolute inset-x-0 top-0" aria-hidden="true" />
      <div className="absolute inset-0 grid-lines opacity-60" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 pb-16 pt-16 sm:px-6 md:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:pb-24">
        <div className="animate-fade-up">
          <p className="eyebrow rounded-full border border-graphite-foreground/20 px-3.5 py-1.5 text-graphite-foreground/80">
            <MapPin className="h-3.5 w-3.5 text-yellow" aria-hidden="true" />
            São Paulo · Mooca
          </p>
          <h1 className="mt-6 text-[2.6rem] font-extrabold leading-[1.03] sm:text-5xl lg:text-[3.7rem]">
            Seu táxi na Mooca e em São Paulo, com segurança e praticidade.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-graphite-foreground/75">
            Conte com a {company.companyName} para um atendimento rápido, profissional e confiável.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button variant="cta" size="xl" asChild>
              <a href={`tel:${company.phoneTel}`}>
                <Phone aria-hidden="true" />
                Ligar Agora
              </a>
            </Button>
            <Button variant="outlineLight" size="xl" asChild>
              <a href="#estimativa">
                <Calculator aria-hidden="true" />
                Calcular Corrida
              </a>
            </Button>
            <Button variant="outlineLight" size="xl" asChild>
              <a href="#agendar">
                <CalendarPlus aria-hidden="true" />
                Agendar
              </a>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-graphite-foreground/15 pt-6">
            <p className="text-sm font-semibold">
              <span className="block text-xs font-bold uppercase tracking-wide text-graphite-foreground/55">
                Central
              </span>
              <a
                href={`tel:${company.phoneTel}`}
                className="mt-1 block text-xl font-extrabold text-yellow"
              >
                {company.phone}
              </a>
            </p>
            {company.businessHours.map((h) => (
              <p key={h.label} className="text-sm font-semibold">
                <span className="block text-xs font-bold uppercase tracking-wide text-graphite-foreground/55">
                  {h.label}
                </span>
                <span className="mt-1 block text-base font-extrabold">{h.value}</span>
              </p>
            ))}
          </div>
        </div>

        <div className="relative animate-fade-up">
          <div className="absolute -inset-3 rounded-[2rem] bg-yellow/10 blur-2xl" aria-hidden="true" />
          <figure className="relative overflow-hidden rounded-[1.75rem] border border-graphite-foreground/15 shadow-lift">
            <div className="checker-light" aria-hidden="true" />
            <img
              src={taxiFrota.url}
              alt="Táxi branco da Rádio Táxi Ligação com luminoso de táxi, estacionado em São Paulo"
              width={1024}
              height={1024}
              loading="eager"
              decoding="async"
              className="aspect-[4/3] w-full object-cover object-center"
            />
          </figure>
          <div className="mt-5 flex items-center gap-3 rounded-2xl border border-graphite-foreground/15 bg-graphite/60 p-4 backdrop-blur sm:absolute sm:-bottom-8 sm:left-6 sm:mt-0 sm:max-w-[17rem]">
            <ShieldCheck className="h-6 w-6 shrink-0 text-yellow" aria-hidden="true" />
            <p className="text-sm font-semibold leading-snug">
              Táxi regulamentado, motorista identificado e taxímetro oficial.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
