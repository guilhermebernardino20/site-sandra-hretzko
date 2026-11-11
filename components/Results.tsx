"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Section } from "./Section";
import { Button } from "./Button";
import { BeforeAfter } from "./BeforeAfter";
import { Item, Stagger } from "./Motion";
import { cases } from "@/lib/cases";
import { whatsappUrl } from "@/lib/site";

/** Resultados naturais: antes e depois com o depoimento de cada paciente (ver lib/cases.ts). */
export function Results() {
  const [i, setI] = useState(0);
  const c = cases[i];
  const strip = useRef<HTMLDivElement>(null);
  const go = (d: 1 | -1) => setI((v) => (v + d + cases.length) % cases.length);
  // mantém o botão do caso ativo visível na fileira
  useEffect(() => {
    // rola só a fileira (scrollIntoView arrastaria a página inteira até esta seção)
    const box = strip.current;
    const el = box?.children[i] as HTMLElement | undefined;
    if (box && el) box.scrollTo({ left: el.offsetLeft - (box.clientWidth - el.offsetWidth) / 2, behavior: "smooth" });
  }, [i]);

  return (
    <Section id="resultados" theme="wine">
      <Stagger>
        <Item className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
          <div>
            <p className="eyebrow mb-[1.5vh] text-[#E6CFA5]">Resultados naturais</p>
            <h2 className="text-[clamp(1.9rem,min(9vw,6.5vh),4.5rem)] leading-[0.95] tracking-tighter uppercase">
              Resultados que <span className="shimmer shimmer-gold">ninguém percebe.</span>
            </h2>
          </div>
          <p className="max-w-xs text-[0.85rem] leading-snug text-white/85 md:text-base">Quem vê, nota você, não o procedimento.</p>
        </Item>

        <Item className="mt-[3vh] grid items-center gap-[2vh] md:grid-cols-12 md:gap-12">
          <div className="md:col-span-6">
            <BeforeAfter key={c.id} data={c} className="h-[18vh] w-full md:h-[54vh]" />
          </div>

          <div className="md:col-span-6">
            <AnimatePresence mode="wait">
              <motion.figure
                key={c.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
              >
                <Quote size={26} strokeWidth={1.5} className="text-[#E6CFA5]" />
                <blockquote className="fat-sm mt-2 text-[1.1rem] leading-snug md:mt-4 md:text-[1.8rem]">“{c.quote}”</blockquote>
                <figcaption className="mt-3 md:mt-5">
                  <p className="eyebrow !text-[0.62rem] text-[#E6CFA5]">{c.patient}</p>
                  <p className="mt-1 text-[0.8rem] text-white/80 md:text-sm">
                    {c.procedure} · {c.time}
                  </p>
                </figcaption>
              </motion.figure>
            </AnimatePresence>

            <div className="mt-[2.5vh] flex items-center gap-2">
              <button type="button" onClick={() => go(-1)} aria-label="Caso anterior" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/40 transition-colors hover:bg-white hover:text-wine">
                <ChevronLeft size={18} strokeWidth={1.5} />
              </button>
              <div role="tablist" aria-label="Casos" ref={strip} className="relative flex min-w-0 flex-1 gap-2 overflow-x-auto scroll-smooth py-1 [&::-webkit-scrollbar]:hidden">
                {cases.map((x, k) => (
                  <button
                    key={x.id}
                    type="button"
                    role="tab"
                    aria-selected={k === i}
                    aria-label={`Caso ${k + 1}`}
                    onClick={() => setI(k)}
                    className={`fat-sm h-10 w-10 shrink-0 rounded-full border text-[0.8rem] transition-all duration-300 ${
                      k === i ? "border-[#E6CFA5] bg-[#E6CFA5] text-brown" : "border-white/40 text-white hover:border-white hover:bg-white/10"
                    }`}
                  >
                    {String(k + 1).padStart(2, "0")}
                  </button>
                ))}
              </div>
              <button type="button" onClick={() => go(1)} aria-label="Próximo caso" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/40 transition-colors hover:bg-white hover:text-wine">
                <ChevronRight size={18} strokeWidth={1.5} />
              </button>
              <span className="eyebrow hidden shrink-0 !text-[0.6rem] text-[#E6CFA5] sm:block">
                {String(i + 1).padStart(2, "0")} / {String(cases.length).padStart(2, "0")}
              </span>
            </div>
            <div className="mt-[2vh] hidden md:block">
              <Button href={whatsappUrl} variant="light">
                Quero um resultado natural
              </Button>
            </div>
            <p className="mt-[1.5vh] text-[0.65rem] leading-snug text-white/60">
              Resultados variam de pessoa para pessoa. Imagens e depoimentos publicados com autorização das pacientes.
            </p>
          </div>
        </Item>
      </Stagger>
    </Section>
  );
}
