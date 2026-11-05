"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform, type MotionValue } from "framer-motion";
import { useEffect, type ReactNode } from "react";
import { HeartHandshake, ScanFace, Timer } from "lucide-react";
import { Section } from "./Section";
import { Button } from "./Button";
import { Ticker } from "./Ticker";
import { Item, MaskLine, Reveal, Stagger } from "./Motion";
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

/** Camada que desloca com o mouse (depth > 0 vem para frente, < 0 vai para trás). */
function Layer({ sx, sy, depth, className = "", children }: { sx: MotionValue<number>; sy: MotionValue<number>; depth: number; className?: string; children?: ReactNode }) {
  const x = useTransform(sx, (v) => v * depth);
  const y = useTransform(sy, (v) => v * depth);
  return (
    <motion.div style={{ x, y }} className={className}>
      {children}
    </motion.div>
  );
}

export function Hero() {
  // posição do mouse na tela, de -0.5 a 0.5 (só com mouse)
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 80, damping: 16, mass: 0.7 });
  const sy = useSpring(my, { stiffness: 80, damping: 16, mass: 0.7 });
  const ry = useTransform(sx, (v) => v * 22);
  const rx = useTransform(sy, (v) => v * -16);
  const glareX = useTransform(sx, (v) => `${v * 160}%`);
  const titleX = useTransform(sx, (v) => v * -14);
  const titleY = useTransform(sy, (v) => v * -8);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const move = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      mx.set(e.clientX / window.innerWidth - 0.5);
      my.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, [mx, my]);

  return (
    <Section id="inicio" theme="white" footer={<Ticker />}>
      <Stagger animate="visible" viewport={undefined} className="grid items-center gap-[2.5vh] md:grid-cols-12 md:gap-12">
        <div className="md:col-span-7">
          <Item>
            <p className="eyebrow mb-[1.5vh] inline-block rounded-full bg-olive px-4 py-2 !text-[0.6rem] text-white">
              Medicina estética natural
            </p>
          </Item>
          <motion.h1 style={{ x: titleX, y: titleY }} className="text-[clamp(2rem,min(10.8vw,8vh),5.4rem)] leading-[0.95] tracking-tighter whitespace-nowrap uppercase">
            <MaskLine>Realçar</MaskLine>
            <MaskLine>
              o que já é <span className="text-wine">seu</span>
            </MaskLine>
          </motion.h1>
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
                <li key={c.label} className="group/chip flex cursor-default items-center gap-2 transition-transform duration-300 hover:-translate-y-0.5">
                  <c.icon size={15} strokeWidth={1.5} className="text-olive transition-transform duration-500 group-hover/chip:scale-125 group-hover/chip:rotate-12" /> {c.label}
                </li>
              ))}
            </ul>
          </Item>
        </div>

        <Item className="md:col-span-5">
          <div className="relative mx-auto w-full md:max-w-sm" style={{ perspective: 1200 }}>
            {/* Camadas com profundidade: cada uma se move numa velocidade diferente */}
            <Layer sx={sx} sy={sy} depth={-26} className="absolute -right-3 -bottom-3 h-[85%] w-[85%] rounded-[2rem] bg-olive/15 md:-right-6 md:-bottom-6" />
            <Layer sx={sx} sy={sy} depth={34} className="absolute top-1/3 -left-10 hidden md:block">
              <div className="animate-float h-24 w-24 rounded-full border border-wine/40" />
            </Layer>

            <motion.div style={{ rotateY: ry, rotateX: rx, transformPerspective: 1200 }} className="relative">
              {/* sombra projetada que acompanha a inclinação */}
              <div aria-hidden className="absolute inset-x-6 -bottom-6 hidden h-10 rounded-full bg-brown/35 blur-2xl md:block" />
              <div className="relative h-[22vh] w-full overflow-hidden rounded-[2rem] shadow-[0_30px_60px_-25px_rgba(54,17,28,0.55)] md:h-[66vh] md:rounded-t-[999px] md:rounded-b-[2rem]">
                <Reveal className="absolute inset-0">
                  <Image
                    src={photos.mirror}
                    alt="Dra. Sandra Hretzko"
                    fill
                    priority
                    sizes="(min-width: 768px) 30vw, 90vw"
                    className="object-cover object-[58%_30%]"
                  />
                </Reveal>
                <Layer sx={sx} sy={sy} depth={-14} className="absolute inset-x-5 bottom-5 hidden md:block">
                  <div className="rounded-2xl bg-white/70 p-4 backdrop-blur-md">
                    <p className="fat-sm text-sm">Dra. Sandra Hretzko</p>
                    <p className="text-xs">Medicina estética natural</p>
                  </div>
                </Layer>
                {/* reflexo de luz que desliza conforme o mouse */}
                <motion.div aria-hidden style={{ x: glareX }} className="pointer-events-none absolute inset-y-0 -left-1/2 hidden w-full bg-gradient-to-r from-transparent via-white/20 to-transparent md:block" />
              </div>
            </motion.div>

            <Layer sx={sx} sy={sy} depth={64} className="absolute -top-3 -right-2 md:top-10 md:-left-12 md:right-auto">
              <div className="animate-float-slow">
                <SpinningBadge />
              </div>
            </Layer>
          </div>
        </Item>
      </Stagger>
    </Section>
  );
}
