"use client";

import { useEffect, useState } from "react";

/** Barra de progresso de leitura (o scroll acontece em #blog-scroll). */
export function ReadingProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const el = document.getElementById("blog-scroll");
    if (!el) return;
    const on = () => setP(el.scrollTop / Math.max(1, el.scrollHeight - el.clientHeight));
    on();
    el.addEventListener("scroll", on, { passive: true });
    return () => el.removeEventListener("scroll", on);
  }, []);
  return (
    <div aria-hidden className="pointer-events-none fixed inset-x-0 top-0 z-50 h-[3px] bg-transparent">
      <div className="h-full origin-left bg-wine" style={{ transform: `scaleX(${p})` }} />
    </div>
  );
}
