"use client";
import Script from "next/script";
import classes from "./ElfsightWidget.module.scss";

const ElfsightWidget = () => {
  return (
    <section id="referencje" className={classes.widgetContainer}>
      <Script
        src="https://static.elfsight.com/platform/platform.js"
        strategy="lazyOnload"
      />

      <div
        className="elfsight-app-b7fe8b7b-c291-4a2c-b504-7e9ca10261e4"
        data-elfsight-app-lazy
      />
    </section>
  );
};

export default ElfsightWidget;
