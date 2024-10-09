"use client";
import { useEffect, useState } from "react";
import React from "react";
import Image from "next/image";
import classes from "./Hero.module.scss";

const Hero = ({
  heroImageMobile,
  heroImageDesktop,
  title,
  description,
  showTechnology,
  showButton,
  height = "100vh",
  mobileWhiteBlockColor = "#1D120C",
  desktopWhiteBlockColor = "#C8C8C8",
}) => {
  const [currentImage, setCurrentImage] = useState(heroImageMobile);
  const [viewportHeight, setViewportHeight] = useState(null);
  const [whiteBlockColor, setWhiteBlockColor] = useState(mobileWhiteBlockColor);

  useEffect(() => {
    const updateHeroHeight = () => {
      setViewportHeight(window.innerHeight);
    };

    window.addEventListener("resize", updateHeroHeight);
    updateHeroHeight();

    return () => window.removeEventListener("resize", updateHeroHeight);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 992px)");
    const handleMediaQueryChange = (e) => {
      setCurrentImage(e.matches ? heroImageDesktop : heroImageMobile);
      setWhiteBlockColor(
        e.matches ? desktopWhiteBlockColor : mobileWhiteBlockColor
      ); // Ustawianie koloru na podstawie zapytania media
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, [
    heroImageDesktop,
    heroImageMobile,
    mobileWhiteBlockColor,
    desktopWhiteBlockColor,
  ]);

  return (
    <div>
      <section id="hero" className={classes.hero} style={{ height }}>
        <div className={classes.imageContainer}>
          <Image
            src={currentImage}
            alt="Zdjęcie tytułowe"
            fill={true}
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
        <div className={classes.textOverlay}>
          <h1 className={classes.hero__title}>
            {title}{" "}
            {showTechnology && (
              <span className={classes.hero__titleSpan}>WAT</span>
            )}
          </h1>
          <p>{description}</p>
          {showButton && (
            <a href="#galeria" className={classes.button}>
              Realizacje
            </a>
          )}
        </div>
        <div
          className={`${classes.whiteBlock} ${classes.whiteBlockLeft}`}
          style={{ backgroundColor: whiteBlockColor }}
        ></div>
      </section>
    </div>
  );
};

export default Hero;
