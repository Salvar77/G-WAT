import React from "react";
import classes from "./GoogleMap.module.scss";

const GoogleMap = () => {
  return (
    <div className={classes.map}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3236.681230931762!2d17.908295877016588!3d50.66871447162372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471052fdb24a6041%3A0x72385342fb6c5916!2sStefana%20Okrzei%2011%2F9%2C%2046-020%20Opole!5e1!3m2!1spl!2spl!4v1727811444881!5m2!1spl!2spl"
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
