import React from "react";
import Image from "next/image";
import classes from "./AboutMe.module.scss";
import foto from "../../assets/image/sonel2.png";
import Link from "next/link";

const AboutMe = () => {
  return (
    <section id="O-mnie" className={classes.aboutMe}>
      <h2 className={classes.aboutMe__header}>Nasze usługi</h2>
      <div className={classes.aboutMe__container}>
        <div className={classes.aboutMe__image}>
          <Image src={foto} alt="Założyciel firmy" />
        </div>
        <div className={classes.aboutMe__content}>
          <p className={classes.greeting}>
            Oferujemy najwyższej jakości usługi elektryczne, obejmujące szeroki
            zakres prac dla domów, firm i instytucji. Nasi doświadczeni
            elektrycy wykonują m.in.:
          </p>
          <ul className={classes.servicesList}>
            <li>
              <strong>Instalacje elektryczne:</strong> montaż, wymiana,
              rozbudowa i naprawa instalacji elektrycznych w budynkach
              mieszkalnych, biurowych i przemysłowych.
            </li>
            <li>
              <strong>Pomiary elektryczne:</strong> okresowe pomiary kontrolne
              instalacji elektrycznych.
            </li>
            <li>
              <strong>Przeglądy instalacji elektrycznych:</strong> okresowe
              przeglądy instalacji elektrycznych w celu zapewnienia
              bezpieczeństwa użytkowania.
            </li>
            <li>
              <strong>Drobne naprawy elektryczne:</strong> wymiana gniazdek i
              włączników, naprawa oświetlenia, usuwanie awarii elektrycznych.
            </li>
          </ul>
          <p className={classes.offer}>
            Gwarantujemy wysoką jakość usług, konkurencyjne ceny i terminowe
            wykonanie zleceń. Zapraszamy do skorzystania z naszej oferty!
          </p>
          <p className={classes.signature}>Grzegorz Banach</p>
          <Link href="/technologie" className={classes.link}>
            <button className={classes.exploreButton}>
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
              </svg>
              Tech
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
