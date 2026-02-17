import GoogleMap from "../More/GoogleMap";
import { contactInfo } from "../../constants/index";
import classes from "./Footer.module.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { address, phone, email } = contactInfo;

  return (
    <div>
      <GoogleMap />
      <footer className={classes.footer}>
        <div className={classes.footer__container}>
          <div className={classes.footer__text}>
            <p className={classes.footer__textInfo}>
              {address.street}, {address.city} | Tel: {phone.number} |{" "}
              <a href={`mailto:${email.address}`}>{email.address}</a>
            </p>
          </div>

          <ul className={classes.footer__menu}>
            <li>
              <a href="/technologie">Technologie</a>
            </li>
            <li>
              <a href="/galeria">Realizacje</a>
            </li>
          </ul>
        </div>

        <div className={classes.footer__text}>
          <p className={classes.footer__textInfo}>&copy;{currentYear} G-WAT</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
