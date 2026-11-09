"use client";

import { Droplets, Layers, Spline } from "lucide-react";
import { Section } from "./Section";
import { Button } from "./Button";
import { Item, ItemLi, Stagger } from "./Motion";
import { waLink } from "@/lib/site";

// TODO: a Dra. deve revisar a descrição de cada etapa e a ordem do protocolo.
const stages = [
  {
    icon: Layers,
    tag: "Etapa 1",
    title: "Bioestimulador",
    text: "Estimula o colágeno da própria pele e devolve firmeza e elasticidade de forma gradual, sem mudar os seus traços.",
    note: "Resultado máximo em 3 a 6 meses",
  },
  {
    icon: Spline,
    tag: "Etapa 2",
    title: "Fios faciais",
    text: "Dão sustentação aos tecidos e valorizam o contorno do rosto, enquanto o colágeno se renova ao longo das semanas.",
    note: "Evolução do colágeno em 30 a 90 dias",
  },
  {
    icon: Droplets,
    tag: "Etapa 3",
    title: "Plasma",
    text: "Usa um componente do seu próprio sangue para renovar a qualidade e a luminosidade da pele, completando o protocolo.",
    note: "Planejado conforme a sua pele",
  },
];

/** Protocolo Sandra: bioestimulador, fios e plasma combinados em um plano individual. */
export function Protocol() {
  return (
    <Section id="protocolo" theme="brown">
      <Stagger>
        <Item className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
          <div>
            <p className="eyebrow mb-[1.5vh] text-[#E6CFA5]">Protocolo Sandra</p>
            <h2 className="text-[clamp(1.9rem,min(9vw,6.5vh),4.5rem)] leading-[0.95] tracking-tighter uppercase">
              Três técnicas, <span className="text-[#E6CFA5]">um só plano.</span>
            </h2>
          </div>
          <p className="hidden max-w-sm text-[0.9rem] leading-relaxed text-white/85 md:block md:text-base">
            Pensado para quem quer envelhecer bem: firmeza, sustentação e qualidade da pele trabalhadas juntas, em etapas planejadas para o seu rosto.
          </p>
        </Item>

        <ol className="relative mt-[2.5vh] grid gap-2 md:grid-cols-3 md:gap-6">
          {stages.map((s) => (
            <ItemLi
              key={s.title}
              className="group relative flex gap-4 rounded-2xl border border-white/15 bg-white/5 p-3 transition-all duration-500 hover:-translate-y-1.5 hover:border-[#E6CFA5]/60 hover:bg-white/10 md:block md:p-6"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E6CFA5] text-brown transition-transform duration-500 group-hover:rotate-[360deg] md:h-14 md:w-14">
                <s.icon size={22} strokeWidth={1.5} />
              </span>
              <div className="md:mt-4">
                <p className="eyebrow !text-[0.5rem] text-[#E6CFA5]">{s.tag}</p>
                <h3 className="mt-0.5 text-[1.15rem] leading-tight tracking-tight uppercase md:text-2xl">{s.title}</h3>
                <p className="mt-1 text-[0.76rem] leading-snug text-white/85 md:mt-3 md:text-sm md:leading-relaxed">{s.text}</p>
                <p className="eyebrow mt-2 hidden !text-[0.52rem] text-[#E6CFA5] md:mt-4 md:block">{s.note}</p>
              </div>
            </ItemLi>
          ))}
        </ol>

        <Item className="mt-[3vh] hidden md:block">
          <Button href={waLink("Olá, Dra. Sandra! Gostaria de saber mais sobre o Protocolo Sandra.")} variant="light">
            Conhecer o protocolo
          </Button>
        </Item>
      </Stagger>
    </Section>
  );
}
