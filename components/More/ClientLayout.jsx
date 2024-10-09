"use client";

import { useState, useEffect } from "react";
import Nav from "@/components/Nav/Nav";
import BurgerMenu from "@/components/Nav/BurgerMenu";
import Logo from "../Nav/Logo";
import { NextSeo } from "next-seo";
import SEO from "../../components/More/SEO";

export default function ClientLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [logo, setLogo] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = document.documentElement.scrollTop;
      const windowWidth = window.innerWidth;

      setLogo(!(windowWidth < 900 && currentScrollPos > 200));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <SEO
        title="G-WAT Pomiary elektryczne"
        description="G-WAT Pomiary elektryczne"
        image="https://www.g-wat.pl/g-wat10.png"
      />

      <Logo showLogo={logo}></Logo>
      <Nav isOpen={isOpen} toggleNav={toggleNav} />
      <BurgerMenu isOpen={isOpen} handleOpen={toggleNav} />
      {children}
    </>
  );
}
