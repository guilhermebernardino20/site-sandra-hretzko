"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

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
  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`fat-sm inline-flex items-center gap-3 rounded-full px-7 py-4 text-sm tracking-wide transition-colors duration-500 ${variants[variant]} ${className}`}
    >
      {children}
      <ArrowUpRight size={16} strokeWidth={1.75} />
    </motion.a>
  );
}
