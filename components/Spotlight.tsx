"use client";

import { useEffect, useRef } from "react";

/** Luz suave que acompanha o mouse dentro da seção (só com mouse). */
export function Spotlight({ color }: { color: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    const parent = el?.parentElement;
    if (!el || !parent) return;
    const move = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      const r = parent.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - r.left}px`);
      el.style.setProperty("--my", `${e.clientY - r.top}px`);
      el.style.opacity = "1";
    };
    const leave = () => (el.style.opacity = "0");
    parent.addEventListener("pointermove", move, { passive: true });
    parent.addEventListener("pointerleave", leave);
    return () => {
      parent.removeEventListener("pointermove", move);
      parent.removeEventListener("pointerleave", leave);
    };
  }, []);
  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700"
      style={{ background: `radial-gradient(520px circle at var(--mx, 50%) var(--my, 50%), ${color}, transparent 65%)` }}
    />
  );
}
