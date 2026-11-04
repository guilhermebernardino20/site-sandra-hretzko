"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import { Section } from "./Section";
import { Button } from "./Button";
import { Item, Stagger } from "./Motion";
import { waLink } from "@/lib/site";

/** TODO: a Dra. Sandra deve revisar e aprovar as respostas antes de publicar. */
const faqs = [
  {
    q: "Vou ficar com aspecto artificial?",
    a: "O objetivo é o oposto. Só indicamos o que respeita a sua anatomia e a sua expressão — e, quando o melhor é não fazer, nós dizemos.",
  },
  {
    q: "Como é a avaliação?",
    a: "Uma consulta sem pressa: ouvimos a sua queixa, analisamos o seu rosto com calma e montamos um plano individual. Avaliar não obriga a fazer nenhum procedimento.",
  },
  {
    q: "Quanto tempo dura o resultado?",
    a: "Varia com a pele, a região e a rotina. Em média, 12 a 18 meses nos fios e de 6 a 18 meses nos preenchimentos. Na avaliação você recebe uma estimativa para o seu caso.",
  },
  {
    q: "Como agendo?",
    a: "Pelo WhatsApp. Respondemos e combinamos o melhor horário para você.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section id="duvidas" theme="olive">
      <Stagger className="grid gap-[3vh] md:grid-cols-12 md:gap-14">
        <Item className="md:col-span-5">
          <p className="eyebrow mb-[1.5vh] text-[#E6CFA5]">Dúvidas frequentes</p>
          <h2 className="text-[clamp(1.9rem,min(9vw,6.5vh),4.5rem)] leading-[0.95] tracking-tighter uppercase">
            O que mais <span className="text-[#E6CFA5]">perguntam.</span>
          </h2>
          <div className="mt-[3vh] hidden md:block">
            <Button href={waLink("Olá, Dra. Sandra! Tenho uma dúvida antes de agendar.")} variant="light">
              Tirar uma dúvida
            </Button>
          </div>
        </Item>

        <Item className="md:col-span-7">
          <ul className="border-b border-white/30">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <li key={f.q} className="border-t border-white/30">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="fat-sm flex w-full items-center justify-between gap-4 py-[1.6vh] text-left text-[0.95rem] md:py-5 md:text-xl"
                  >
                    {f.q}
                    <motion.span animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.4 }} className="shrink-0 text-[#E6CFA5]">
                      <Plus size={20} strokeWidth={1.5} />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.45, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <p className="pb-[2vh] text-[0.85rem] leading-relaxed md:pb-5 md:text-base">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </Item>
      </Stagger>
    </Section>
  );
}
