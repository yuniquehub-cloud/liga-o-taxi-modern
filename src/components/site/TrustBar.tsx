import { Clock, MapPinned, ShieldCheck, UserCheck } from "lucide-react";

const items = [
  { icon: ShieldCheck, title: "Segurança", text: "Táxi regulamentado e motoristas identificados." },
  { icon: UserCheck, title: "Atendimento profissional", text: "Central preparada para te orientar." },
  { icon: Clock, title: "Rapidez no contato", text: "Uma ligação e seu táxi já é acionado." },
  { icon: MapPinned, title: "Conhecimento da cidade", text: "Rotas de São Paulo no dia a dia." },
];

export function TrustBar() {
  return (
    <section aria-label="Diferenciais" className="border-b border-border bg-background">
      <div className="mx-auto grid max-w-6xl gap-5 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:py-16">
        {items.map(({ icon: Icon, title, text }) => (
          <div key={title} className="card-lift rounded-2xl border border-border bg-card p-6">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow">
              <Icon className="h-5 w-5 text-yellow-foreground" aria-hidden="true" />
            </span>
            <h3 className="mt-4 text-base font-extrabold text-foreground">{title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
