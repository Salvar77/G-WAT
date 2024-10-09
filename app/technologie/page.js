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
import galleryHeroImageMobile from "../../assets/image/photovoltaic-system_640.jpg";
import galleryHeroImageDesktop from "../../assets/image/photovoltaic-system_1920.jpg";
import Hero from "@/components/Main/Hero";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import SEO from "../../components/More/SEO";

const allImages = [
  { src: foto2, alt: "Certyfikowane Technologie" },
  { src: foto3, alt: "Certyfikowane Technologie" },
  { src: foto10, alt: "Certyfikowane Technologie" },
  { src: foto11, alt: "Certyfikowane Technologie" },
  { src: foto12, alt: "Certyfikowane Technologie" },
  { src: foto13, alt: "Certyfikowane Technologie" },
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
      prevIndex === allImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPreviousImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? allImages.length - 1 : prevIndex - 1
    );
  };
  return (
    <>
      <SEO
        title="O nas - Technologie i certyfikaty G-WAT"
        description="Dowiedz się więcej o technologiach i certyfikatach, które stosujemy w naszych projektach. Poznaj nasze metody pracy i sprzęt, który wykorzystujemy."
        image="https://www.g-wat.pl/g-wat10.png"
      />
      <section id="about" className={classes.about}>
        <Hero
          heroImageMobile={galleryHeroImageMobile}
          heroImageDesktop={galleryHeroImageDesktop}
          title="Technologie"
          // description="Wykonane zlecenia"
          showTechnology={false}
          showButton={false}
          height="66vh"
          mobileWhiteBlockColor="disable"
          desktopWhiteBlockColor="disable"
        />
        <div className={classes.about__container}>
          <div className={classes.about__box}>
            <div className={classes.about__images}>
              <Image src={foto8} alt="Certyfikowane Technologie" />
              <Image
                src={foto5}
                alt="Certyfikowane Technologie"
                className={classes.hideMobile}
              />
              <Image
                src={foto6}
                alt="Certyfikowane Technologie"
                className={classes.hideMobile}
              />
              <Image
                src={foto4}
                alt="Certyfikowane Technologie"
                className={classes.hideMobile}
              />
              <Image src={foto7} alt="Certyfikowane Technologie" />
              <Image
                src={foto9}
                alt="Certyfikowane Technologie"
                className={classes.hideMobile}
              />
              <Image src={foto} alt="Certyfikowane Technologie" />
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
              alt="Certyfikowane Technologie"
              onClick={() => openModal(4)}
            />
            <Image
              src={foto11}
              alt="Certyfikowane Technologie"
              onClick={() => openModal(3)}
            />
            <Image
              src={foto13}
              alt="Certyfikowane Technologie"
              onClick={() => openModal(5)}
            />
            <Image
              src={foto10}
              alt="Certyfikowane Technologie"
              onClick={() => openModal(2)}
            />
          </div>
        </div>
        <div className={classes.imageWrapperTwo}>
          <div className={classes.about__image}>
            <Image
              src={foto2}
              alt="Certyfikowane Technologie"
              onClick={() => openModal(0)}
            />
            <Image
              src={foto3}
              alt="Certyfikowane Technologie"
              onClick={() => openModal(1)}
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
                src={allImages[currentIndex].src}
                alt={allImages[currentIndex].alt}
                width={allImages[currentIndex].width}
                height={allImages[currentIndex].height}
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
