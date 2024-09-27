import React from "react";
import Image from "next/image";
import classes from "./About.module.scss";
import foto from "../../assets/image/photovoltaic-system_640.jpg";

const About = () => {
  return (
    <section id="about" className={classes.about}>
      <div className={classes.about__container}>
        <div className={classes.about__image}>
          <Image src={foto} alt="Certyfikowane Technologie" />
        </div>
        <div className={classes.about__content}>
          <h2>Nasze Technologie</h2>
          <p className={classes.deviceInfo}>
            Wykorzystujemy najnowszy certyfikowany miernik{" "}
            <strong>Sonel MPI-540PV</strong> do precyzyjnych pomiarów modułów
            fotowoltaicznych oraz falowników. Obsługujemy między innymi:
          </p>
          <ul className={classes.deviceList}>
            <li>Huawei</li>
            <li>SolarEdge</li>
            <li>FoxEss</li>
            <li>GoodWe</li>
            <li>Growatt</li>
            <li>SunGrow</li>
            <li>Deye - czekam na potwierdzenie</li>
            <li>Solplanet - czekam na potwierdzenie</li>
          </ul>

          <h3>Certyfikaty magazynów energii:</h3>
          <ul className={classes.certificatesList}>
            <li>Huawei</li>
            <li>GoodWe</li>
            <li>FoxEss</li>
            <li>Growatt</li>
            <li>Pylontech</li>
            <li>BYD</li>
            <li>LG - czekam na potwierdzenie</li>
          </ul>

          <p className={classes.signature}>Grzegorz Banach</p>
        </div>
      </div>
    </section>
  );
};

export default About;
