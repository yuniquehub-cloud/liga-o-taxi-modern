import { Calculator, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroTaxi from "@/assets/hero-taxi.jpg";
import { company } from "@/config/company";

export function Hero() {
  return (
    <section id="inicio" className="border-b border-border bg-background">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:py-20 lg:grid-cols-2 lg:items-center lg:gap-14">
        <div>
          <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
            <MapPin className="h-4 w-4 text-yellow-strong" aria-hidden="true" />
            Atendimento em São Paulo – Mooca
          </p>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] text-foreground sm:text-5xl lg:text-[3.4rem]">
            Seu táxi na Mooca e em São Paulo, com segurança e praticidade.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Conte com a {company.companyName} para um atendimento rápido, profissional e confiável.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button variant="cta" size="xl" asChild>
              <a href={`tel:${company.phoneTel}`}>
                <Phone aria-hidden="true" />
                Ligar Agora
              </a>
            </Button>
            <Button variant="outlineDark" size="xl" asChild>
              <a href="#estimativa">
                <Calculator aria-hidden="true" />
                Calcular Corrida
              </a>
            </Button>
          </div>

          <p className="mt-6 text-sm font-semibold text-foreground">
            Central:{" "}
            <a href={`tel:${company.phoneTel}`} className="underline decoration-yellow decoration-2 underline-offset-4">
              {company.phone}
            </a>
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl shadow-lift">
            <img
              src={heroTaxi}
              alt="Táxi branco com teto amarelo circulando por uma avenida de São Paulo no fim da tarde"
              width={1536}
              height={1024}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:absolute sm:-bottom-6 sm:left-6 sm:mt-0 sm:w-auto sm:grid-cols-2 sm:gap-0 sm:rounded-xl sm:bg-card sm:shadow-soft">
            {company.businessHours.map((h) => (
              <div key={h.label} className="rounded-xl bg-card p-4 shadow-soft sm:shadow-none">
                <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">{h.label}</p>
                <p className="mt-1 text-sm font-extrabold text-foreground">{h.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
