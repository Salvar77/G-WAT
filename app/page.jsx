import Hero from "@/components/Main/Hero";
import classes from "./page.module.scss";
import heroImageMobile from "../assets/image/hero5_640.png";
import heroImageDesktop from "../assets/image/hero5_1920.png";
import Gallery from "@/components/Main/Gallery";
import PriceList from "@/components/Main/PriceList";
import BookingPage from "@/components/Calendar/BookingPage";
import Contact from "@/components/Main/Contact";
import AboutMe from "@/components/Main/AboutMe";
import Technologies from "@/components/Main/Technologies";
import { NextSeo } from "next-seo";
import SEO from "../components/More/SEO";

export default function Home() {
  return (
    <div>
      <SEO
        title="G-WAT Pomiary elektryczne"
        description="G-WAT Pomiary elektryczne"
        image="https://www.g-wat.pl/g-wat10.png"
      />
      <NextSeo
        title="G-WAT Pomiary elektryczne"
        description="G-WAT Pomiary elektryczne"
        canonical="https://www.g-wat.pl/"
        openGraph={{
          url: "https://www.g-wat.pl/",
          title: "G-WAT Pomiary elektryczne",
          description: "G-WAT Pomiary elektryczne",
          images: [
            {
              url: "https://www.g-wat.pl/g-wat10.png",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
              type: "image/jpeg",
            },
          ],
          site_name: "G-WAT Pomiary elektryczne",
        }}
        facebook={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
        instagram={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
      <Hero
        heroImageMobile={heroImageMobile}
        heroImageDesktop={heroImageDesktop}
        title="G-"
        description="Pomiary elektryczne"
        showTechnology={true}
        showButton={true}
        height="100vh"
        mobileWhiteBlockColor="#C8C8C8"
        desktopWhiteBlockColor="#e0e0e0"
      />
      <AboutMe />
      <Technologies />
      <Gallery />
      <PriceList />
      <BookingPage />
      <Contact />
    </div>
  );
}
