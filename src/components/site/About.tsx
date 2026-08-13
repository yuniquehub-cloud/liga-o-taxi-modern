import { company } from "@/config/company";

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
