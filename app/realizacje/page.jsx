"use client";
import { useState } from "react";
import Modal from "react-modal";
import Hero from "@/components/Main/Hero";
import classes from "./Realizations.module.scss";
import galleryHeroImageMobile from "../../assets/image/photovoltaic_640.jpg";
import galleryHeroImageDesktop from "../../assets/image/photovoltaic_1920.jpg";
import photo1 from "../../assets/image/hero2_640.jpg";
import photo2 from "../../assets/image/hero3_640.jpg";
import photo3 from "../../assets/image/hero1_640.jpg";
import photo4 from "../../assets/image/hero_640.jpg";
import Image from "next/image";

const allImages = [
  { src: photo1, alt: "Photo 1" },
  { src: photo2, alt: "Photo 2" },
  { src: photo3, alt: "Photo 3" },
  { src: photo4, alt: "Photo 4" },
  { src: photo1, alt: "Photo 1" },
  { src: photo2, alt: "Photo 2" },
  { src: photo3, alt: "Photo 3" },
  { src: photo4, alt: "Photo 4" },
];

const Realizations = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const openModal = (image) => {
    setCurrentImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentImage(null);
  };

  return (
    <section className={classes.fullGallery}>
      <Hero
        heroImageMobile={galleryHeroImageMobile}
        heroImageDesktop={galleryHeroImageDesktop}
        title="Galeria"
        description="Wykonane zlecenia"
        showTechnology={false}
        showButton={false}
        height="66vh"
      />
      <h1 className={classes.title}>Realizacje</h1>
      <div className={classes.grid}>
        {allImages.map((image, index) => (
          <div
            onClick={() => openModal(image.src)}
            key={index}
            className={classes.gridItem}
          >
            <Image src={image.src} alt={image.alt} layout="responsive" />
          </div>
        ))}
      </div>

      {currentImage && (
        <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
          className={classes.modal}
          overlayClassName={classes.overlay}
        >
          <div className={classes.modalContent}>
            <div className={classes.imageContainer}>
              <Image
                src={currentImage}
                alt="Powiększone zdjęcie"
                layout="responsive"
                objectFit="contain"
              />
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};

export default Realizations;
