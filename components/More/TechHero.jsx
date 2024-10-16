"use client";
import { useEffect, useState } from "react";
import React from "react";
import Image from "next/image";
import classes from "./TechHero.module.scss"; // Uwzględnij ścieżkę do twojego pliku SCSS

const TechHero = ({
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
      <section id="techHero" className={classes.techHero} style={{ height }}>
        <div className={classes.techHero__textOverlay}>
          <h2 className={classes.techHero__title}>
            {title}{" "}
            {showTechnology && (
              <span className={classes.techHero__titleSpan}>WAT</span>
            )}
          </h2>
          <p>{description}</p>
          {showButton && (
            <a href="#galeria" className={classes.techHero__button}>
              Realizacje
            </a>
          )}
        </div>
        <div
          className={`${classes.techHero__whiteBlock} ${classes.techHero__whiteBlockLeft}`}
          style={{ backgroundColor: whiteBlockColor }}
        ></div>
      </section>
    </div>
  );
};

export default TechHero;
