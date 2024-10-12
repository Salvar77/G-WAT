import React from "react";
import classes from "./Contact.module.scss";
import { contactInfo } from "../../constants/index";
import Image from "next/image";

const Contact = () => {
  const { title, address, phone, email } = contactInfo;

  return (
    <section id="kontakt" className={classes.contact}>
      <div className={classes.contact__box}>
        <h2 className={classes.contact__boxHeader}>{title}</h2>
        <p>{address.street}</p>
        <p>{address.city}</p>
        <p className={classes.contact__info}>
          <span className={classes.contact__infoContent}>
            <Image
              src={phone.icon}
              alt="ikona Telefonu"
              className={classes.contact__icon}
              width={24}
              height={24}
            />
            <span className={classes.contact__text}>{phone.number}</span>
          </span>
        </p>
        <p className={classes.contact__info}>
          <span className={classes.contact__infoContent}>
            <Image
              src={email.icon}
              alt="ikona Emaila"
              className={classes.contact__icon}
              width={24}
              height={24}
            />
            <span className={classes.contact__text}>{email.address}</span>
          </span>
        </p>
      </div>
    </section>
  );
};

export default Contact;
