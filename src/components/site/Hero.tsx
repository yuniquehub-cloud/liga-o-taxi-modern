import { CalendarPlus, Calculator, MapPin, Phone, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import taxiCutout from "@/assets/taxi-cutout.png.asset.json";
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
          <h1 className="mt-6 text-[2.6rem] font-extrabold leading-[1.03] tracking-[-0.02em] sm:text-5xl lg:text-[3.7rem]">
            <span className="block text-graphite-foreground/60 text-[0.62em] font-semibold uppercase tracking-[0.18em]">
              Seu táxi na
            </span>
            <span className="mt-1 block italic text-yellow [text-shadow:0_2px_24px_color-mix(in_oklab,var(--yellow)_35%,transparent)]">
              <span className="relative inline-block">
                Mooca
                <span
                  className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-yellow/50"
                  aria-hidden="true"
                />
              </span>
            </span>
            <span className="block">
              e em <span className="italic font-black">São&nbsp;Paulo</span>,
            </span>
            <span className="block text-graphite-foreground/80">
              com <span className="not-italic text-graphite-foreground">segurança</span>{" "}
              <span className="italic text-yellow/90">e praticidade.</span>
            </span>
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
          <div className="relative isolate flex min-h-[17rem] items-center justify-center px-2 pb-10 sm:min-h-[21rem]">
            <div
              className="animate-halo-pulse absolute left-1/2 top-1/2 -z-10 h-[15rem] w-[15rem] -translate-x-1/2 -translate-y-[58%] rounded-full bg-yellow/25 blur-[70px] sm:h-[20rem] sm:w-[20rem]"
              aria-hidden="true"
            />
            <div
              className="absolute left-1/2 top-1/2 -z-10 h-[15rem] w-[15rem] -translate-x-1/2 -translate-y-[58%] rounded-full border border-graphite-foreground/10 sm:h-[21rem] sm:w-[21rem]"
              aria-hidden="true"
            />
            <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
              {[
                { top: "32%", width: "42%", delay: "0s" },
                { top: "46%", width: "58%", delay: "0.5s" },
                { top: "60%", width: "34%", delay: "1.1s" },
              ].map((line) => (
                <span
                  key={line.top}
                  className="animate-speed-line absolute right-0 h-px origin-right bg-[linear-gradient(90deg,transparent,color-mix(in_oklab,var(--yellow)_70%,transparent))]"
                  style={{ top: line.top, width: line.width, animationDelay: line.delay }}
                />
              ))}
            </div>
            <img
              src={taxiCutout.url}
              alt="Táxi branco da Rádio Táxi Ligação com luminoso amarelo de táxi"
              width={916}
              height={692}
              loading="eager"
              decoding="async"
              className="animate-taxi-float relative w-full max-w-[26rem] drop-shadow-[0_28px_40px_oklch(0_0_0/45%)]"
            />
            <div
              className="animate-shadow-breathe absolute bottom-8 left-1/2 h-6 w-[68%] -translate-x-1/2 rounded-[50%] bg-black/60 blur-xl"
              aria-hidden="true"
            />
            <div className="absolute bottom-3 left-0 right-0 overflow-hidden" aria-hidden="true">
              <div className="road-dash h-[3px] w-full opacity-70" />
            </div>
          </div>

          <div className="mx-auto mt-6 flex max-w-[22rem] items-center gap-3 rounded-2xl border border-graphite-foreground/15 bg-graphite/60 p-4 backdrop-blur">
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
