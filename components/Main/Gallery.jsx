"use client";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Gallery.module.scss";
import { images } from "@/constants";

const Gallery = () => {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="galeria" className={styles.galleryMain}>
      <div className={styles.content}>
        <Slider {...settings} className={styles.slider}>
          {images.map((image, index) => (
            <div key={index} className={styles.imgBox}>
              <Image src={image.src} alt={image.alt} />
            </div>
          ))}
        </Slider>
        <div className={styles.buttonContainer}>
          <Link href="/galeria" className={styles.customButton}>
            Zobacz Więcej
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
