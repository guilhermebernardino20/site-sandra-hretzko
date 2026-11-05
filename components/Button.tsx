"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { MouseEvent, ReactNode } from "react";

const variants = {
  brown: "bg-brown text-white hover:bg-wine",
  wine: "bg-wine text-white hover:bg-olive",
  light: "bg-white text-brown hover:bg-white/85",
  ghost: "border border-current text-inherit hover:bg-brown hover:text-white hover:border-brown",
} as const;

export function Button({
  href,
  children,
  variant = "brown",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  className?: string;
}) {
  const external = href.startsWith("http");
  // Efeito magnético: o botão acompanha levemente o cursor (só com mouse)
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 220, damping: 18, mass: 0.4 });
  const y = useSpring(my, { stiffness: 220, damping: 18, mass: 0.4 });

  const onMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - (r.left + r.width / 2)) * 0.22);
    my.set((e.clientY - (r.top + r.height / 2)) * 0.3);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      style={{ x, y }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      whileTap={{ scale: 0.96 }}
      className={`btn-shine group relative inline-flex items-center gap-3 overflow-hidden rounded-full px-7 py-4 text-sm tracking-wide transition-colors duration-500 fat-sm ${variants[variant]} ${className}`}
    >
      <span className="relative">{children}</span>
      <ArrowUpRight
        size={16}
        strokeWidth={1.75}
        className="relative transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </motion.a>
  );
}
