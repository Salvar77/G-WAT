"use client";
import { useState, useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import classes from "./ElfsightLazyWrapper.module.scss";

export default function ElfsightLazyWrapper() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const ElfsightWidget = visible
    ? dynamic(() => import("./ElfsightWidget"), { ssr: false })
    : null;

  return (
    <div ref={ref} id="referencje">
      {ElfsightWidget && <ElfsightWidget />}
      {!ElfsightWidget && (
        <div className={classes.placeholder}>
          <h3 className={classes.placeholderTitle}>Pokaż opinie</h3>
          <p className={classes.placeholderText}>
            Przewiń tutaj, aby wczytać widget opinii.
          </p>
        </div>
      )}
    </div>
  );
}
