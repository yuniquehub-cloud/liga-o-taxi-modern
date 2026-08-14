import { company } from "@/config/company";
import taxiCutout from "@/assets/taxi-cutout.png";

export function About() {
  return (
    <section id="sobre" className="surface-glow relative overflow-hidden border-b border-border">
      <div className="pointer-events-none absolute inset-0 grid-lines-light" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-20">
        <div>
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
            Confiança para te levar ao destino
          </h2>
          <div className="mt-5 h-1 w-16 rounded-full bg-yellow" />
          <div className="relative isolate mt-8 flex min-h-[14rem] items-center justify-center pb-10 sm:min-h-[18rem]">
            <div
              className="animate-halo-pulse absolute left-1/2 top-1/2 -z-10 h-[14rem] w-[14rem] -translate-x-1/2 -translate-y-[58%] rounded-full bg-yellow/30 blur-[70px] sm:h-[19rem] sm:w-[19rem]"
              aria-hidden="true"
            />
            <div
              className="absolute left-1/2 top-1/2 -z-10 h-[14rem] w-[14rem] -translate-x-1/2 -translate-y-[58%] rounded-full border border-foreground/10 sm:h-[19rem] sm:w-[19rem]"
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
                  className="animate-speed-line absolute right-0 h-px origin-right bg-[linear-gradient(90deg,transparent,color-mix(in_oklab,var(--yellow)_80%,transparent))]"
                  style={{ top: line.top, width: line.width, animationDelay: line.delay }}
                />
              ))}
            </div>
            <img
              src={taxiCutout}
              alt="Táxi branco da Rádio Táxi Ligação com luminoso de táxi"
              width={916}
              height={692}
              loading="lazy"
              decoding="async"
              className="animate-taxi-float relative w-full max-w-[24rem] drop-shadow-[0_24px_34px_oklch(0_0_0/25%)]"
            />
            <div
              className="animate-shadow-breathe absolute bottom-6 left-1/2 h-5 w-[62%] -translate-x-1/2 rounded-[50%] bg-black/25 blur-xl"
              aria-hidden="true"
            />
            <div className="absolute bottom-1 left-0 right-0 overflow-hidden" aria-hidden="true">
              <div className="road-dash h-[3px] w-full opacity-60" />
            </div>
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed text-muted-foreground">
            A {company.companyName} oferece atendimento profissional para quem busca praticidade,
            segurança e contato direto com uma central de táxi em São Paulo. Com presença na Mooca, a
            empresa busca oferecer um serviço confiável e acessível para o dia a dia dos passageiros.
          </p>
          <dl className="mt-8 grid gap-6 sm:grid-cols-2">
            <div>
              <dt className="text-xs font-bold uppercase tracking-wide text-muted-foreground">Central</dt>
              <dd className="mt-1 text-lg font-extrabold text-foreground">{company.phone}</dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase tracking-wide text-muted-foreground">Base</dt>
              <dd className="mt-1 text-lg font-extrabold text-foreground">Mooca, São Paulo</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
