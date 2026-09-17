import { company, socials, whatsappLink } from "@/config/company";

type Network = {
  label: string;
  href: string;
  handle: string;
  /** Cor da marca usada no preenchimento do botão. */
  color: string;
  /** Cor do brilho projetado no hover. */
  glow: string;
  icon: React.ComponentType<{ className?: string }>;
};

/* Marcas em SVG próprio para manter as cores oficiais de cada rede. */
function WhatsAppMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

function FacebookMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M24 12.073C24 5.446 18.627.073 12 .073S0 5.446 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073Z" />
    </svg>
  );
}

function InstagramMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
    </svg>
  );
}

function TwitterMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M23.953 4.57a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.06a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.936 4.936 0 0 0 4.604 3.417 9.867 9.867 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0 0 24 4.59Z" />
    </svg>
  );
}

function YouTubeMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814ZM9.545 15.568V8.432L15.909 12l-6.364 3.568Z" />
    </svg>
  );
}

const networks: Network[] = [
  {
    label: "WhatsApp",
    href: whatsappLink ?? `https://wa.me/${company.whatsapp}`,
    handle: company.whatsappDisplay,
    color: "#25D366",
    glow: "rgba(37, 211, 102, 0.45)",
    icon: WhatsAppMark,
  },
  {
    label: "Facebook",
    href: socials.facebook,
    handle: "/radiotaxiligacao",
    color: "#1877F2",
    glow: "rgba(24, 119, 242, 0.45)",
    icon: FacebookMark,
  },
  {
    label: "Instagram",
    href: socials.instagram,
    handle: "@radiotaxiligacao",
    color: "#E1306C",
    glow: "rgba(225, 48, 108, 0.45)",
    icon: InstagramMark,
  },
  {
    label: "Twitter",
    href: socials.twitter,
    handle: "@radiotaxi",
    color: "#1DA1F2",
    glow: "rgba(29, 161, 242, 0.45)",
    icon: TwitterMark,
  },
  {
    label: "YouTube",
    href: socials.youtube,
    handle: "/radiotaxiligacao",
    color: "#FF0000",
    glow: "rgba(255, 0, 0, 0.42)",
    icon: YouTubeMark,
  },
];

export function SocialBar() {
  return (
    <section
      id="redes-sociais"
      aria-labelledby="redes-sociais-titulo"
      className="border-y border-border bg-background"
    >
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="text-center">
          <p className="eyebrow justify-center text-muted-foreground">Fale com a gente por onde quiser</p>
          <h2 id="redes-sociais-titulo" className="mt-3 text-3xl font-extrabold text-foreground sm:text-4xl">
            Redes Sociais
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-yellow" aria-hidden="true" />
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Siga a {company.companyName} para acompanhar promoções, notícias e dicas de deslocamento em São Paulo.
          </p>
        </div>

        <ul className="mt-10 flex flex-wrap items-start justify-center gap-x-6 gap-y-8 sm:gap-x-10">
          {networks.map(({ label, href, handle, color, glow, icon: Icon }) => (
            <li key={label} className="w-28 text-center sm:w-32">
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${label} da ${company.companyName}`}
                className="group mx-auto flex flex-col items-center gap-3"
              >
                <span
                  className="flex h-16 w-16 items-center justify-center rounded-full text-white shadow-soft transition-transform duration-200 group-hover:-translate-y-1.5 group-hover:scale-105 group-focus-visible:-translate-y-1.5 sm:h-[4.5rem] sm:w-[4.5rem]"
                  style={{ backgroundColor: color, boxShadow: `0 12px 28px -12px ${glow}` }}
                >
                  <Icon className="h-8 w-8 sm:h-9 sm:w-9" />
                </span>
                <span className="block text-sm font-extrabold text-foreground">{label}</span>
                <span className="block truncate text-xs text-muted-foreground">{handle}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
