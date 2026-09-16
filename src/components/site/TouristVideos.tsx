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

import flagBr from "@/assets/flags/br.png";
import flagUs from "@/assets/flags/us.png";
import flagAr from "@/assets/flags/ar.png";
import flagCl from "@/assets/flags/cl.png";
import flagPt from "@/assets/flags/pt.png";
import flagEs from "@/assets/flags/es.png";
import flagIt from "@/assets/flags/it.png";
import flagJp from "@/assets/flags/jp.png";
import flagDe from "@/assets/flags/de.png";
import flagFr from "@/assets/flags/fr.png";
import flagCn from "@/assets/flags/cn.png";

type Flag = {
  image: string;
  label: string;
  lang: string;
  text: string;
};

const flags: Flag[] = [
  {
    image: flagBr,
    label: "Brasil",
    lang: "pt-BR",
    text: "Bem-vindo a São Paulo, a maior cidade do Brasil. Conheça o MASP, a Avenida Paulista, o bairro da Liberdade e a Mooca com o Rádio Táxi Ligação. Levamos você com segurança e conforto.",
  },
  {
    image: flagUs,
    label: "Estados Unidos",
    lang: "en-US",
    text: "Welcome to São Paulo, the largest city in Brazil. Visit MASP, Paulista Avenue, the Liberdade district and Mooca with Rádio Táxi Ligação. We take you there safely and comfortably.",
  },
  {
    image: flagAr,
    label: "Argentina",
    lang: "es-AR",
    text: "Bienvenido a São Paulo, la ciudad más grande de Brasil. Visite el MASP, la Avenida Paulista, el barrio Liberdade y la Mooca con Rádio Táxi Ligação. Lo llevamos con seguridad y comodidad.",
  },
  {
    image: flagCl,
    label: "Chile",
    lang: "es-CL",
    text: "Bienvenido a São Paulo, la ciudad más grande de Brasil. Recorra el MASP, la Avenida Paulista, el barrio Liberdade y la Mooca con Rádio Táxi Ligação, siempre con seguridad y comodidad.",
  },
  {
    image: flagPt,
    label: "Portugal",
    lang: "pt-PT",
    text: "Bem-vindo a São Paulo, a maior cidade do Brasil. Visite o MASP, a Avenida Paulista, o bairro da Liberdade e a Mooca com o Rádio Táxi Ligação, com toda a segurança e conforto.",
  },
  {
    image: flagEs,
    label: "Espanha",
    lang: "es-ES",
    text: "Bienvenido a São Paulo, la ciudad más grande de Brasil. Descubra el MASP, la Avenida Paulista, el barrio Liberdade y la Mooca con Rádio Táxi Ligação, con seguridad y comodidad.",
  },
  {
    image: flagIt,
    label: "Itália",
    lang: "it-IT",
    text: "Benvenuti a São Paulo, la città più grande del Brasile. Visitate il MASP, l'Avenida Paulista, il quartiere Liberdade e la Mooca con Rádio Táxi Ligação, in tutta sicurezza e comfort.",
  },
  {
    image: flagJp,
    label: "Japão",
    lang: "ja-JP",
    text: "ブラジル最大の都市、サンパウロへようこそ。MASP美術館、パウリスタ大通り、リベルダーデ地区、モオカ地区へ、ラジオタクシー・リガソンが安全で快適にお連れします。",
  },
  {
    image: flagDe,
    label: "Alemanha",
    lang: "de-DE",
    text: "Willkommen in São Paulo, der größten Stadt Brasiliens. Besuchen Sie das MASP, die Avenida Paulista, das Viertel Liberdade und Mooca mit Rádio Táxi Ligação – sicher und komfortabel.",
  },
  {
    image: flagFr,
    label: "França",
    lang: "fr-FR",
    text: "Bienvenue à São Paulo, la plus grande ville du Brésil. Découvrez le MASP, l'Avenida Paulista, le quartier Liberdade et la Mooca avec Rádio Táxi Ligação, en toute sécurité et confort.",
  },
  {
    image: flagCn,
    label: "China",
    lang: "zh-CN",
    text: "欢迎来到巴西最大的城市圣保罗。乘坐 Rádio Táxi Ligação，安全舒适地游览圣保罗艺术博物馆、保利斯塔大道、自由区和摩卡区。",
  },
];


function FlagAudio() {
  const [playing, setPlaying] = useState<string | null>(null);
  const [supported, setSupported] = useState(true);

  useEffect(() => {
    setSupported(typeof window !== "undefined" && "speechSynthesis" in window);
    return () => {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const speak = (flag: Flag) => {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    if (playing === flag.label) {
      setPlaying(null);
      return;
    }
    const utterance = new SpeechSynthesisUtterance(flag.text);
    utterance.lang = flag.lang;
    utterance.rate = 0.98;
    const voice = window.speechSynthesis
      .getVoices()
      .find((v) => v.lang.replace("_", "-").toLowerCase() === flag.lang.toLowerCase())
      ?? window.speechSynthesis
        .getVoices()
        .find((v) => v.lang.toLowerCase().startsWith(flag.lang.slice(0, 2).toLowerCase()));
    if (voice) utterance.voice = voice;
    utterance.onend = () => setPlaying(null);
    utterance.onerror = () => setPlaying(null);
    setPlaying(flag.label);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="w-full sm:w-auto">
      <ul className="flex flex-wrap items-center gap-2" aria-label="Países atendidos">
        {flags.map((f) => {
          const isPlaying = playing === f.label;
          return (
            <li key={f.label}>
              <button
                type="button"
                onClick={() => speak(f)}
                title={`${f.label} — ouvir sobre São Paulo`}
                aria-label={`Ouvir apresentação de São Paulo em ${f.label}`}
                className={`relative flex h-11 w-11 items-center justify-center rounded-full border text-xl transition-all hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow ${
                  isPlaying
                    ? "border-yellow bg-yellow/20 ring-2 ring-yellow/60"
                    : "border-white/10 bg-white/5"
                }`}
              >
                <span role="img" aria-hidden="true">
                  {f.emoji}
                </span>
                <span className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-yellow text-foreground">
                  {isPlaying ? (
                    <Square className="h-2.5 w-2.5 fill-current" aria-hidden="true" />
                  ) : (
                    <Volume2 className="h-3 w-3" aria-hidden="true" />
                  )}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
      <p className="mt-3 text-xs text-graphite-foreground/60">
        {supported
          ? "Toque em uma bandeira para ouvir sobre São Paulo no seu idioma."
          : "Seu navegador não suporta a narração por voz."}
      </p>
    </div>
  );
}

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
            <FlagAudio />
          </div>
        </div>
      </div>
    </section>
  );
}
