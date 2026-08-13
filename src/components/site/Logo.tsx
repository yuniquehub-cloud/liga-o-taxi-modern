import { company } from "@/config/company";

/** Substitua o bloco do ícone pela logo oficial quando ela for fornecida. */
export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <span className="flex items-center gap-2.5">
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-yellow text-yellow-foreground">
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="currentColor">
          <path d="M5 11l1.5-4A2 2 0 0 1 8.4 5.6h7.2A2 2 0 0 1 17.5 7L19 11h.5a1.5 1.5 0 0 1 1.5 1.5V17a1 1 0 0 1-1 1h-1v-1.5H5V18H4a1 1 0 0 1-1-1v-4.5A1.5 1.5 0 0 1 4.5 11H5zm2.1 0h9.8l-1-2.9a.6.6 0 0 0-.6-.4H8.7a.6.6 0 0 0-.6.4L7.1 11zM6.5 13a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4zm11 0a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4zM9.5 2h5v2h-5z" />
        </svg>
      </span>
      <span className="leading-tight">
        <span
          className={`block text-[0.95rem] font-extrabold tracking-tight ${tone === "light" ? "text-graphite-foreground" : "text-foreground"}`}
        >
          Rádio Táxi
        </span>
        <span className="block text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-yellow-strong">
          Ligação
        </span>
        <span className="sr-only">{company.companyName}</span>
      </span>
    </span>
  );
}
