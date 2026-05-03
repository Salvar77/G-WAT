"use client";

/**
 * useSmoothScroll – dynamically calculates the navbar height offset
 * and smoothly scrolls to any section by its ID.
 *
 * Usage:
 *   const scrollTo = useSmoothScroll();
 *   scrollTo("kalendarz");
 */
export function useSmoothScroll() {
  const scrollToSection = (sectionId) => {
    const target = document.getElementById(sectionId);
    if (!target) return;

    // Dynamically measure the navbar height so we always account for the right offset
    const navbar = document.querySelector("nav");
    const navHeight = navbar ? navbar.getBoundingClientRect().height : 90;

    // Extra breathing room so the section header isn't flush against the navbar
    const EXTRA_OFFSET = 24;

    const targetTop =
      target.getBoundingClientRect().top +
      window.scrollY -
      navHeight -
      EXTRA_OFFSET;

    window.scrollTo({
      top: targetTop,
      behavior: "smooth",
    });
  };

  return scrollToSection;
}
