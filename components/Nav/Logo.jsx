import classes from "./Logo.module.scss";
import Image from "next/image";
import logo from "../../assets/image/g-wat10.png";
import Link from "next/link";

const Logo = ({ showLogo }) => {
  // const logoStyle = {
  //   opacity: showLogo ? 1 : 0,
  //   transform: showLogo ? "translateY(0)" : "translateY(-20px)",
  //   transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
  // };

  return (
    <div className={classes.logo}>
      <Link href="/">
        <Image src={logo} alt="Logo firmowe G-WAT" priority />
      </Link>
    </div>
  );
};

export default Logo;
