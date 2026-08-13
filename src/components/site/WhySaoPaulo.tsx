import { Check, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company, whatsappLink } from "@/config/company";

const highlights = [
  "O melhor serviço de táxi na Mooca, em São Paulo.",
  "Carros com ar-condicionado e motoristas qualificados.",
  "Preços especiais para Litoral e Interior paulista.",
  "Reserve seu táxi com antecedência, sem custo adicional.",
  "Atendimento em aeroportos, com sinal de identificação.",
  "Passeios aos principais pontos turísticos de São Paulo.",
  "Pacotes para reservas por tempo pré-determinado.",
  "Atendemos as regiões: Mooca, Tatuapé, Vila Prudente, Belém e Brás.",
];

export function WhySaoPaulo() {
  return (
    <section
      id="conheca-sp"
      aria-labelledby="conheca-sp-titulo"
      className="surface-dark dark-glow relative overflow-hidden"
    >
      <div className="absolute inset-0 grid-lines opacity-60" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <h2 id="conheca-sp-titulo" className="max-w-2xl text-3xl font-extrabold sm:text-4xl">
          Conheça São Paulo através dos{" "}
          <span className="italic text-yellow">serviços de táxi</span>
        </h2>
        <div className="mt-5 h-1 w-16 rounded-full bg-yellow" />

        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {highlights.map((item) => (
            <li
              key={item}
              className="card-lift flex items-start gap-3 rounded-2xl border border-graphite-foreground/12 bg-graphite/50 p-4 backdrop-blur"
            >
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-yellow">
                <Check className="h-3.5 w-3.5 text-yellow-foreground" aria-hidden="true" />
              </span>
              <p className="text-sm leading-relaxed text-graphite-foreground/85">{item}</p>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button variant="cta" size="xl" asChild>
            <a href={`tel:${company.phoneTel}`}>
              <Phone aria-hidden="true" />
              Ligar para a central
            </a>
          </Button>
          {whatsappLink ? (
            <Button variant="outlineLight" size="xl" asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Chamar no WhatsApp
              </a>
            </Button>
          ) : null}
        </div>
      </div>
    </section>
  );
}