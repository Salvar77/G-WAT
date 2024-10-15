import classes from "./Logo.module.scss";
import Image from "next/image";
import logo from "../../assets/image/g-wat13.png";
import Link from "next/link";

const Logo = () => {
  return (
    <div className={classes.logo}>
      <Link href="/">
        <Image src={logo} alt="Logo firmowe G-WAT" priority />
      </Link>
    </div>
  );
};

export default Logo;
