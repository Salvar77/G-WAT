"use client";
import { useEffect, useState } from "react";
import React from "react";
import Image from "next/image";
import classes from "./HeroGallery.module.scss";

const HeroGallery = ({
  heroImageMobile,
  heroImageDesktop,
  title,
  description,
  showTechnology,
  showButton,
  height = "100vh",
  mobileWhiteBlockColor = "#1D120C",
  desktopWhiteBlockColor = "#C8C8C8",
  customHeroTitle = "",
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
      );
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
      <section id="heroGaleria" className={classes.hero} style={{ height }}>
        <div className={classes.textOverlay}>
          <h2 className={classes.hero__title}>
            {title}{" "}
            {showTechnology && (
              <span className={classes.hero__titleSpan}>WAT</span>
            )}
          </h2>
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

export default HeroGallery;
