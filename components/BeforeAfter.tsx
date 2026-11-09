"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { Case } from "@/lib/cases";

/** Comparador de antes e depois com divisor arrastável (mouse, toque e teclado). */
export function BeforeAfter({ data, className = "" }: { data: Case; className?: string }) {
  const [pos, setPos] = useState(50);
  const box = useRef<HTMLDivElement>(null);

  const move = (clientX: number) => {
    const r = box.current?.getBoundingClientRect();
    if (!r) return;
    setPos(Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100)));
  };

  const real = !data.placeholder && data.before && data.after;

  return (
    <div
      ref={box}
      role="slider"
      tabIndex={0}
      aria-label={`Comparar antes e depois: ${data.procedure}`}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(pos)}
      onPointerDown={(e) => {
        e.currentTarget.setPointerCapture(e.pointerId);
        move(e.clientX);
      }}
      onPointerMove={(e) => e.buttons > 0 && move(e.clientX)}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 5));
        if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 5));
      }}
      className={`relative cursor-ew-resize touch-pan-y overflow-hidden rounded-[1.5rem] bg-brown/10 select-none ${className}`}
    >
      {/* DEPOIS (fundo) */}
      <Side label="Depois" src={real ? data.after : undefined} tone="after" />
      {/* ANTES (recortado pelo divisor) */}
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <Side label="Antes" src={real ? data.before : undefined} tone="before" />
      </div>
      {/* divisor */}
      <div aria-hidden className="pointer-events-none absolute inset-y-0 w-px bg-white shadow-[0_0_12px_rgba(0,0,0,0.35)]" style={{ left: `${pos}%` }}>
        <span className="absolute top-1/2 left-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[0.7rem] text-wine shadow-lg">
          ◂ ▸
        </span>
      </div>
      {data.placeholder && (
        <span className="eyebrow absolute top-3 left-1/2 -translate-x-1/2 rounded-full bg-white/90 px-3 py-1 !text-[0.5rem] text-wine">Layout de exemplo</span>
      )}
    </div>
  );
}

function Side({ label, src, tone }: { label: string; src?: string; tone: "before" | "after" }) {
  return (
    <div className={`absolute inset-0 ${tone === "before" ? "bg-[#cdbfae]" : "bg-[#e9dcc9]"}`}>
      {src ? (
        <Image src={src} alt={label} fill sizes="(min-width: 768px) 40vw, 90vw" className="object-cover" draggable={false} />
      ) : (
        <svg aria-hidden viewBox="0 0 100 120" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice">
          <ellipse cx="50" cy="52" rx="24" ry="31" className={tone === "before" ? "fill-brown/25" : "fill-brown/15"} />
          <path d="M14 120c4-26 20-30 36-30s32 4 36 30z" className={tone === "before" ? "fill-brown/25" : "fill-brown/15"} />
          {tone === "before" && <path d="M36 44q5-2 10 0M54 44q5-2 10 0M38 66q12 7 24 0" strokeWidth="0.8" className="fill-none stroke-brown/30" />}
        </svg>
      )}
      <span className={`eyebrow absolute bottom-3 ${tone === "before" ? "left-3" : "right-3"} rounded-full bg-brown/80 px-3 py-1 !text-[0.55rem] text-white`}>{label}</span>
    </div>
  );
}
