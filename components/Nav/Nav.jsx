"use client";
import classes from "./Nav.module.scss";
import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useSmoothScroll } from "@/components/More/useSmoothScroll";

const Nav = ({ isOpen, toggleNav }) => {
  let navClasses = classes.nav;
  const [windowWidth, setWindowWidth] = useState(undefined);
  const router = useRouter();
  const pathname = usePathname();
  const scrollTo = useSmoothScroll();

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isOpen) {
    navClasses = `${classes.nav} ${classes.nav__show}`;
  }

  const handleToggleNav = () => {
    if (windowWidth < 992) toggleNav();
  };

  const handleAnchorClick = useCallback(
    (e, sectionId) => {
      e.preventDefault();
      handleToggleNav();

      if (pathname === "/") {
        scrollTo(sectionId);
      } else {
        router.push("/");
        setTimeout(() => scrollTo(sectionId), 600);
      }
    },
    [pathname, scrollTo, router],
  );

  return (
    <nav className={navClasses}>
      <div className={classes.nav__container}>
        <div className={classes.nav__items}>
          <ul aria-hidden className={classes.nav__item}>
            {/* Subpages: learn & discover */}
            <li onClick={handleToggleNav}>
              <Link href="/technologie">Technologie</Link>
            </li>
            <li onClick={handleToggleNav}>
              <Link href="/galeria">Realizacje</Link>
            </li>
            <li onClick={handleToggleNav}>
              <Link href="/cennik">Cennik</Link>
            </li>
            {/* Homepage anchors: trust → action → support */}
            <li>
              <a
                href="/#referencje"
                onClick={(e) => handleAnchorClick(e, "referencje")}
              >
                Referencje
              </a>
            </li>
            <li>
              <a
                href="/#kalendarz"
                onClick={(e) => handleAnchorClick(e, "kalendarz")}
              >
                Rezerwacje
              </a>
            </li>
            <li>
              <a
                href="/#kontakt"
                onClick={(e) => handleAnchorClick(e, "kontakt")}
              >
                Kontakt
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
