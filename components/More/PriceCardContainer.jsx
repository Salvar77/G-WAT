import React from "react";
import PriceCard from "./PriceCard";
import styles from "./PriceCardsContainer.module.scss";

const PriceCardsContainer = ({ services }) => {
  return (
    <div className={styles.cardsContainer}>
      {services.map((service) => (
        <PriceCard key={service.id} service={service} />
      ))}
    </div>
  );
};

export default PriceCardsContainer;
