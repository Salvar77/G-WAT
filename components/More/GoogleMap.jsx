import React from "react";
import classes from "./GoogleMap.module.scss";

const GoogleMap = () => {
  return (
    <div className={classes.map}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3236.6827476414283!2d17.908697477016606!3d50.668692471625285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471052fda50af69d%3A0x7f6e935d61daf173!2sStefana%20Okrzei%2021%2C%2046-020%20Opole!5e1!3m2!1spl!2spl!4v1726338636742!5m2!1spl!2spl"
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
