"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/site";

export function FloatingCTA() {
  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar avaliação pelo WhatsApp"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 200, damping: 15 }}
      whileHover={{ scale: 1.08 }}
      className="fixed right-4 bottom-4 z-[42] flex h-14 w-14 items-center justify-center rounded-full bg-olive text-white md:right-8 md:bottom-8"
    >
      <motion.span
        className="absolute inset-0 rounded-full bg-olive"
        animate={{ scale: [1, 1.6], opacity: [0.5, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
      />
      <MessageCircle size={24} strokeWidth={1.5} className="relative" />
    </motion.a>
  );
}
