import classes from "./Footer.module.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={classes.footer}>
      <div className={classes.footer__container}>
        <div className={classes.footer__text}>
          <p className={classes.footer__textInfo}>&copy;{currentYear} G-WAT</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
