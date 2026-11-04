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
