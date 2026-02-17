"use client";
import { useState } from "react";
import Modal from "react-modal";
import classes from "./Realizations.module.scss";
import galleryHeroImageMobile from "../../assets/image/hero8_640.png";
import galleryHeroImageDesktop from "../../assets/image/hero8_1920.png";

import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import Image from "next/image";
import HeroGallery from "@/components/More/HeroGallery";

import { allImages } from "../../constants";

const RealizationsClient = () => {
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

export default RealizationsClient;
