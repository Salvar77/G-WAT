import React from "react";

const HeroGallery = () => {
  return (
    <section id="galeria">
      <div className={classes.imageContainer}>
        <Image
          src={currentImage}
          alt="Hero grafika"
          fill={true}
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
      <div className={classes.textOverlay}>
        <h1 className={classes.hero__title}>{title}</h1>
        <p>{description}</p>
        <Link href="#galeria" className={classes.button}>
          Realizacje
        </Link>
      </div>
    </section>
  );
};

export default HeroGallery;
