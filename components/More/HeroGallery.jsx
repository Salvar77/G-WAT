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
  const [whiteBlockColor, setWhiteBlockColor] = useState(mobileWhiteBlockColor);

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
