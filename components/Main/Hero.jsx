"use client";
import { useEffect, useState } from "react";
import React from "react";
import Link from "next/link";
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
}) => {
  const [currentImage, setCurrentImage] = useState(heroImageMobile);
  const [viewportHeight, setViewportHeight] = useState(null);

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
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, [heroImageDesktop, heroImageMobile]);

  return (
    <div>
      <section id="hero" className={classes.hero} style={{ height: height }}>
        <div className={classes.imageContainer}>
          <Image
            src={currentImage}
            alt="Hero grafika"
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
            <Link href="#galeria" className={classes.button}>
              Realizacje
            </Link>
          )}
        </div>
      </section>
    </div>
  );
};

export default Hero;
