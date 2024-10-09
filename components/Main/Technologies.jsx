import React from "react";
import classes from "./Technologies.module.scss";
import {
  FaBolt,
  FaCogs,
  FaLightbulb,
  FaCamera,
  FaChargingStation,
  FaBatteryFull,
  FaClipboardCheck,
  FaHome,
} from "react-icons/fa";

const Technologies = () => {
  return (
    <section id="technologies" className={classes.technologies}>
      <div className={classes.technologies__grid}>
        <div className={classes.technology}>
          <FaClipboardCheck className={classes.icon} />
          <p>Pomiary elektryczne</p>
        </div>

        <div className={classes.technology}>
          <FaCogs className={classes.icon} />
          <p>Instalacje techniczne i alarmowe</p>
        </div>
        <div className={classes.technology}>
          <FaLightbulb className={classes.icon} />
          <p>Montaż oświetlenia</p>
        </div>
        <div className={classes.technology}>
          <FaCamera className={classes.icon} />
          <p>Instalacje monitoringów</p>
        </div>
        <div className={classes.technology}>
          <FaBolt className={classes.icon} />
          <p>Instalacje elektryczne</p>
        </div>

        <div className={classes.technology}>
          <FaBatteryFull className={classes.icon} />
          <p>Montaż rozdzielnic</p>
        </div>

        <div className={classes.technology}>
          <FaHome className={classes.icon} />
          <p>Instalacje mieszkaniowe</p>
        </div>
        <div className={classes.technology}>
          <FaChargingStation className={classes.icon} />
          <p>Przyłącza elektryczne</p>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
