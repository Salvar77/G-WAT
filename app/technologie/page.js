"use client";
import { useState, useEffect } from "react";
import Modal from "react-modal";
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
import foto2 from "../../assets/image/mierniki1-1.png";
import foto3 from "../../assets/image/mierniki2-2.png";
import foto4 from "../../assets/image/acc.jpg";
import foto5 from "../../assets/image/acc1.jpg";
import foto6 from "../../assets/image/acc2.jpg";
import foto7 from "../../assets/image/acc3.jpg";
import foto8 from "../../assets/image/acc4.jpg";
import foto9 from "../../assets/image/sonel6.jpg";
import foto10 from "../../assets/image/sonel3.jpg";
import foto11 from "../../assets/image/sonel4.jpg";
import foto12 from "../../assets/image/sonel5.jpg";
import foto13 from "../../assets/image/sonel8.jpg";
import foto14 from "../../assets/image/sonel9.jpg";
import foto15 from "../../assets/image/sonel10.jpg";
import realizationHeroImageMobile from "../../assets/image/hero7_640.jpg";
import realizationHeroImageDesktop from "../../assets/image/hero7_1920.jpg";
import Hero from "@/components/Main/Hero";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import SEO from "../../components/More/SEO";
import TechHero from "@/components/More/TechHero";

const selectedImages = [
  { src: foto12, alt: "Akcesoria pomiarowe do urządzeń Sonel MPI-540PV" },
  {
    src: foto11,
    alt: "Sonel MPI-540PV - profesjonalny miernik do pomiarów instalacji fotowoltaicznych",
  },
  {
    src: foto13,
    alt: "Kable i przewody do pomiarów instalacji fotowoltaicznych",
  },
  { src: foto10, alt: "Urządzenie do ładowania samochodów elektrycznych" },
  {
    src: foto2,
    alt: "Infografika - Technologie fotowoltaiczne i urządzenia pomiarowe",
  },
  {
    src: foto3,
    alt: "Infografika - Elektromobilność i urządzenia do pomiarów stacji ładowania",
  },
];

