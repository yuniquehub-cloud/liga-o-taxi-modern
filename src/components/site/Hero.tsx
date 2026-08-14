import { CalendarPlus, Calculator, MapPin, Phone, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import fleetTaxis from "@/assets/fleet-taxis.jpg";
import { company, whatsappLink } from "@/config/company";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden surface-dark">
      <img
        src={fleetTaxis}
        alt="Fila de táxis brancos da Rádio Táxi Ligação estacionados em rua de São Paulo"
        width={1400}
        height={787}
        loading="eager"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(100deg,oklch(0.16_0.01_70/94%)_0%,oklch(0.16_0.01_70/85%)_45%,oklch(0.16_0.01_70/55%)_100%)]"
        aria-hidden="true"
      />
      <div className="checker absolute inset-x-0 top-0" aria-hidden="true" />
      <div className="absolute inset-0 grid-lines opacity-30" aria-hidden="true" />
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
            <Button variant="call" size="xl" asChild>
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
            <p className="text-sm font-semibold">
              <span className="block text-xs font-bold uppercase tracking-wide text-graphite-foreground/55">
                WhatsApp
              </span>
              <a
                href={whatsappLink ?? `tel:${company.phoneTel}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block text-xl font-extrabold text-green"
              >
                {company.whatsappDisplay}
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
      </div>
    </section>
  );
}
