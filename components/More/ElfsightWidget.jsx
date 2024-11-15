import classes from "./ElfsightWidget.module.scss";

const ElfsightWidget = () => {
  return (
    <section id="referencje" className={classes.widgetContainer}>
      <div
        className={classes.widgetInner}
        dangerouslySetInnerHTML={{
          __html: `
            <script src="https://static.elfsight.com/platform/platform.js" async></script>
            <div class="elfsight-app-b7fe8b7b-c291-4a2c-b504-7e9ca10261e4" data-elfsight-app-lazy></div>
          `,
        }}
      />
    </section>
  );
};

export default ElfsightWidget;
