import { AirVent, BadgeCheck, CalendarCheck, MapPinned, Plane, Tag, Ticket } from "lucide-react";

const details = [
  {
    icon: AirVent,
    title: "Carros com ar-condicionado",
    text: "Veículos confortáveis e motoristas qualificados para o seu trajeto.",
  },
  {
    icon: Tag,
    title: "Preços especiais para o Litoral e Interior",
    text: "Tarifas diferenciadas para viagens ao Litoral e ao Interior Paulista.",
  },
  {
    icon: CalendarCheck,
    title: "Reserva antecipada sem custo",
    text: "Reserve um táxi com antecedência, sem qualquer custo adicional, e não atrase seus compromissos.",
  },
  {
    icon: Plane,
    title: "Atendimento em aeroportos",
    text: "Atendemos nos aeroportos com um sinal de identificação para você nos encontrar fácil.",
  },
  {
    icon: Ticket,
    title: "Passeios turísticos",
    text: "Passeios pelos principais pontos turísticos de São Paulo com o melhor preço regional.",
  },
  {
    icon: BadgeCheck,
    title: "Pacotes promocionais",
    text: "Pacotes por tempo pré-determinado à sua disposição para reservas.",
  },
];

const regions = ["Mooca", "Tatuapé", "Vila Prudente", "Belém", "Brás"];

export function ServiceDetails() {
  return (
    <section
      id="diferenciais"
      aria-labelledby="diferenciais-titulo"
      className="surface-glow relative overflow-hidden border-b border-border"
    >
      <div className="pointer-events-none absolute inset-0 grid-lines-light" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="max-w-2xl">
          <p className="eyebrow text-yellow-foreground/70">Conheça São Paulo através dos serviços de táxi</p>
          <h2 id="diferenciais-titulo" className="mt-3 text-3xl font-extrabold text-foreground sm:text-4xl">
            O melhor serviço de táxi na Mooca em São Paulo
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Atendimento profissional para o dia a dia, viagens e passeios pela cidade.
          </p>
        </div>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {details.map(({ icon: Icon, title, text }) => (
            <li
              key={title}
              className="card-lift rounded-2xl border border-border bg-card/90 p-6 shadow-soft backdrop-blur-sm"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow/25">
                <Icon className="h-5 w-5 text-yellow-foreground" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-base font-extrabold text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </li>
          ))}
        </ul>

        <div className="mt-8 rounded-2xl border border-border bg-card/90 p-6 shadow-soft sm:flex sm:items-center sm:justify-between sm:gap-6">
          <div className="flex items-start gap-3">
            <MapPinned className="mt-0.5 h-5 w-5 text-yellow-foreground" aria-hidden="true" />
            <div>
              <h3 className="text-base font-extrabold text-foreground">Regiões de atendimento exclusivo</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Base na Mooca, com corridas para toda a cidade de São Paulo.
              </p>
            </div>
          </div>
          <ul className="mt-4 flex flex-wrap gap-2 sm:mt-0">
            {regions.map((r) => (
              <li
                key={r}
                className="rounded-full border border-border bg-yellow/15 px-3.5 py-1.5 text-sm font-bold text-foreground"
              >
                {r}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
