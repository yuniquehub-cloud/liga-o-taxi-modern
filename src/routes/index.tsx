import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { TrustBar } from "@/components/site/TrustBar";
import { Stats } from "@/components/site/Stats";
import { FareCalculator } from "@/components/site/FareCalculator";
import { Booking } from "@/components/site/Booking";
import { Services } from "@/components/site/Services";
import { About } from "@/components/site/About";
import { WhySaoPaulo } from "@/components/site/WhySaoPaulo";
import { Places } from "@/components/site/Places";
import { TouristVideos } from "@/components/site/TouristVideos";
import { MapContactSection } from "@/components/site/MapContactSection";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { MobileActionBar } from "@/components/site/MobileActionBar";

const title = "Rádio Táxi Ligação | Táxi na Mooca e em São Paulo";
const description =
  "Precisa de táxi na Mooca ou em São Paulo? Ligue para a Rádio Táxi Ligação, consulte a estimativa da corrida e fale com a central.";
const siteUrl = "https://www.radiotaxiligacao.com.br/";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "keywords", content: "táxi na Mooca, rádio táxi Mooca, táxi em São Paulo, telefone táxi Mooca, rádio táxi São Paulo, calcular corrida táxi, estimativa corrida táxi" },
    ],
    links: [{ rel: "canonical", href: siteUrl }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TaxiService",
          name: "Rádio Táxi Ligação",
          description,
          url: siteUrl,
          telephone: "+55 11 3535-5832",
          email: "falecom@radiotaxiligacao.com.br",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Rua Sapucaia, 500",
            addressLocality: "São Paulo",
            addressRegion: "SP",
            postalCode: "03170-050",
            addressCountry: "BR",
          },
          areaServed: { "@type": "City", name: "São Paulo" },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "05:00",
              closes: "19:30",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Saturday"],
              opens: "07:00",
              closes: "12:30",
            },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Places />
        <TouristVideos />
        <TrustBar />
        <Stats />
        <FareCalculator />
        <Booking />
        <Services />
        <About />
        <WhySaoPaulo />
        <MapContactSection />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileActionBar />
    </>
  );
}
