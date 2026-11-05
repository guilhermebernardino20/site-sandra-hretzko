"use client";

import { motion } from "framer-motion";

const words = ["Naturalidade", "Anatomia", "Propósito", "Indicação precisa", "Menos, e melhor", "Fé"];

/** Faixa em movimento contínuo (decorativa). */
export function Ticker() {
  const row = (
    <span className="fat-sm flex shrink-0 items-center gap-6 pr-6 text-[0.65rem] tracking-[0.3em] uppercase">
      {words.map((w) => (
        <span key={w} className="flex items-center gap-6">
          {w} <span className="text-[#E6CFA5]">✦</span>
        </span>
      ))}
    </span>
  );
  return (
    <div aria-hidden className="relative z-10 mt-auto w-full shrink-0 overflow-hidden bg-olive py-2.5 whitespace-nowrap text-white">
      <motion.div
        className="flex w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, ease: "linear", repeat: Infinity }}
      >
        {row}
        {row}
      </motion.div>
    </div>
  );
}
