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

const technologyData = [
  { Icon: FaClipboardCheck, text: "Pomiary elektryczne" },
  { Icon: FaCogs, text: "Instalacje techniczne i alarmowe" },
  { Icon: FaLightbulb, text: "Montaż oświetlenia" },
  { Icon: FaCamera, text: "Instalacje monitoringów" },
  { Icon: FaBolt, text: "Instalacje elektryczne" },
  { Icon: FaBatteryFull, text: "Montaż rozdzielnic" },
  { Icon: FaHome, text: "Instalacje mieszkaniowe" },
  { Icon: FaChargingStation, text: "Przyłącza elektryczne" },
];

const Technologies = () => (
  <section id="technologies" className={classes.technologies}>
    <div className={classes.technologies__grid}>
      {technologyData.map(({ Icon, text }, index) => (
        <div key={index} className={classes.technology}>
          <Icon className={classes.icon} />
          <p>{text}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Technologies;
