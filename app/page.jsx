import Hero from "@/components/Main/Hero";
import heroImageMobile from "../assets/image/hero5_640.png";
import heroImageDesktop from "../assets/image/hero5_1920.png";
import Gallery from "@/components/Main/Gallery";
import PriceList from "@/components/Main/PriceList";
import BookingPage from "@/components/Calendar/BookingPage";
import Contact from "@/components/Main/Contact";
import AboutMe from "@/components/Main/AboutMe";
import Technologies from "@/components/Main/Technologies";
import SEO from "../components/More/SEO";
import ElfsightLazyWrapper from "@/components/More/ElfsightLazyWrapper";

export default function Home() {
  return (
    <div>
      <SEO
        title="G-WAT Pomiary elektryczne i serwis instalacji fotowoltaicznych w Opolu"
        description="G-WAT oferuje profesjonalne pomiary elektryczne oraz serwis instalacji fotowoltaicznych w Opolu i okolicach, wykorzystując nowoczesne technologie i urządzenia takie jak Sonel MPI-540PV. Skontaktuj się z nami, aby dowiedzieć się więcej o naszych usługach."
        image="https://www.g-wat.pl/g-wat10.png"
      />

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
