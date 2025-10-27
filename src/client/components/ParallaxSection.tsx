"use client";

import React, {
  forwardRef,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  motion,
  MotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [distance, -distance]);
}

type Props = {
  children: React.ReactNode;
  distance?: number;
  className?: string;
  id?: string;
};

const ParallaxSectionMotion = forwardRef<HTMLElement, Props>(
  ({ children, distance = 120, className = "", id }, forwardedRef) => {
    const localRef = useRef<HTMLElement | null>(null);

    // forward ref (so your existing refs still work)
    useEffect(() => {
      if (!forwardedRef) return;
      if (typeof forwardedRef === "function") forwardedRef(localRef.current);
      else (forwardedRef as React.MutableRefObject<HTMLElement | null>).current =
        localRef.current;
    }, [forwardedRef]);

    // scroll progress for this section
    const { scrollYProgress } = useScroll({
      target: localRef,
      offset: ["start end", "end start"], // matches the images example behaviour
    });

    // y parallax and gentle spring smoothing
    const rawY = useParallax(scrollYProgress as MotionValue<number>, distance);
    const y = useSpring(rawY, { stiffness: 100, damping: 30, restDelta: 0.001 });

    // optional fade (makes the transition feel nicer)
    const opacity = useTransform(scrollYProgress, [0.15, 0.5, 0.85], [0, 1, 0]);

    // for sections shorter than viewport, snap to bottom; otherwise center
    const [snapAlign, setSnapAlign] = useState<"start" | "center" | "end">(
      "center"
    );
    useEffect(() => {
      const el = localRef.current;
      if (!el) return;
      const check = () =>
        setSnapAlign(el.offsetHeight < window.innerHeight ? "end" : "center");
      check();
      window.addEventListener("resize", check);
      return () => window.removeEventListener("resize", check);
    }, []);

    return (
      <section
        id={id}
        ref={localRef}
        className={`${className} parallax-section`}
        style={{
          height: "100vh", // full viewport like the image example
          scrollSnapAlign: snapAlign,
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <motion.div
          className="parallax-inner"
          style={{ y, opacity, width: "100%", height: "100%", willChange: "transform, opacity" }}
        >
          {children}
        </motion.div>
      </section>
    );
  }
);

export default ParallaxSectionMotion;
