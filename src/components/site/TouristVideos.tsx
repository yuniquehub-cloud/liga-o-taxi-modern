import { useEffect, useRef, useState } from "react";
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

type MusicState = {
  audioContext: AudioContext;
  gain: GainNode;
  intervalId: number;
};

type WindowWithWebAudio = Window &
  typeof globalThis & {
    webkitAudioContext?: typeof AudioContext;
  };

const spanishIntro =
  "Bienvenido a São Paulo, la segunda ciudad más grande del mundo y el mayor centro cultural y financiero de América Latina. Sea cual sea el motivo de tu visita, turismo, negocios, compras, entretenimiento o simple curiosidad, São Paulo tiene mucho más para ofrecer y vas a descubrir eso. Como todas las grandes ciudades del mundo, São Paulo no se detiene. Dicen que es la ciudad que siempre tiene prisa. Te sorprenderás con lo que vas a encontrar. Doscientas ochenta salas de cine, ciento veinte teatros, setenta y un museos y once centros culturales, doscientas cuarenta mil tiendas y setenta shopping centers con opciones para todos los bolsillos. Night clubs, hotelería de calidad, parques y una de las mejores cocinas del mundo. Aquí encontrarás el calor humano representado por descendientes de más de setenta naciones.";

const flags: Flag[] = [
  {
    image: flagBr,
    label: "Brasil",
    lang: "pt-BR",
    text: "Bem-vindo a São Paulo, a segunda cidade mais grande do mundo e o maior centro cultural e financeiro da América Latina. Seja qual for o motivo da sua visita, turismo, negócios, compras, entretenimento ou simples curiosidade, São Paulo tem muito mais para oferecer e você vai descobrir isso. Como todas as grandes cidades do mundo, São Paulo não para. Dizem que é a cidade que sempre tem pressa. Você vai se surpreender com o que vai encontrar. Duzentas e oitenta salas de cinema, cento e vinte teatros, setenta e um museus e onze centros culturais, duzentas e quarenta mil lojas e setenta shopping centers com opções para todos os bolsos. Night clubs, hotelaria de qualidade, parques e uma das melhores cozinhas do mundo. Aqui você encontra o calor humano representado por descendentes de mais de setenta nações.",
  },
  {
    image: flagUs,
    label: "Estados Unidos",
    lang: "en-US",
    text: "Welcome to São Paulo, the second largest city in the world and the largest cultural and financial center in Latin America. Whatever the reason for your visit, tourism, business, shopping, entertainment, or simple curiosity, São Paulo has much more to offer, and you are about to discover it. Like every great city in the world, São Paulo never stops. They say it is the city that is always in a hurry. You will be surprised by what you find here. Two hundred and eighty movie theaters, one hundred and twenty theaters, seventy-one museums, eleven cultural centers, two hundred and forty thousand stores, and seventy shopping centers with options for every budget. Night clubs, quality hotels, parks, and one of the best cuisines in the world. Here you will find human warmth represented by descendants from more than seventy nations.",
  },
  {
    image: flagAr,
    label: "Argentina",
    lang: "es-AR",
    text: spanishIntro,
  },
  {
    image: flagCl,
    label: "Chile",
    lang: "es-CL",
    text: spanishIntro,
  },
  {
    image: flagPt,
    label: "Portugal",
    lang: "pt-PT",
    text: "Bem-vindo a São Paulo, a segunda cidade mais grande do mundo e o maior centro cultural e financeiro da América Latina. Seja qual for o motivo da sua visita, turismo, negócios, compras, entretenimento ou simples curiosidade, São Paulo tem muito mais para oferecer e você vai descobrir isso. Como todas as grandes cidades do mundo, São Paulo não para. Dizem que é a cidade que está sempre com pressa. Vai surpreender-se com o que vai encontrar. Duzentas e oitenta salas de cinema, cento e vinte teatros, setenta e um museus e onze centros culturais, duzentas e quarenta mil lojas e setenta centros comerciais com opções para todos os bolsos. Night clubs, hotelaria de qualidade, parques e uma das melhores cozinhas do mundo. Aqui encontrará o calor humano representado por descendentes de mais de setenta nações.",
  },
  {
    image: flagEs,
    label: "Espanha",
    lang: "es-ES",
    text: spanishIntro,
  },
  {
    image: flagIt,
    label: "Itália",
    lang: "it-IT",
    text: "Benvenuti a São Paulo, la seconda città più grande del mondo e il più grande centro culturale e finanziario dell'America Latina. Qualunque sia il motivo della vostra visita, turismo, affari, shopping, intrattenimento o semplice curiosità, São Paulo ha molto di più da offrire e lo scoprirete. Come tutte le grandi città del mondo, São Paulo non si ferma mai. Dicono che sia la città che ha sempre fretta. Vi sorprenderà ciò che troverete. Duecentottanta sale cinematografiche, centoventi teatri, settantuno musei e undici centri culturali, duecentoquarantamila negozi e settanta centri commerciali con opzioni per tutte le tasche. Night club, hotel di qualità, parchi e una delle migliori cucine del mondo. Qui troverete il calore umano rappresentato dai discendenti di più di settanta nazioni.",
  },
  {
    image: flagJp,
    label: "Japão",
    lang: "ja-JP",
    text: "サンパウロへようこそ。世界で二番目に大きな都市であり、ラテンアメリカ最大の文化と金融の中心地です。観光、ビジネス、ショッピング、エンターテインメント、または好奇心で訪れる方にも、サンパウロにはたくさんの魅力があります。世界の大都市と同じように、サンパウロは止まりません。いつも急いでいる街とも言われています。ここで見つけるものにきっと驚くでしょう。二百八十の映画館、百二十の劇場、七十一の博物館、十一の文化センター、二十四万の店舗、そしてあらゆる予算に合う七十のショッピングセンターがあります。ナイトクラブ、質の高いホテル、公園、そして世界でも有数の料理。ここでは七十以上の国の子孫がつくる温かい人々に出会えます。",
  },
  {
    image: flagDe,
    label: "Alemanha",
    lang: "de-DE",
    text: "Willkommen in São Paulo, der zweitgrößten Stadt der Welt und dem größten Kultur- und Finanzzentrum Lateinamerikas. Ganz gleich, ob Sie wegen Tourismus, Geschäft, Shopping, Unterhaltung oder aus reiner Neugier hier sind, São Paulo hat viel mehr zu bieten, und Sie werden es entdecken. Wie alle großen Städte der Welt steht São Paulo niemals still. Man sagt, es sei die Stadt, die immer in Eile ist. Sie werden überrascht sein, was Sie hier finden: zweihundertachtzig Kinosäle, einhundertzwanzig Theater, einundsiebzig Museen und elf Kulturzentren, zweihundertvierzigtausend Geschäfte und siebzig Einkaufszentren mit Optionen für jedes Budget. Nightclubs, hochwertige Hotellerie, Parks und eine der besten Küchen der Welt. Hier finden Sie menschliche Wärme, vertreten durch Nachkommen aus mehr als siebzig Nationen.",
  },
  {
    image: flagFr,
    label: "França",
    lang: "fr-FR",
    text: "Bienvenue à São Paulo, la deuxième plus grande ville du monde et le plus grand centre culturel et financier d'Amérique latine. Quelle que soit la raison de votre visite, tourisme, affaires, shopping, divertissement ou simple curiosité, São Paulo a beaucoup plus à offrir et vous allez le découvrir. Comme toutes les grandes villes du monde, São Paulo ne s'arrête jamais. On dit que c'est la ville toujours pressée. Vous serez surpris par ce que vous allez trouver. Deux cent quatre-vingts salles de cinéma, cent vingt théâtres, soixante et onze musées et onze centres culturels, deux cent quarante mille magasins et soixante-dix centres commerciaux avec des options pour tous les budgets. Night clubs, hôtellerie de qualité, parcs et l'une des meilleures cuisines du monde. Ici, vous trouverez la chaleur humaine représentée par des descendants de plus de soixante-dix nations.",
  },
  {
    image: flagCn,
    label: "China",
    lang: "zh-CN",
    text: "欢迎来到圣保罗，这里是世界第二大城市，也是拉丁美洲最大的文化和金融中心。无论您来这里是旅游、商务、购物、娱乐，还是单纯好奇，圣保罗都有更多精彩等待您去发现。像世界上所有的大城市一样，圣保罗从不停下脚步。人们说，这是一座总是在赶时间的城市。这里的一切都会让您感到惊喜。这里有二百八十间电影院、一百二十座剧院、七十一座博物馆和十一座文化中心，二十四万家商店以及七十座购物中心，适合各种预算。夜生活、优质酒店、公园，以及世界上最好的美食之一。在这里，来自七十多个国家后裔组成的人们，会让您感受到热情与温暖。",
  },
];


