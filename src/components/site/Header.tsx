import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import { company, whatsappLink } from "@/config/company";

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#servicos", label: "Serviços" },
  { href: "#estimativa", label: "Estimativa" },
  { href: "#agendar", label: "Agendar" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled ? "border-border bg-background/95 backdrop-blur" : "border-transparent bg-background"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#inicio" aria-label={`${company.companyName} — início`}>
          <Logo className="h-9 sm:h-11" />
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={`tel:${company.phoneTel}`}
            className="flex items-center gap-2 text-sm font-bold text-foreground"
          >
            <Phone className="h-4 w-4 text-yellow-strong" aria-hidden="true" />
            {company.phone}
          </a>
          <Button variant="cta" size="lg" asChild>
            <a href={whatsappLink ?? `tel:${company.phoneTel}`} aria-label="Chamar táxi">
              Chamar Táxi
            </a>
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <Button variant="cta" size="icon" asChild aria-label="Ligar agora">
            <a href={`tel:${company.phoneTel}`}>
              <Phone aria-hidden="true" />
            </a>
          </Button>
          <Button
            variant="outlineDark"
            size="icon"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </Button>
        </div>
      </div>

      {open && (
        <nav
          id="menu-mobile"
          aria-label="Navegação mobile"
          className="border-t border-border bg-background px-4 py-3 lg:hidden"
        >
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base font-semibold text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
