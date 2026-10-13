import { useRef } from "react";
import {
  animate,
  useInView,
  useIsomorphicLayoutEffect,
  motion,
} from "framer-motion";

function AnimatedCounter({ to, from, StyleCustome, symbol }) {
  const ref = useRef(null);
  const isInViewNum = useInView(ref, {
    once: true,
  });

  useIsomorphicLayoutEffect(() => {
    const element = ref.current;

    if (!element) return;
    if (!isInViewNum) return;

    element.textCntent = String(from);

    const controls = animate(from, to, {
      duration: 1,
      ease: "easeOut",
      onUpdate(value) {
        element.textContent = `${value.toFixed()}${symbol}`;
      },
    });

    return () => {
      controls.stop();
    };
  }, [ref, isInViewNum, to]);

  return (
    <motion.span
      ref={ref}
      className={StyleCustome}
      viewport={{
        margin: "-200px",
      }}
    />
  );
}

export default AnimatedCounter;
