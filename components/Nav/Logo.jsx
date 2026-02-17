import classes from "./Logo.module.scss";
import Image from "next/image";
import logo from "../../assets/image/g-wat15-svg1.svg";
import Link from "next/link";

const Logo = () => {
  return (
    <div className={classes.logo}>
      <Link href="/">
        <Image src={logo} alt="Logo firmowe G-WAT" loading="eager" />
      </Link>
    </div>
  );
};

export default Logo;
