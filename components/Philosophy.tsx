"use client";

import Image from "next/image";
import { Section } from "./Section";
import { Item, ItemLi, Stagger } from "./Motion";
import { img, images } from "@/lib/site";

const principles = ["Anatomia antes da técnica", "Menos, e melhor indicado", "Você, apenas descansada"];

export function Philosophy() {
  return (
    <Section id="filosofia" theme="wine">
      <Stagger className="grid items-center gap-[3vh] md:grid-cols-12 md:gap-14">
        <div className="md:col-span-7">
          <Item>
            <p className="eyebrow mb-[2vh] text-[#E6CFA5]">A filosofia</p>
            <h2 className="text-[clamp(2.2rem,min(11vw,8vh),6rem)] leading-[0.95] tracking-tighter uppercase">
              O medo do <span className="text-[#E6CFA5]">artificial.</span>
            </h2>
          </Item>
          <Item>
            <p className="mt-[3vh] text-[1.02rem] leading-relaxed md:text-2xl">
              “Eu não quero ficar com cara de outra pessoa.” O receio não é envelhecer — é perder a própria{" "}
              <strong className="fat text-[#E6CFA5]">expressão</strong>.
            </p>
            <p className="mt-[2vh] text-[0.92rem] leading-relaxed text-white/85 md:text-lg">
              Aqui o objetivo nunca é <strong className="fat text-[#E6CFA5]">transformar</strong>. É devolver o
              aspecto <strong className="fat text-[#E6CFA5]">descansado</strong>, respeitando a anatomia, a
              identidade e a fé de cada paciente.
            </p>
          </Item>
          <ul className="mt-[3vh] grid gap-2 sm:grid-cols-3 sm:gap-5">
            {principles.map((p, i) => (
              <ItemLi key={p} className="flex items-baseline gap-3 border-t border-white/30 pt-3">
                <span className="eyebrow !text-[0.6rem] text-[#E6CFA5]">0{i + 1}</span>
                <span className="fat-sm text-sm">{p}</span>
              </ItemLi>
            ))}
          </ul>
        </div>
        <Item className="hidden md:col-span-5 md:block">
          <div className="relative h-[62vh] overflow-hidden rounded-[2rem]">
            <Image
              src={img(images.philosophy, 1000)}
              alt="Retrato de mulher com pele natural"
              fill
              sizes="35vw"
              className="object-cover"
            />
          </div>
        </Item>
      </Stagger>
    </Section>
  );
}
