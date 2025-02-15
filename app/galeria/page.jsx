"use client";
import { useState } from "react";
import Modal from "react-modal";
import Hero from "@/components/Main/Hero";
import classes from "./Realizations.module.scss";
import styles from "../../components/Main/Hero";
import galleryHeroImageMobile from "../../assets/image/hero8_640.png";
import galleryHeroImageDesktop from "../../assets/image/hero8_1920.png";
import photo1 from "../../assets/image/hero2_640.jpg";
import photo2 from "../../assets/image/hero3_640.jpg";
import photo3 from "../../assets/image/hero1_640.jpg";
import photo4 from "../../assets/image/hero_640.jpg";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import Image from "next/image";
import SEO from "../../components/More/SEO";
import HeroGallery from "@/components/More/HeroGallery";

import { allImages } from "../../constants";

const Realizations = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

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
        title="Realizacje G-WAT - Galeria z pomiarów elektrycznych i serwisu instalacji fotowoltaicznych w Opolu"
        description="Zobacz galerię naszych realizacji, które obejmują profesjonalne pomiary elektryczne oraz serwis instalacji fotowoltaicznych w Opolu i okolicach, wykonane z wykorzystaniem nowoczesnych technologii i urządzeń, takich jak Sonel MPI-540PV."
        image="https://www.g-wat.pl/g-wat10.png"
      />
      <div className="heroContainer">
        <HeroGallery
          heroImageMobile={galleryHeroImageMobile}
          heroImageDesktop={galleryHeroImageDesktop}
          title="Galeria"
          showTechnology={false}
          showButton={false}
          height="70vh"
          mobileWhiteBlockColor="disable"
          desktopWhiteBlockColor="disable"
          customHeroTitle={classes.customHeroTitleRealizations}
          customHeroClass={classes.customHeroClassRealizations}
        />
      </div>
      <section className={classes.fullGallery}>
        <h2 className={classes.title}>Realizacje</h2>
        <div className={classes.grid}>
          {allImages.map((image, index) => (
            <div
              onClick={() => openModal(index)}
              key={index}
              className={classes.gridItem}
            >
              <Image src={image.src} alt={image.alt} loading="lazy" />
            </div>
          ))}
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
              />
            </div>
            <button className={classes.prevButton} onClick={goToPreviousImage}>
              <FaArrowCircleLeft />
            </button>
            <button className={classes.nextButton} onClick={goToNextImage}>
              <FaArrowCircleRight />
            </button>
          </div>
        </Modal>
      </section>
    </>
  );
};

export default Realizations;
