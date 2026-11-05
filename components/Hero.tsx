"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HeartHandshake, ScanFace, Timer } from "lucide-react";
import { Section } from "./Section";
import { Button } from "./Button";
import { Ticker } from "./Ticker";
import { Item, Stagger } from "./Motion";
import { photos, whatsappUrl } from "@/lib/site";

const chips = [
  { icon: ScanFace, label: "Indicação precisa" },
  { icon: HeartHandshake, label: "Resultado natural" },
  { icon: Timer, label: "Consulta sem pressa" },
];

function SpinningBadge() {
  return (
    <motion.svg
      viewBox="0 0 120 120"
      aria-hidden
      className="h-[4.5rem] w-[4.5rem] md:h-28 md:w-28"
      animate={{ rotate: 360 }}
      transition={{ duration: 22, ease: "linear", repeat: Infinity }}
    >
      <circle cx="60" cy="60" r="60" className="fill-wine" />
      <defs>
        <path id="circ" d="M60,60 m-42,0 a42,42 0 1,1 84,0 a42,42 0 1,1 -84,0" />
      </defs>
      <text className="fill-white" fontSize="11" letterSpacing="3.2" style={{ textTransform: "uppercase" }}>
        <textPath href="#circ">Avaliação personalizada · sem pressa ·</textPath>
      </text>
      <path d="M60 48 l3 8 8 3 -8 3 -3 8 -3 -8 -8 -3 8 -3z" className="fill-[#E6CFA5]" />
    </motion.svg>
  );
}

export function Hero() {
  return (
    <Section id="inicio" theme="white" className="pb-9">
      <Stagger animate="visible" viewport={undefined} className="grid items-center gap-[2.5vh] md:grid-cols-12 md:gap-12">
        <div className="md:col-span-7">
          <Item>
            <p className="eyebrow mb-[1.5vh] inline-block rounded-full bg-olive px-4 py-2 !text-[0.6rem] text-white">
              Medicina estética natural
            </p>
          </Item>
          <Item>
            <h1 className="text-[clamp(2rem,min(10.8vw,8vh),5.4rem)] leading-[0.95] tracking-tighter whitespace-nowrap uppercase">
              <span className="block">Realçar</span>
              <span className="block">
                o que já é <span className="text-wine">seu</span>
              </span>
            </h1>
          </Item>
          <Item>
            <p className="mt-[2vh] max-w-md text-[0.95rem] leading-relaxed md:text-lg">
              A estética unida à naturalidade e ao propósito, para que você continue se reconhecendo no espelho.
            </p>
          </Item>
          <Item className="mt-[2.5vh] flex flex-wrap items-center gap-3">
            <Button href={whatsappUrl} variant="brown">
              Agendar Avaliação
            </Button>
            <div className="hidden sm:block">
              <Button href="#procedimentos" variant="ghost">
                Ver procedimentos
              </Button>
            </div>
          </Item>
          <Item>
            <ul className="mt-[2.5vh] flex flex-wrap gap-x-5 gap-y-2 text-[0.72rem] md:text-sm">
              {chips.map((c) => (
                <li key={c.label} className="flex items-center gap-2">
                  <c.icon size={15} strokeWidth={1.5} className="text-olive" /> {c.label}
                </li>
              ))}
            </ul>
          </Item>
        </div>

        <Item className="md:col-span-5">
          <div className="relative mx-auto w-full md:max-w-sm">
            <div aria-hidden className="absolute -right-3 -bottom-3 h-[85%] w-[85%] rounded-[2rem] bg-olive/15 md:-right-6 md:-bottom-6" />
            <div aria-hidden className="absolute top-1/3 -left-10 hidden h-24 w-24 rounded-full border border-wine/40 md:block" />
            <div className="relative h-[22vh] w-full overflow-hidden rounded-[2rem] md:h-[66vh] md:rounded-t-[999px] md:rounded-b-[2rem]">
              <motion.div
                className="absolute inset-0"
                initial={{ scale: 1.15 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
              >
                <Image
                  src={photos.mirror}
                  alt="Dra. Sandra Hretzko"
                  fill
                  priority
                  sizes="(min-width: 768px) 30vw, 90vw"
                  className="object-cover object-[58%_30%]"
                />
              </motion.div>
              <div className="absolute inset-x-5 bottom-5 hidden rounded-2xl bg-white/70 p-4 backdrop-blur-md md:block">
                <p className="fat-sm text-sm">Dra. Sandra Hretzko</p>
                <p className="text-xs">Medicina estética natural</p>
              </div>
            </div>
            <div className="absolute -top-3 -right-2 md:top-10 md:-left-12 md:right-auto">
              <SpinningBadge />
            </div>
          </div>
        </Item>
      </Stagger>
      <Ticker />
    </Section>
  );
}
