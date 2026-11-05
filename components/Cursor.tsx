"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

/** Cursor elegante (só desktop com mouse): ponto + anel que cresce sobre links e botões. */
export function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [hover, setHover] = useState(false);
  const [down, setDown] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const dx = useSpring(x, { stiffness: 900, damping: 50, mass: 0.2 });
  const dy = useSpring(y, { stiffness: 900, damping: 50, mass: 0.2 });
  const rx = useSpring(x, { stiffness: 220, damping: 22, mass: 0.5 });
  const ry = useSpring(y, { stiffness: 220, damping: 22, mass: 0.5 });

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);
    const move = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e: PointerEvent) => {
      const t = e.target as HTMLElement | null;
      setHover(!!t?.closest("a, button, [role=button], [data-cursor]"));
    };
    const d = () => setDown(true);
    const u = () => setDown(false);
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerover", over, { passive: true });
    window.addEventListener("pointerdown", d);
    window.addEventListener("pointerup", u);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", over);
      window.removeEventListener("pointerdown", d);
      window.removeEventListener("pointerup", u);
    };
  }, [x, y]);

  if (!enabled) return null;
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[100] mix-blend-difference">
      <motion.div style={{ x: rx, y: ry }} className="absolute top-0 left-0">
        <motion.div
          className="-mt-5 -ml-5 h-10 w-10 rounded-full border border-white"
          animate={{ scale: down ? 0.7 : hover ? 1.9 : 1, backgroundColor: hover ? "rgba(255,255,255,1)" : "rgba(255,255,255,0)" }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        />
      </motion.div>
      <motion.div style={{ x: dx, y: dy }} className="absolute top-0 left-0">
        <div className="-mt-[3px] -ml-[3px] h-1.5 w-1.5 rounded-full bg-white" />
      </motion.div>
    </div>
  );
}
