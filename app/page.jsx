import Hero from "@/components/Main/Hero";
import heroImageMobile from "../assets/image/hero5_640.png";
import heroImageDesktop from "../assets/image/hero5_1920.png";
import Gallery from "@/components/Main/Gallery";
import PriceList from "@/components/Main/PriceList";
import BookingPage from "@/components/Calendar/BookingPage";
import Contact from "@/components/Main/Contact";
import AboutMe from "@/components/Main/AboutMe";
import Technologies from "@/components/Main/Technologies";
import ElfsightLazyWrapper from "@/components/More/ElfsightLazyWrapper";

export const metadata = {
  title: "G-WAT Pomiary Elektryczne | Serwis instalacji fotowoltaicznych Opole",
  description:
    "Profesjonalne pomiary elektryczne i serwis instalacji fotowoltaicznych w Opolu. Certyfikowane pomiary, odbiory techniczne, zasilanie awaryjne.",
  alternates: { canonical: "/" },
  keywords:
    "pomiary elektryczne Opole, serwis fotowoltaiki, pomiary instalacji fotowoltaicznych, odbiory techniczne, zasilanie awaryjne",
  openGraph: {
    url: "/",
    title:
      "G-WAT Pomiary Elektryczne | Serwis instalacji fotowoltaicznych Opole",
    description:
      "Profesjonalne pomiary elektryczne, serwis fotowoltaiki i montaż zasilania awaryjnego w Opolu i na Śląsku.",
    type: "website",
    siteName: "G-WAT Pomiary Elektryczne",
    images: [
      {
        url: "https://www.g-wat.pl/g-wat10.png",
        width: 1200,
        height: 630,
        alt: "G-WAT Pomiary Elektryczne - profesjonalne usługi elektryczne",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  return (
    <div>
      <div className="heroContainer">
        <Hero
          heroImageMobile={heroImageMobile}
          heroImageDesktop={heroImageDesktop}
          title="G -"
          description="Pomiary elektryczne"
          showTechnology={true}
          showButton={true}
          height="100vh"
          mobileWhiteBlockColor="#C8C8C8"
          desktopWhiteBlockColor="#e0e0e0"
        />
      </div>
      <AboutMe />
      <Technologies />
      <Gallery />
      <PriceList />
      <BookingPage />
      <ElfsightLazyWrapper />
      <Contact />
    </div>
  );
}
