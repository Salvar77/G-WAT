"use client";
import React, { useState, useRef, useEffect } from "react";
import styles from "./PriceList.module.scss";
import cn from "classnames";
import Image from "next/image";
import { priceList } from "../../constants";
import PriceCardsContainer from "../../components/More/PriceCardContainer";

const PriceList = () => {
  const [activeService, setActiveService] = useState(null);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 992);
  const contentRefs = useRef(new Map());
  const headerRefs = useRef(new Map());

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 992);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    priceList.forEach((service) => {
      const currentRef = contentRefs.current.get(service.id);
      if (currentRef) {
        currentRef.style.maxHeight =
          activeService === service.id ? `${currentRef.scrollHeight}px` : "0";
      }
    });
  }, [activeService, priceList]);

  const toggleService = (id) => {
    const isSameService = activeService === id;
    setActiveService(isSameService ? null : id);

    if (!isSameService) {
      setTimeout(() => {
        const headerRef = headerRefs.current.get(id);
        if (headerRef) {
          const headerRect = headerRef.getBoundingClientRect();
          const offsetPosition = window.pageYOffset + headerRect.top - 20;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 200);
    }
  };

  return (
    <section id="cennik" className={styles.pricingSection}>
      <h2 className={styles.pricingHeader}>Cennik</h2>
      <div className={styles.servicesContainer}>
        {isDesktop ? (
          <PriceCardsContainer services={priceList} />
        ) : (
          priceList.map((service, index) => (
            <div key={index} className={styles.serviceItem}>
              <div
                className={cn(styles.serviceHeader, {
                  [styles.active]: activeService === service.id,
                })}
                onClick={() => toggleService(service.id)}
                ref={(el) => {
                  headerRefs.current.set(service.id, el);
                }}
              >
                {service.name}
              </div>
              <div
                className={cn(styles.serviceDetails, {
                  [styles.active]: activeService === service.id,
                })}
                ref={(el) => {
                  contentRefs.current.set(service.id, el);
                }}
              >
                {activeService === service.id && (
                  <div className={styles.serviceContent}>
                    <p className={styles.description}>{service.description}</p>
                    <div className={styles.img}>
                      <Image
                        src={service.imagePath}
                        alt={service.name}
                        width={600}
                        height={400}
                        objectFit="cover"
                      />
                    </div>
                    <ul className={styles.pricingList}>
                      {service.details.map((detail, idx) => (
                        <li key={idx} className={styles.pricingListItem}>
                          {detail}
                        </li>
                      ))}
                    </ul>
                    <div className={styles.regionPrices}>
                      {service.regions.map((region, idx) => (
                        <div key={idx} className={styles.pricingType}>
                          <h4 className={styles.regionName}>{region.region}</h4>
                          <p className={styles.pricingText}>
                            Cena:{" "}
                            <span className={styles.priceValue}>
                              {region.priceBrutto}
                            </span>
                            {region.priceNetto && (
                              <>
                                <br />
                                Netto:{" "}
                                <span className={styles.priceValue}>
                                  {region.priceNetto}
                                </span>
                              </>
                            )}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default PriceList;
