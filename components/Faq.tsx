"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import { Section } from "./Section";
import { Button } from "./Button";
import { Item, Stagger } from "./Motion";
import { waLink } from "@/lib/site";

/** Baseado no checklist da Dra. Sandra (06/11/2026). TODO: ela deve revisar as respostas antes de publicar. */
const faqs = [
  {
    q: "Vou ficar com aspecto artificial?",
    a: "O objetivo é o oposto. Só indicamos o que respeita a sua anatomia e a sua expressão. E, quando o melhor é não fazer, nós dizemos.",
  },
  {
    q: "Como é a avaliação?",
    a: "Uma consulta sem pressa: ouvimos a sua queixa, analisamos o seu rosto com calma e montamos um plano individual. Avaliar não obriga a fazer nenhum procedimento.",
  },
  {
    q: "O procedimento dói?",
    a: "Costuma ser bem tolerado. Usamos pomada anestésica ou anestesia, conforme o procedimento, e você pode sentir pequenas picadas, pressão ou um leve desconforto.",
  },
  {
    q: "Quanto tempo dura o resultado?",
    a: "Varia com o organismo, a região e o produto. Em média: botox de 3 a 6 meses, preenchimentos de 8 a 24 meses e fios faciais de 12 a 24 meses. Na avaliação você recebe uma estimativa para o seu caso.",
  },
  {
    q: "Quando o resultado aparece?",
    a: "Nos preenchimentos, na hora, com inchaço nos primeiros dias; o resultado mais próximo do definitivo vem em 15 a 30 dias. No botox, os primeiros efeitos surgem em 3 a 5 dias e o máximo em 10 a 15. Bioestimuladores e fios agem de forma gradual.",
  },
  {
    q: "Como agendo?",
    a: "Pelo WhatsApp. Atendemos às terças e quintas, das 8h às 18h, em Pinhais, com estacionamento na frente. Pagamento particular, com parcelamento conforme o tratamento.",
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
            O que mais <span className="shimmer shimmer-gold">perguntam.</span>
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
                    className="fat-sm flex w-full items-center justify-between gap-4 py-[1.6vh] text-left transition-all duration-300 hover:pl-2 hover:text-[#E6CFA5] text-[0.95rem] md:py-5 md:text-xl"
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
