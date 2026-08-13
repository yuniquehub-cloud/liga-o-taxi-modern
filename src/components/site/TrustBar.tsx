import { Clock, MapPinned, ShieldCheck, UserCheck } from "lucide-react";

const items = [
  { icon: ShieldCheck, title: "Segurança", text: "Táxi regulamentado e motoristas identificados." },
  { icon: UserCheck, title: "Atendimento profissional", text: "Central preparada para te orientar." },
  { icon: Clock, title: "Rapidez no contato", text: "Uma ligação e seu táxi já é acionado." },
  { icon: MapPinned, title: "Conhecimento da cidade", text: "Rotas de São Paulo no dia a dia." },
];

export function TrustBar() {
  return (
    <section aria-label="Diferenciais" className="surface-dark">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:py-14">
        {items.map(({ icon: Icon, title, text }) => (
          <div key={title}>
            <Icon className="h-6 w-6 text-yellow" aria-hidden="true" />
            <h3 className="mt-3 text-base font-extrabold">{title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-graphite-foreground/70">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
