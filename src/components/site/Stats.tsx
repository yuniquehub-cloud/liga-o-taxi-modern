import { stats } from "@/config/company";

export function Stats() {
  return (
    <section aria-label="Números da empresa" className="surface-dark relative overflow-hidden">
      <div className="dark-glow pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-50" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 sm:grid-cols-3 lg:py-16">
        {stats.map((s) => (
          <div key={s.label} className="border-l-2 border-yellow/70 pl-5">
            <p className="text-4xl font-extrabold leading-none text-yellow sm:text-5xl">{s.value}</p>
            <p className="mt-2 text-sm font-extrabold uppercase tracking-[0.14em] text-graphite-foreground">
              {s.label}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-graphite-foreground/65">{s.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
