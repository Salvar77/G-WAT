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
        <p>
          <Image
            src={phone.icon}
            alt="Phone icon"
            className={classes.contact__icon}
          />{" "}
          <span className={`${classes.highlightedText} ${classes.noLinkStyle}`}>
            {phone.number}
          </span>
        </p>
        <p>
          <Image
            src={email.icon}
            alt="Email icon"
            className={classes.contact__icon}
          />{" "}
          {email.address}
        </p>
      </div>
    </section>
  );
};

export default Contact;
