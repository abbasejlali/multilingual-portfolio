import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/** Desktop-only cursor follower. Fixed viewport coordinates avoid scroll/container offsets. */
export default function FollowMouse() {
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 420, damping: 34, mass: 0.35 });
  const ringY = useSpring(y, { stiffness: 420, damping: 34, mass: 0.35 });
  const dotX = useSpring(x, { stiffness: 900, damping: 42, mass: 0.18 });
  const dotY = useSpring(y, { stiffness: 900, damping: 42, mass: 0.18 });

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setEnabled(finePointer.matches && !reducedMotion.matches);
    sync();
    finePointer.addEventListener?.("change", sync);
    reducedMotion.addEventListener?.("change", sync);
    const move = (event) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => {
      window.removeEventListener("mousemove", move);
      finePointer.removeEventListener?.("change", sync);
      reducedMotion.removeEventListener?.("change", sync);
    };
  }, [x, y]);

  if (!enabled) return null;
  return (
    <div className="custom-cursor" aria-hidden="true">
      <motion.span className="custom-cursor__ring" style={{ x: ringX, y: ringY }} />
      <motion.span className="custom-cursor__dot" style={{ x: dotX, y: dotY }} />
    </div>
  );
}