const About = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 992);

    function handleResize() {
      setIsMobile(window.innerWidth < 992);
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const goToNextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === selectedImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPreviousImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? selectedImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <SEO
        title="Pomiary elektryczne i serwis instalacji fotowoltaicznych w Opolu - Technologie i certyfikaty G-WAT"
        description="Specjalizujemy się w profesjonalnych pomiarach elektrycznych oraz serwisie instalacji fotowoltaicznych w Opolu i okolicach, wykorzystując zaawansowane technologie takie jak Sonel MPI-540PV. Dowiedz się więcej o naszych certyfikatach, metodach pracy i sprzęcie."
        image="https://www.g-wat.pl/g-wat10.png"
      />
      <div className="heroContainer">
        <TechHero
          heroImageMobile={realizationHeroImageMobile}
          heroImageDesktop={realizationHeroImageDesktop}
          title="Technologie"
          showTechnology={false}
          showButton={false}
          height="66vh"
          mobileWhiteBlockColor="disable"
          desktopWhiteBlockColor="disable"
        />
      </div>
      <section className={classes.about}>
        <div className={classes.about__container}>
          <div className={classes.about__box}>
            <div className={classes.about__images}>
              <Image
                src={foto8}
                alt="Certyfikowane urządzenia Sonel do pomiarów "
              />
              <Image
                src={foto5}
                alt="Akcesoria pomiarowe do miernika Sonel MPI-540PV"
                className={classes.hideMobile}
              />
              <Image
                src={foto6}
                alt="Szczypce pomiarowe do urządzeń Sonel"
                className={classes.hideMobile}
              />
              <Image
                src={foto4}
                alt="Przewody pomiarowe do instalacji fotowoltaicznych"
                className={classes.hideMobile}
              />
              <Image
                src={foto7}
                alt="Urządzenia do precyzyjnych pomiarów instalacji fotowoltaicznych"
              />
              <Image
                src={foto9}
                alt="Miernik elektryczny Sonel MPI-540PV do pomiarów fotowoltaicznych"
                className={classes.hideMobile}
              />
              <Image
                src={foto}
                alt="Sonel MPI-540PV - urządzenie pomiarowe do instalacji elektrycznych"
              />
            </div>
            <h2 className={classes.about__header}>Nasze Technologie</h2>
          </div>

          <div className={classes.about__content}>
            <p className={classes.deviceInfo}>
              Wykorzystujemy najnowszy <strong>certyfikowany</strong> miernik{" "}
              <span className={classes.span}>Sonel MPI-540PV</span> do
              precyzyjnych pomiarów modułów fotowoltaicznych oraz falowników.
              Obsługujemy między innymi:
            </p>

            <ul className={classes.deviceList}>
              <li>
                <span className={classes.deviceText}>Huawei</span>
                <span className={classes.deviceIcon}>
                  <Image
                    src={icon}
                    alt="Logo Huawei - falowniki fotowoltaiczne"
                    width={32}
                    height={32}
                  />
                </span>
              </li>
              <li>
                <span className={classes.deviceText}>SolarEdge</span>
                <span className={classes.deviceIcon}>
                  <Image
                    src={icon1}
                    alt="Logo SolarEdge - instalacje fotowoltaiczne"
                    width={32}
                    height={32}
                  />
                </span>
              </li>
              <li>
                <span className={classes.deviceText}>FoxEss</span>
                <span className={classes.deviceIcon}>
                  <Image
                    src={icon4}
                    alt="Logo FoxEss - falowniki fotowoltaiczne"
                    width={32}
                    height={32}
                  />
                </span>
              </li>
              <li>
                <span className={classes.deviceText}>GoodWe</span>
                <span className={classes.deviceIcon}>
                  <Image
                    src={icon3}
                    alt="Logo GoodWe - rozwiązania fotowoltaiczne"
                    width={32}
                    height={32}
                  />
                </span>
              </li>
              <li>
                <span className={classes.deviceText}>Growatt</span>
                <span className={classes.deviceIcon}>
                  <Image
                    src={icon6}
                    alt="Logo Growatt - instalacje fotowoltaiczne"
                    width={32}
                    height={32}
                  />
                </span>
              </li>
              <li>
                <span className={classes.deviceText}>SunGrow</span>
                <span className={classes.deviceIcon}>
                  <Image
                    src={icon2}
                    alt="Logo SunGrow - technologie fotowoltaiczne"
                    width={32}
                    height={32}
                  />
                </span>
              </li>
            </ul>

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
            </ul>

            <p className={classes.signature}>Grzegorz Banach</p>
          </div>
        </div>

        <div className={classes.imageWrapper}>
          <div className={classes.about__image}>
            <Image
              src={foto12}
              alt="Urządzenie pomiarowe Sonel MPI-540PV"
              onClick={() => openModal(0)}
            />
            <Image
              src={foto11}
              alt="Sonel MPI-540PV - profesjonalny miernik do pomiarów instalacji fotowoltaicznych"
              onClick={() => openModal(1)}
            />
            <Image
              src={foto13}
              alt="Kable i przewody do pomiarów instalacji fotowoltaicznych"
              onClick={() => openModal(2)}
            />
            <Image
              src={foto10}
              alt="Urządzenie pomiarowe Sonel MPI-540PV"
              onClick={() => openModal(3)}
            />
          </div>
        </div>
        <div className={classes.imageWrapperTwo}>
          <div className={classes.about__image}>
            <Image
              src={foto2}
              alt="Infografika - Technologie fotowoltaiczne i urządzenia pomiarowe"
              onClick={() => openModal(4)}
            />
            <Image
              src={foto3}
              alt="Infografika - Elektromobilność i urządzenia do pomiarów stacji ładowania"
              onClick={() => openModal(5)}
            />
          </div>
        </div>

        <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
          className={classes.modal}
          overlayClassName={classes.overlay}
        >
          <div className={classes.modalContent}>
            <div className={classes.imageContainer}>
              <Image
                src={selectedImages[currentIndex].src}
                alt={selectedImages[currentIndex].alt}
                width={selectedImages[currentIndex].width}
                height={selectedImages[currentIndex].height}
                layout="responsive"
                objectFit="contain"
              />
            </div>
            {isMobile && (
              <>
                <button
                  className={classes.prevButton}
                  onClick={goToPreviousImage}
                >
                  <FaArrowCircleLeft />
                </button>
                <button className={classes.nextButton} onClick={goToNextImage}>
                  <FaArrowCircleRight />
                </button>
              </>
            )}
          </div>
        </Modal>
      </section>
    </>
  );
};

export default About;
