import React from "react";
import Image from "next/image";
import styles from "./PriceCard.module.scss";

const PriceCard = ({ service }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardImg}>
        <Image
          src={service.thumbnailPath}
          alt={`Zdjęcie usługi ${service.name}`}
        />
        <h3 className={styles.cardImgTitle}>{service.name}</h3>
      </div>

      <div className={styles.cardInfo}>
        <h3 className={styles.cardInfoTitle}>{service.name}</h3>
        <p className={styles.description}>{service.description}</p>
        <ul className={styles.cardInfoList}>
          {service.details.map((detail, idx) => (
            <li key={idx} className={styles.cardInfoListItem}>
              {detail}
            </li>
          ))}
        </ul>
        {service.regions.map((region, idx) => (
          <div key={idx} className={styles.regionInfo}>
            <h4 className={styles.regionName}>{region.region}</h4>
            <p className={styles.pricingText}>
              Cena:{" "}
              <span className={styles.priceValue}>{region.priceBrutto}</span>
              {region.priceNetto && <span> Netto: {region.priceNetto}</span>}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriceCard;
