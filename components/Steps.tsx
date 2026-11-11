"use client";

import { CalendarCheck, ClipboardList, Sparkles, Eye } from "lucide-react";
import { Section } from "./Section";
import { Button } from "./Button";
import { DrawLine, Item, ItemLi, Stagger } from "./Motion";
import { whatsappUrl } from "@/lib/site";

const steps = [
  { icon: CalendarCheck, title: "Agende", text: "Um toque no WhatsApp e escolhemos o melhor horário." },
  { icon: Eye, title: "Avaliação", text: "Consulta longa, atenção ao olhar e escuta da sua queixa." },
  { icon: ClipboardList, title: "Plano", text: "Só o que faz sentido para você, inclusive esperar." },
  { icon: Sparkles, title: "Resultado", text: "Você, descansada, e se reconhecendo no espelho." },
];

export function Steps() {
  return (
    <Section id="como-funciona" theme="olive">
      <Stagger>
        <Item>
          <p className="eyebrow mb-[1.5vh] text-[#E6CFA5]">Como funciona</p>
          <h2 className="text-[clamp(1.9rem,min(9vw,6.5vh),4.5rem)] leading-[0.95] tracking-tighter uppercase">
            Do primeiro contato <br className="hidden md:block" />
            ao <span className="shimmer shimmer-gold">espelho.</span>
          </h2>
        </Item>
        <ol className="mt-[4vh] grid gap-0 md:grid-cols-4 md:gap-8">
          {steps.map((s, i) => (
            <ItemLi key={s.title} className="group relative flex gap-4 border-t border-white/30 py-[1.4vh] transition-all duration-500 hover:border-[#E6CFA5] md:block md:pt-6 md:hover:-translate-y-2">
              <DrawLine className="absolute -top-px left-0 w-full bg-[#E6CFA5]" delay={i * 0.25} />
              <span className="fat block w-11 shrink-0 text-3xl text-[#E6CFA5] transition-all duration-500 group-hover:text-white md:w-auto md:text-5xl md:group-hover:translate-x-2">0{i + 1}</span>
              <div className="md:mt-4">
                <h3 className="flex items-center gap-3 text-lg tracking-tight uppercase md:text-xl">
                  <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#E6CFA5]/60 transition-all duration-500 group-hover:rotate-[360deg] group-hover:bg-[#E6CFA5]">
                    <span aria-hidden className="pulse-ring absolute inset-0 rounded-full text-[#E6CFA5]" />
                    <s.icon size={15} strokeWidth={1.5} className="text-[#E6CFA5] transition-colors duration-500 group-hover:text-olive" />
                  </span>
                  {s.title}
                </h3>
                <p className="mt-1 text-[0.82rem] leading-snug text-white/90 md:text-sm">{s.text}</p>
              </div>
            </ItemLi>
          ))}
        </ol>
        <Item className="mt-[3vh] hidden md:block">
          <Button href={whatsappUrl} variant="light">
            Começar agora
          </Button>
        </Item>
      </Stagger>
    </Section>
  );
}
