"use client";

import React from "react";
import Image from "next/image";

import icon from "../../assets/image/huawei.svg";
import icon1 from "../../assets/image/solaredge-logo.svg";
import icon2 from "../../assets/image/sungrow-logo-vector.svg";
import icon3 from "../../assets/image/goodwe-logo-vector-2022.svg";
import icon4 from "../../assets/image/foXess.png";
import icon5 from "../../assets/image/byd-1.svg";
import icon6 from "../../assets/image/Growatt-logo.png";
import icon7 from "../../assets/image/pylontech7.png";
import classes from "./About.module.scss";
import foto from "../../assets/image/KT-128.png";
import foto2 from "../../assets/image/mierniki.png";
import foto3 from "../../assets/image/mierniki2.png";
import foto4 from "../../assets/image/acc.jpg";
import foto5 from "../../assets/image/acc1.jpg";
import foto6 from "../../assets/image/acc2.jpg";

const About = () => {
  return (
    <section id="about" className={classes.about}>
      <div className={classes.about__box}>
        <div className={classes.about__images}>
          <Image src={foto} alt="Certyfikowane Technologie" />
          <Image src={foto4} alt="Certyfikowane Technologie" />
          <Image src={foto5} alt="Certyfikowane Technologie" />
          <Image src={foto6} alt="Certyfikowane Technologie" />
        </div>
        <h2 className={classes.about__header}>Nasze Technologie</h2>
      </div>

      <div className={classes.about__content}>
        <p className={classes.deviceInfo}>
          Wykorzystujemy najnowszy <strong>certyfikowany</strong> miernik{" "}
          <span className={classes.span}>Sonel MPI-540PV</span> do precyzyjnych
          pomiarów modułów fotowoltaicznych oraz falowników. Obsługujemy między
          innymi:
        </p>
        <ul className={classes.deviceList}>
          <li>
            <span className={classes.deviceText}>Huawei</span>
            <span className={classes.deviceIcon}>
              <Image src={icon} alt="Huawei" width={32} height={32} />
            </span>
          </li>
          <li>
            <span className={classes.deviceText}>SolarEdge</span>
            <span className={classes.deviceIcon}>
              <Image src={icon1} alt="SolarEdge" width={32} height={32} />
            </span>
          </li>
          <li>
            <span className={classes.deviceText}>FoxEss</span>
            <span className={classes.deviceIcon}>
              <Image src={icon4} alt="FoxEss" width={32} height={32} />
            </span>
          </li>
          <li>
            <span className={classes.deviceText}>GoodWe</span>
            <span className={classes.deviceIcon}>
              <Image src={icon3} alt="GoodWe" width={32} height={32} />
            </span>
          </li>
          <li>
            <span className={classes.deviceText}>Growatt</span>
            <span className={classes.deviceIcon}>
              <Image src={icon6} alt="Growatt" width={32} height={32} />
            </span>
          </li>
          <li>
            <span className={classes.deviceText}>SunGrow</span>
            <span className={classes.deviceIcon}>
              <Image src={icon2} alt="SunGrow" width={32} height={32} />
            </span>
          </li>
          <li>Deye - czekam na potwierdzenie</li>
          <li>Solplanet - czekam na potwierdzenie</li>
        </ul>
        <div className={classes.about__image}>
          <Image src={foto3} alt="Certyfikowane Technologie" />
        </div>
        <ul className={classes.certificatesList}>
          <h3>Certyfikaty magazynów energii:</h3>
          <li>
            <span className={classes.deviceText}>Huawei</span>
            <span className={classes.deviceIcon}>
              <Image src={icon} alt="Huawei" width={32} height={32} />
            </span>
          </li>
          <li>
            <span className={classes.deviceText}>GoodWe</span>
            <span className={classes.deviceIcon}>
              <Image src={icon3} alt="GoodWe" width={32} height={32} />
            </span>
          </li>
          <li>
            <span className={classes.deviceText}>FoxEss</span>
            <span className={classes.deviceIcon}>
              <Image src={icon4} alt="FoxEss" width={32} height={32} />
            </span>
          </li>
          <li>
            <span className={classes.deviceText}>Growatt</span>
            <span className={classes.deviceIcon}>
              <Image src={icon6} alt="Growatt" width={32} height={32} />
            </span>
          </li>
          <li>
            <span className={classes.deviceText}>Pylontech</span>
            <span className={classes.deviceIcon}>
              <Image src={icon7} alt="Pylontech" width={32} height={32} />
            </span>
          </li>
          <li>
            <span className={classes.deviceText}>BYD</span>
            <span className={classes.deviceIcon}>
              <Image src={icon5} alt="BYD" width={32} height={32} />
            </span>
          </li>
          <li>LG - czekam na potwierdzenie</li>
        </ul>

        <p className={classes.signature}>Grzegorz Banach</p>
        <div className={classes.about__image}>
          <Image src={foto2} alt="Certyfikowane Technologie" />
        </div>
      </div>
    </section>
  );
};

export default About;