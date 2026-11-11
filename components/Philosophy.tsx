"use client";

import { Section } from "./Section";
import { Item, ItemLi, Stagger } from "./Motion";
import { BeforeAfter } from "./BeforeAfter";
import { cases } from "@/lib/cases";

const principles = ["Anatomia antes da técnica", "Menos, e melhor indicado", "Você, apenas descansada"];

/** O medo do artificial: foco em quem quer envelhecer bem (público 40+). */
export function Philosophy() {
  return (
    <Section id="filosofia" theme="wine">
      <Stagger className="grid items-center gap-[3vh] md:grid-cols-12 md:gap-14">
        <div className="md:col-span-7">
          <Item>
            <p className="eyebrow mb-[2vh] text-[#E6CFA5]">Envelhecer bem</p>
            <h2 className="text-[clamp(2.2rem,min(11vw,8vh),6rem)] leading-[0.95] tracking-tighter uppercase">
              O medo do <span className="shimmer shimmer-gold">artificial.</span>
            </h2>
          </Item>
          <Item>
            <p className="mt-[2vh] text-[1.02rem] leading-snug md:text-[1.7rem] md:leading-snug">
              “Eu não quero ficar com cara de outra pessoa.” Depois dos 40, o receio quase nunca é envelhecer. É perder a{" "}
              <strong className="fat text-[#E6CFA5]">expressão</strong> que levou uma vida para construir.
            </p>
            <p className="mt-[1.5vh] text-[0.9rem] leading-snug text-white/90 md:text-[1.2rem]">
              Por isso o objetivo aqui nunca é <strong className="fat text-[#E6CFA5]">transformar</strong>. É devolver firmeza,
              sustentação e um aspecto <strong className="fat text-[#E6CFA5]">descansado</strong>, respeitando a anatomia e a
              identidade de cada paciente.
            </p>
          </Item>
          <ul className="mt-[3vh] hidden gap-2 sm:grid sm:grid-cols-3 sm:gap-5">
            {principles.map((p, i) => (
              <ItemLi key={p} className="group flex cursor-default items-baseline gap-3 border-t border-white/30 pt-3 transition-all duration-500 hover:border-[#E6CFA5] hover:pl-2">
                <span className="eyebrow !text-[0.6rem] text-[#E6CFA5]">0{i + 1}</span>
                <span className="fat-sm text-[0.95rem] md:text-base">{p}</span>
              </ItemLi>
            ))}
          </ul>
        </div>
        <Item className="md:col-span-5">
          <p className="eyebrow mb-1.5 !text-[0.55rem] text-[#E6CFA5]">Arraste para comparar</p>
          <BeforeAfter data={cases[0]} className="h-[21vh] w-full md:h-[56vh]" />
          <p className="mt-2 hidden text-[0.7rem] leading-snug text-white/70 md:block md:text-xs">
            {cases[0].patient} · {cases[0].procedure} · {cases[0].time}
          </p>
        </Item>
      </Stagger>
    </Section>
  );
}
