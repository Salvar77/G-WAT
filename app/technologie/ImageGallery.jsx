import Image from "next/image";
import styles from "./ImageGallery.module.scss";
import foto10 from "../../assets/image/sonel3.jpg";
import foto11 from "../../assets/image/sonel4.jpg";
import foto12 from "../../assets/image/sonel5.jpg";
import foto13 from "../../assets/image/sonel8.jpg";

const ImageGallery = ({ images }) => {
  return (
    <div className={styles.imageGalleryWrapper}>
      <div className={styles.imageGallery}>
        <Image src={foto12} alt="Certyfikowane Technologie" />
        <Image src={foto11} alt="Certyfikowane Technologie" />
        <Image src={foto13} alt="Certyfikowane Technologie" />
        <Image src={foto10} alt="Certyfikowane Technologie" />
      </div>
    </div>
  );
};

export default ImageGallery;
