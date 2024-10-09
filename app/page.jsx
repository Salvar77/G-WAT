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
