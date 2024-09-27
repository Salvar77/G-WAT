"use client";
import Link from "next/link";
import Image from "next/image";
import photo1 from "../../assets/image/hero1_640.jpg";
import photo2 from "../../assets/image/hero1_640.jpg";
import photo3 from "../../assets/image/hero1_640.jpg";
import photo4 from "../../assets/image/hero1_640.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Gallery.module.scss";

const Gallery = () => {
  const images = [
    {
      src: photo1,
      alt: "Photo 1",
    },
    {
      src: photo2,
      alt: "Photo 2",
    },
    {
      src: photo3,
      alt: "Photo 3",
    },
    {
      src: photo4,
      alt: "Photo 4",
    },
  ];

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
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={300}
                objectFit="cover"
              />
            </div>
          ))}
        </Slider>
        <div className={styles.buttonContainer}>
          <Link href="/realizacje" className={styles.customButton}>
            Zobacz Więcej
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
