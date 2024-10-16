"use client";
import { useEffect, useState } from "react";
import React from "react";
import Image from "next/image";
import classes from "./TechHero.module.scss";

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
  const [whiteBlockColor, setWhiteBlockColor] = useState(mobileWhiteBlockColor);

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
