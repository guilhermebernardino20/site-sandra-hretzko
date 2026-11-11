"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
};

/** Container que revela os filhos <Item> em cascata ao entrar na viewport. */
export function Stagger(props: HTMLMotionProps<"div">) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      {...props}
    />
  );
}

export function Item(props: HTMLMotionProps<"div">) {
  return <motion.div variants={item} {...props} />;
}

export function ItemLi(props: HTMLMotionProps<"li">) {
  return <motion.li variants={item} {...props} />;
}

const maskLine = {
  hidden: { y: "108%" },
  visible: { y: "0%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as const } },
};

/** Linha de título que "sobe" de dentro de uma máscara (use dentro de <Stagger>). */
export function MaskLine({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span className="block overflow-hidden pt-[0.3em] pb-[0.18em] -mt-[0.3em] -mb-[0.18em]">
      <motion.span variants={maskLine} className={`block ${className}`}>
        {children}
      </motion.span>
    </span>
  );
}

const clip = {
  hidden: { clipPath: "inset(100% 0% 0% 0%)" },
  visible: { clipPath: "inset(0% 0% 0% 0%)", transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] as const } },
};
const zoomOut = {
  hidden: { scale: 1.25 },
  visible: { scale: 1, transition: { duration: 1.4, ease: "easeOut" as const } },
};

/** Moldura de foto: revela com clip-path e a imagem assenta com um zoom suave (use dentro de <Stagger>). */
export function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div variants={clip} className={className}>
      <motion.div variants={zoomOut} className="absolute inset-0">
        {children}
      </motion.div>
    </motion.div>
  );
}

/** Linha que se desenha da esquerda para a direita ao entrar na tela (use dentro de <Stagger>). */
export function DrawLine({ className = "", delay = 0 }: { className?: string; delay?: number }) {
  return (
    <motion.span
      aria-hidden
      variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1, transition: { duration: 1.1, delay, ease: [0.76, 0, 0.24, 1] as const } } }}
      className={`block h-px origin-left ${className}`}
    />
  );
}
