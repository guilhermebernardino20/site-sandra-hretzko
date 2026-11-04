"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "ghost";
  className?: string;
};

export function Button({ href, children, variant = "solid", className = "" }: ButtonProps) {
  const styles =
    variant === "solid"
      ? "bg-coffee text-sand hover:bg-terracotta"
      : "border border-coffee/25 text-coffee hover:border-coffee hover:bg-coffee hover:text-sand";
  return (
    <motion.a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`group inline-flex items-center gap-3 rounded-full px-7 py-4 text-sm font-medium tracking-wide transition-colors duration-500 ${styles} ${className}`}
    >
      {children}
      <ArrowUpRight
        size={16}
        strokeWidth={1.5}
        className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </motion.a>
  );
}
