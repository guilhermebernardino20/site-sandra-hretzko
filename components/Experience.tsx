"use client";

import Image from "next/image";
import { Eye, Home, Hourglass } from "lucide-react";
import { Section } from "./Section";
import { Item, ItemLi, Reveal, Stagger } from "./Motion";
import { photos } from "@/lib/site";

const pillars = [
  { icon: Hourglass, title: "Tempo de consulta", text: "Sem relógio na parede: ouvimos a sua história antes de olhar o seu rosto." },
  { icon: Eye, title: "O detalhe do olhar", text: "Assimetrias, expressões e proporções, observadas com calma — onde mora a naturalidade." },
  { icon: Home, title: "Receber em casa", text: "Ambiente acolhedor e seguro, para você chegar tranquila e sair ainda mais você." },
];

export function Experience() {
  return (
    <Section id="experiencia" theme="white">
      <Stagger className="grid items-center gap-[3vh] md:grid-cols-12 md:gap-16">
        <Item className="md:col-span-6">
          <div className="relative mx-auto w-full md:max-w-lg">
            <div aria-hidden className="absolute -top-3 -left-3 h-[80%] w-[80%] rounded-[2rem] bg-olive/15 md:-top-6 md:-left-6" />
            <Reveal className="relative h-[20vh] w-[78%] overflow-hidden rounded-[2rem] md:h-[56vh]">
              <Image
                src={photos.desk}
                alt="Mesa do consultório com o mapa de anatomia facial"
                fill
                sizes="(min-width: 768px) 35vw, 70vw"
                className="object-cover object-[100%_66%]"
              />
            </Reveal>
            <div className="absolute right-0 bottom-0 h-[13vh] w-[40%] overflow-hidden rounded-2xl border-4 border-white md:-bottom-8 md:h-[26vh] md:w-[44%] md:border-8">
              <Image
                src={photos.desk}
                alt="Detalhe do atendimento no consultório"
                fill
                sizes="(min-width: 768px) 18vw, 40vw"
                className="object-cover object-[100%_62%] [transform:scale(2.7)_translate(-27%,-4%)]"
              />
            </div>
          </div>
        </Item>

        <div className="md:col-span-6">
          <Item>
            <p className="eyebrow mb-[1.5vh] text-olive">A experiência</p>
            <h2 className="text-[clamp(1.9rem,min(9vw,6.5vh),4.5rem)] leading-[0.95] tracking-tighter uppercase">
              Como ser recebida <span className="text-olive">em casa.</span>
            </h2>
          </Item>
          <ul className="mt-[2.5vh] border-t border-wine/30">
            {pillars.map((p) => (
              <ItemLi key={p.title} className="group flex gap-4 border-b border-wine/30 py-[1.5vh] transition-all duration-500 hover:border-olive hover:pl-2 md:py-5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-olive text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-[360deg] group-hover:bg-wine">
                  <p.icon size={16} strokeWidth={1.5} />
                </span>
                <div>
                  <h3 className="text-base tracking-tight uppercase md:text-xl">{p.title}</h3>
                  <p className="mt-0.5 text-[0.78rem] leading-snug md:mt-1 md:text-base">{p.text}</p>
                </div>
              </ItemLi>
            ))}
          </ul>
        </div>
      </Stagger>
    </Section>
  );
}
