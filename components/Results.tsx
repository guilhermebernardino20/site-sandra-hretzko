"use client";

import Image from "next/image";
import { animate, motion, useMotionValue, useMotionValueEvent, useTransform } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Section } from "./Section";
import { Button } from "./Button";
import { Item, Stagger } from "./Motion";
import { img, images, whatsappUrl } from "@/lib/site";

/**
 * TROCAR antes de publicar: fotos reais de antes/depois (com autorização escrita da paciente)
 * e depoimentos reais. Imagens são de banco e os textos, de exemplo.
 */
type Slide =
  | { kind: "photo"; src: string; tag: string; label: string }
  | { kind: "quote"; text: string; who: string };

const slides: Slide[] = [
  { kind: "photo", src: images.philosophy, tag: "Fios faciais", label: "M., 52 · após 60 dias" },
  { kind: "quote", text: "Ninguém soube dizer o que eu tinha feito. Só me acharam descansada.", who: "Paciente, 54" },
  { kind: "photo", src: images.r2, tag: "Preenchimento", label: "L., 47 · após 30 dias" },
  { kind: "quote", text: "Eu me reconheço no espelho. É exatamente o que eu pedi.", who: "Paciente, 61" },
  { kind: "photo", src: images.r3, tag: "Fios + bioestimulador", label: "R., 58 · após 90 dias" },
  { kind: "quote", text: "Foi a primeira vez que me ouviram antes de me tratar.", who: "Paciente, 49" },
];

export function Results() {
  const wrap = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [limit, setLimit] = useState(0);
  const x = useMotionValue(0);
  const progress = useTransform(x, [0, -limit || -1], ["0%", "100%"]);

  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const updateEnds = (v: number) => {
    setAtStart(v >= -2);
    setAtEnd(v <= -limit + 2);
  };
  useMotionValueEvent(x, "change", updateEnds);
  useEffect(() => updateEnds(x.get()), [limit]); // eslint-disable-line react-hooks/exhaustive-deps

  /** Avança ou volta um slide (largura do cartão + espaçamento). */
  const go = (dir: 1 | -1) => {
    const t = track.current;
    const first = t?.children[0] as HTMLElement | undefined;
    if (!t || !first) return;
    const gap = parseFloat(getComputedStyle(t).columnGap) || 16;
    const target = Math.min(0, Math.max(-limit, x.get() - dir * (first.offsetWidth + gap)));
    animate(x, target, { duration: 0.6, ease: [0.76, 0, 0.24, 1] });
  };

  useEffect(() => {
    const measure = () => {
      if (wrap.current && track.current) setLimit(Math.max(0, track.current.scrollWidth - wrap.current.offsetWidth));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  return (
    <Section id="resultados" theme="wine">
      <Stagger>
        <Item className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
          <div>
            <p className="eyebrow mb-[1.5vh] text-[#E6CFA5]">Resultados naturais</p>
            <h2 className="text-[clamp(1.9rem,min(9vw,6.5vh),4.5rem)] leading-[0.95] tracking-tighter uppercase">
              Resultados que <span className="text-[#E6CFA5]">ninguém percebe.</span>
            </h2>
          </div>
          <p className="max-w-xs text-[0.85rem] leading-snug text-white/85 md:text-base">
            Quem vê, nota você — não o procedimento.
          </p>
        </Item>

        <Item>
          <div ref={wrap} className="mt-[3.5vh] overflow-hidden">
            <motion.div
              ref={track}
              drag="x"
              dragConstraints={{ left: -limit, right: 0 }}
              dragElastic={0.1}
              style={{ x }}
              className="flex w-max cursor-grab items-stretch gap-4 active:cursor-grabbing md:gap-6"
            >
              {slides.map((s, i) =>
                s.kind === "photo" ? (
                  <figure key={i} className="w-[54vw] shrink-0 select-none md:w-[20rem]">
                    <div className="relative h-[30vh] overflow-hidden rounded-2xl md:h-[44vh]">
                      <Image
                        src={img(s.src, 800)}
                        alt={`${s.tag} — ${s.label}`}
                        fill
                        sizes="(min-width: 768px) 20rem, 54vw"
                        draggable={false}
                        className="pointer-events-none object-cover"
                      />
                      <span className="eyebrow absolute top-3 left-3 rounded-full bg-white/80 px-3 py-1.5 !text-[0.55rem] text-brown backdrop-blur">
                        {s.tag}
                      </span>
                    </div>
                    <figcaption className="mt-2 text-[0.7rem] text-white/80 md:text-xs">{s.label}</figcaption>
                  </figure>
                ) : (
                  <blockquote
                    key={i}
                    className="flex w-[60vw] shrink-0 select-none flex-col justify-between rounded-2xl bg-white p-5 text-brown md:w-[20rem] md:p-8"
                  >
                    <Quote size={20} strokeWidth={1.5} className="text-wine" />
                    <p className="fat-sm text-base leading-snug md:text-2xl">“{s.text}”</p>
                    <footer className="eyebrow !text-[0.58rem] text-olive">{s.who}</footer>
                  </blockquote>
                ),
              )}
            </motion.div>
          </div>

          <div className="mt-[2vh] flex items-center justify-between gap-4">
            <div className="flex flex-1 items-center justify-between gap-4 md:flex-none md:justify-start md:gap-8">
              <div className="flex items-center gap-4">
                <span className="eyebrow !text-[0.58rem] text-[#E6CFA5]">Arraste</span>
                <span className="relative block h-px w-20 bg-white/25 md:w-28">
                  <motion.span style={{ width: progress }} className="absolute inset-y-0 left-0 bg-[#E6CFA5]" />
                </span>
              </div>
              <div className="flex items-center gap-2">
                {([-1, 1] as const).map((dir) => {
                  const disabled = dir === -1 ? atStart : atEnd;
                  const Icon = dir === -1 ? ChevronLeft : ChevronRight;
                  return (
                    <button
                      key={dir}
                      type="button"
                      onClick={() => go(dir)}
                      disabled={disabled}
                      aria-label={dir === -1 ? "Resultado anterior" : "Próximo resultado"}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 text-white transition-all duration-300 hover:bg-white hover:text-wine disabled:pointer-events-none disabled:opacity-30"
                    >
                      <Icon size={18} strokeWidth={1.5} />
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="hidden md:block">
              <Button href={whatsappUrl} variant="light">
                Quero um resultado natural
              </Button>
            </div>
          </div>
          <p className="mt-[1.5vh] text-[0.65rem] text-white/60">
            Resultados variam de pessoa para pessoa. Imagens publicadas com autorização das pacientes.
          </p>
        </Item>
      </Stagger>
    </Section>
  );
}