function FlagAudio() {
  const [playing, setPlaying] = useState<string | null>(null);
  const [supported, setSupported] = useState(true);
  const musicRef = useRef<MusicState | null>(null);

  const stopBackgroundMusic = () => {
    const currentMusic = musicRef.current;
    if (!currentMusic) return;
    window.clearInterval(currentMusic.intervalId);
    currentMusic.gain.gain.setTargetAtTime(0, currentMusic.audioContext.currentTime, 0.08);
    window.setTimeout(() => {
      void currentMusic.audioContext.close();
    }, 260);
    musicRef.current = null;
  };

  const startBackgroundMusic = () => {
    stopBackgroundMusic();
    const AudioContextConstructor =
      window.AudioContext ?? (window as WindowWithWebAudio).webkitAudioContext;
    if (!AudioContextConstructor) return;

    const audioContext = new AudioContextConstructor();
    const gain = audioContext.createGain();
    gain.gain.value = 0.025;
    gain.connect(audioContext.destination);

    const notes = [261.63, 329.63, 392, 493.88, 392, 329.63];
    let noteIndex = 0;

    const playNote = () => {
      const note = notes[noteIndex % notes.length];
      if (typeof note !== "number") return;
      const oscillator = audioContext.createOscillator();
      const noteGain = audioContext.createGain();
      oscillator.type = "sine";
      oscillator.frequency.value = note;
      noteGain.gain.setValueAtTime(0, audioContext.currentTime);
      noteGain.gain.linearRampToValueAtTime(0.18, audioContext.currentTime + 0.08);
      noteGain.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 1.3);
      oscillator.connect(noteGain).connect(gain);
      oscillator.start();
      oscillator.stop(audioContext.currentTime + 1.35);
      noteIndex += 1;
    };

    playNote();
    const intervalId = window.setInterval(playNote, 1200);
    musicRef.current = { audioContext, gain, intervalId };
  };

  useEffect(() => {
    setSupported(typeof window !== "undefined" && "speechSynthesis" in window);
    return () => {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
      stopBackgroundMusic();
    };
  }, []);

  const speak = (flag: Flag) => {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    stopBackgroundMusic();
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
    utterance.onend = () => {
      setPlaying(null);
      stopBackgroundMusic();
    };
    utterance.onerror = () => {
      setPlaying(null);
      stopBackgroundMusic();
    };
    setPlaying(flag.label);
    startBackgroundMusic();
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="w-full sm:w-auto">
      <ul className="flex flex-wrap items-start gap-3 sm:gap-4" aria-label="Países atendidos">
        {flags.map((f) => {
          const isPlaying = playing === f.label;
          return (
            <li key={f.label} className="w-16 text-center">
              <button
                type="button"
                onClick={() => speak(f)}
                title={`${f.label} — ouvir sobre São Paulo`}
                aria-label={`Ouvir apresentação de São Paulo em ${f.label}`}
                className={`relative block h-16 w-16 overflow-hidden rounded-full border-2 transition-all hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow ${
                  isPlaying ? "border-yellow ring-2 ring-yellow/60" : "border-white/25"
                }`}
              >
                <img
                  src={f.image}
                  alt={`Bandeira do país: ${f.label}`}
                  width={160}
                  height={160}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full scale-[1.35] object-cover"
                />
                <span className="absolute bottom-0 right-0 flex h-6 w-6 items-center justify-center rounded-full bg-yellow text-yellow-foreground ring-2 ring-graphite">
                  {isPlaying ? (
                    <Square className="h-2.5 w-2.5 fill-current" aria-hidden="true" />
                  ) : (
                    <Volume2 className="h-3.5 w-3.5" aria-hidden="true" />
                  )}
                </span>
              </button>
              <span className="mt-2 block text-[11px] font-bold leading-tight text-graphite-foreground/70">
                {f.label}
              </span>
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
