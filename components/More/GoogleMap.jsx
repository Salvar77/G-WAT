import React from "react";
import classes from "./GoogleMap.module.scss";

const GoogleMap = () => {
  return (
    <div className={classes.map}>
      <iframe
        title="Mapa lokalizacji G-WAT"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3236.681463376096!2d17.9108708!3d50.6687111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4710536e67d70821%3A0x428d18681b0ce694!2sG-WAT%20Grzegorz%20Banach!5e1!3m2!1spl!2spl!4v1728576610776!5m2!1spl!2spl"
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
