import { useEffect, useState } from "react";
import { Play, Globe, Volume2, Square } from "lucide-react";

const videos = [
  {
    id: "mqtN4d21BMs",
    title: "Passeio por São Paulo",
    description: "Roteiro pelos principais pontos turísticos da cidade.",
  },
  {
    id: "Ij1cNXGJNA8",
    title: "Litoral e região",
    description: "Viagens até o litoral, Santos, Guarujá e embarques de cruzeiro.",
  },
  {
    id: "9UmWMsnYDS8",
    title: "Destinos turísticos",
    description: "Mais roteiros pela região de São Paulo: levamos você até lá.",
  },
];

const flags = [
  { emoji: "🇧🇷", label: "Brasil" },
  { emoji: "🇺🇸", label: "Estados Unidos" },
  { emoji: "🇦🇷", label: "Argentina" },
  { emoji: "🇨🇱", label: "Chile" },
  { emoji: "🇵🇹", label: "Portugal" },
  { emoji: "🇪🇸", label: "Espanha" },
  { emoji: "🇮🇹", label: "Itália" },
  { emoji: "🇯🇵", label: "Japão" },
  { emoji: "🇩🇪", label: "Alemanha" },
  { emoji: "🇫🇷", label: "França" },
];

export function TouristVideos() {
  return (
    <section
      id="videos-turisticos"
      aria-labelledby="videos-titulo"
      className="relative overflow-hidden border-b border-border"
      style={{
        background: "var(--gradient-dark)",
      }}
    >
      <div className="pointer-events-none absolute inset-0 grid-lines" aria-hidden="true" />
      <div className="dark-glow pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-24">
        <div className="max-w-2xl">
          <p className="eyebrow text-yellow-foreground/70">Vídeos</p>
          <h2 id="videos-titulo" className="mt-3 text-4xl font-extrabold text-graphite-foreground sm:text-5xl">
            Conheça os destinos
          </h2>
          <p className="mt-3 text-lg text-graphite-foreground/80">
            A gente te leva até lá. Confira trechos de São Paulo e região que fazemos parte do roteiro.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {videos.map((video) => (
            <article
              key={video.id}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-soft backdrop-blur-sm transition-colors hover:border-yellow/30 hover:bg-white/[0.07]"
            >
              <div className="relative aspect-video w-full overflow-hidden">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${video.id}?rel=0&modestbranding=1`}
                  title={video.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full border-0"
                />
              </div>
              <div className="p-5 sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-extrabold text-graphite-foreground sm:text-xl">
                      {video.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-graphite-foreground/70">
                      {video.description}
                    </p>
                  </div>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-yellow text-foreground opacity-90 transition-transform group-hover:scale-110 group-hover:opacity-100">
                    <Play className="h-4 w-4 fill-current" aria-hidden="true" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8">
          <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-yellow text-foreground">
                <Globe className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-lg font-extrabold text-graphite-foreground sm:text-xl">
                  Turistas de todo o mundo
                </h3>
                <p className="text-sm text-graphite-foreground/70">
                  Atendemos visitantes de diversos países com traslados e city tours.
                </p>
              </div>
            </div>
            <ul className="flex flex-wrap items-center gap-2" aria-label="Países atendidos">
              {flags.map((f) => (
                <li
                  key={f.label}
                  title={f.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl transition-transform hover:scale-110"
                >
                  <span role="img" aria-label={f.label}>
                    {f.emoji}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
