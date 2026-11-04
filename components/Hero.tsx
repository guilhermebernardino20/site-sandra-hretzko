"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "./Button";
import { img, images, whatsappUrl } from "@/lib/site";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  return (
    <section ref={ref} id="top" className="relative overflow-hidden pt-24 md:pt-0">
      <div className="mx-auto grid min-h-[100svh] max-w-[1400px] grid-cols-12 items-center gap-y-10 px-5 pb-16 md:px-10 md:pb-0">
        <div className="relative z-10 col-span-12 md:col-span-7 md:pr-6">
          <motion.p
            className="eyebrow mb-6 md:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Medicina estética · Dra. Sandra Hretzko
          </motion.p>
          <motion.h1
            className="display-xl md:-mr-24 md:max-w-[9ch] lg:-mr-40"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          >
            Realçar o que <em className="text-terracotta">já é seu.</em>
          </motion.h1>
          <motion.p
            className="mt-8 max-w-md text-base leading-relaxed text-coffee-soft md:mt-10 md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            A estética unida à naturalidade e ao propósito, para que você continue se reconhecendo
            no espelho.
          </motion.p>
          <motion.div
            className="mt-10 flex flex-wrap items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.45 }}
          >
            <Button href={whatsappUrl}>Agendar Avaliação</Button>
            <a href="#filosofia" className="text-xs uppercase tracking-[0.22em] text-coffee-soft hover:text-terracotta">
              Conheça a filosofia
            </a>
          </motion.div>
        </div>

        <motion.div
          className="relative col-span-12 md:col-span-5 md:self-stretch md:py-24"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-t-[999px] md:aspect-auto md:h-full">
            <motion.div style={{ y }} className="absolute inset-[-8%]">
              <Image
                src={img(images.hero, 1400)}
                alt="Ambiente claro e acolhedor com tons terrosos"
                fill
                priority
                sizes="(min-width: 768px) 40vw, 90vw"
                className="object-cover"
              />
            </motion.div>
          </div>
          <div className="absolute -bottom-4 left-4 rounded-full bg-sand/90 px-5 py-3 text-[0.65rem] uppercase tracking-[0.25em] text-coffee backdrop-blur md:-left-10 md:bottom-32">
            Naturalidade · Propósito · Fé
          </div>
        </motion.div>
      </div>
    </section>
  );
}
