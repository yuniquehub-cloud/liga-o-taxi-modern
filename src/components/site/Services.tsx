import { Briefcase, CalendarClock, Car, MapPin, Package, Plane, Route, Landmark } from "lucide-react";

const services = [
  { icon: Car, title: "Corridas urbanas", text: "Deslocamentos do dia a dia dentro da cidade de São Paulo." },
  { icon: MapPin, title: "Atendimento na Mooca e em São Paulo", text: "Base na Mooca e corridas por toda a cidade." },
  { icon: CalendarClock, title: "Corridas agendadas", text: "Combine horário com a central e programe seu trajeto." },
  { icon: Briefcase, title: "Atendimento empresarial", text: "Suporte a deslocamentos de equipes e visitantes." },
  { icon: Route, title: "Deslocamentos com praticidade", text: "Contato direto com a central, sem complicação." },
  { icon: Plane, title: "Aeroporto", text: "Levamos você ao aeroporto com rapidez e segurança." },
  { icon: Landmark, title: "Turismo", text: "Conhecemos os pontos turísticos de São Paulo e te levamos lá." },
  { icon: Package, title: "Entregas", text: "Entregamos seus pacotes — até 100cm de comprimento x 50cm de altura." },
];

export function Services() {
  return (
    <section id="servicos" className="surface-soft relative overflow-hidden border-b border-border">
      <div className="pointer-events-none absolute inset-0 grid-lines-light" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="max-w-2xl">
          <p className="eyebrow text-yellow-foreground/70">Serviços</p>
          <h2 className="mt-3 text-3xl font-extrabold text-foreground sm:text-4xl">Nossos serviços</h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Atendimento de táxi para diferentes necessidades, sempre com contato direto com a central.
          </p>
        </div>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, text }, index) => (
            <li
              key={title}
              className="card-lift group relative overflow-hidden rounded-2xl border border-border bg-card/90 p-6 shadow-soft backdrop-blur-sm"
            >
              <span
                className="absolute right-5 top-5 text-3xl font-extrabold text-muted-foreground/15"
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow/25 transition-colors group-hover:bg-yellow">
                <Icon className="h-5 w-5 text-yellow-foreground" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-extrabold text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
