import { Facebook, Instagram } from "lucide-react";
import { Logo } from "./Logo";
import { company } from "@/config/company";

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#servicos", label: "Serviços" },
  { href: "#estimativa", label: "Estimativa" },
  { href: "#contato", label: "Contato" },
];

export function Footer() {
  return (
    <footer className="bg-background pb-24 md:pb-0">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <Logo tone="light" className="h-11" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            O melhor serviço de táxi na Mooca em São Paulo, com atendimento profissional.
          </p>
          <div className="mt-5 flex gap-2">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Rádio Táxi Ligação"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-border text-muted-foreground transition-colors hover:border-yellow hover:text-foreground"
            >
              <Instagram className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook da Rádio Táxi Ligação"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-border text-muted-foreground transition-colors hover:border-yellow hover:text-foreground"
            >
              <Facebook className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <nav aria-label="Links rápidos">
          <h2 className="text-sm font-extrabold uppercase tracking-wide text-foreground">Links rápidos</h2>
          <ul className="mt-4 space-y-2.5">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-muted-foreground hover:text-foreground">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-extrabold uppercase tracking-wide text-foreground">Contato</h2>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            <li>{company.address.short}</li>
            <li>
              Ligue:{" "}
              <a href={`tel:${company.phoneTel}`} className="font-bold text-foreground">
                011 3535-5832
              </a>
            </li>
            <li>
              Email:{" "}
              <a href={`mailto:${company.email}`} className="break-all hover:text-foreground">
                {company.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-4 py-6 text-xs text-muted-foreground sm:px-6">
          © {company.companyName}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
