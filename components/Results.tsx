"use client";

import { animate, motion, useMotionValue, useMotionValueEvent, useTransform } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Section } from "./Section";
import { Button } from "./Button";
import { Item, Stagger } from "./Motion";
import { whatsappUrl } from "@/lib/site";

/**
 * Conteúdo baseado nas respostas da Dra. Sandra (checklist de 06/11/2026): prazos e frases dela.
 * TODO: quando houver fotos reais de antes e depois com termo de imagem assinado, adicionar cartões de foto.
 */
type Slide =
  | { kind: "stat"; tag: string; big: string; unit: string; label: string; text: string }
  | { kind: "quote"; text: string }
  | { kind: "cta" };

const slides: Slide[] = [
  { kind: "quote", text: "A harmonização facial bem feita não transforma, só melhora." },
  { kind: "stat", tag: "Botox", big: "3–5", unit: "dias", label: "primeiros efeitos", text: "O máximo vem entre 10 e 15 dias, com retorno no 15º dia para avaliar retoque." },
  { kind: "stat", tag: "Preenchimentos", big: "15–30", unit: "dias", label: "resultado mais próximo do definitivo", text: "Visível na hora, com inchaço nos primeiros dias." },
  { kind: "quote", text: "É possível uma harmonização natural e sutil, trabalhando em pontos estratégicos." },
  { kind: "stat", tag: "Fios faciais", big: "30–90", unit: "dias", label: "evolução do colágeno", text: "A sustentação aparece logo nos fios de tração; o colágeno amadurece com as semanas." },
  { kind: "stat", tag: "Bioestimuladores", big: "3–6", unit: "meses", label: "efeito máximo", text: "Sem resultado imediato: os primeiros sinais surgem entre 30 e 60 dias." },
  { kind: "quote", text: "Você pode fazer harmonização facial e ficar natural, melhorando só pontos específicos." },
  { kind: "cta" },
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
              {slides.map((s, i) => {
                const base = "group flex h-[36vh] w-[62vw] shrink-0 select-none flex-col justify-between rounded-2xl p-5 transition-transform duration-500 hover:-translate-y-1 md:h-[44vh] md:w-[19rem] md:p-7";
                if (s.kind === "stat")
                  return (
                    <div key={i} className={`${base} bg-white text-brown`}>
                      <span className="eyebrow w-fit rounded-full bg-wine/10 px-3 py-1.5 !text-[0.55rem] text-wine">{s.tag}</span>
                      <div>
                        <p className="fat flex items-baseline gap-2 leading-none whitespace-nowrap text-wine">
                          <span className="text-[2.9rem] tracking-tighter md:text-[3.6rem]">{s.big}</span>
                          <span className="text-lg md:text-2xl">{s.unit}</span>
                        </p>
                        <p className="eyebrow mt-2 !text-[0.58rem] text-olive">{s.label}</p>
                      </div>
                      <p className="text-[0.8rem] leading-snug md:text-sm">{s.text}</p>
                    </div>
                  );
                if (s.kind === "quote")
                  return (
                    <blockquote key={i} className={`${base} border border-[#E6CFA5]/50 bg-brown/40 text-white`}>
                      <Quote size={22} strokeWidth={1.5} className="text-[#E6CFA5]" />
                      <p className="fat-sm text-[1.05rem] leading-snug md:text-2xl">“{s.text}”</p>
                      <footer className="eyebrow !text-[0.58rem] text-[#E6CFA5]">Dra. Sandra Hretzko</footer>
                    </blockquote>
                  );
                return (
                  <div key={i} className={`${base} items-start justify-center gap-4 bg-[#E6CFA5] text-brown`}>
                    <p className="eyebrow !text-[0.6rem] text-wine">Seu caso</p>
                    <p className="fat-sm text-lg leading-snug md:text-2xl">Cada rosto tem o seu tempo. Na avaliação, você recebe uma estimativa para o seu caso.</p>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="fat-sm link-draw text-sm text-wine">
                      Agendar avaliação →
                    </a>
                  </div>
                );
              })}
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
                      aria-label={dir === -1 ? "Anterior" : "Próximo"}
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
            Resultados variam de pessoa para pessoa. Os prazos são médias; a estimativa para o seu caso é dada na avaliação.
          </p>
        </Item>
      </Stagger>
    </Section>
  );
}
