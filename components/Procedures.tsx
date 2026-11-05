"use client";

import Image from "next/image";
import { Clock, Hourglass, CircleSlash } from "lucide-react";
import { Section } from "./Section";
import { Button } from "./Button";
import { Item, ItemLi, Reveal, Stagger } from "./Motion";
import { img, images, waLink, whatsappUrl } from "@/lib/site";

const procedures = [
  {
    name: "Fios Faciais",
    image: images.fios,
    lead: "Sustentação suave que estimula o colágeno da própria pele.",
    action: "Efeito gradual, com melhora nas semanas seguintes.",
    duration: "Em média 12 a 18 meses.",
    avoid: "Sem indicação para mudar o formato do rosto ou em flacidez muito avançada.",
  },
  {
    name: "Preenchimentos",
    image: images.preench,
    lead: "Reposição pontual de volume onde ele se perdeu — nunca onde nunca existiu.",
    action: "Visível na avaliação, assentando em até 15 dias.",
    duration: "De 6 a 18 meses, conforme a região.",
    avoid: "Nada de excesso nem manutenção sem necessidade. Se o melhor é esperar, esperamos.",
  },
];

export function Procedures() {
  return (
    <Section id="procedimentos">
      <Stagger>
        <Item className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
          <div>
            <p className="eyebrow mb-[1.5vh] text-olive">Procedimentos de destaque</p>
            <h2 className="text-[clamp(1.9rem,min(9vw,6.5vh),4.5rem)] leading-[0.95] tracking-tighter uppercase">
              Indicação precisa, <span className="text-wine">sempre.</span>
            </h2>
          </div>
          <p className="hidden max-w-xs text-sm md:block">
            Prazos são médias; na avaliação você recebe uma estimativa honesta para o seu caso.
          </p>
        </Item>

        <ul className="mt-[3vh] grid gap-[2vh] md:grid-cols-2 md:gap-12">
          {procedures.map((p) => (
            <ItemLi key={p.name} className="grid grid-cols-[28%_1fr] gap-4 border-t border-wine/40 pt-[2vh] md:grid-cols-1 md:gap-0 md:pt-5">
              <Reveal className="relative h-full min-h-[18vh] overflow-hidden rounded-2xl md:h-[26vh] md:min-h-0">
                <Image src={img(p.image, 800)} alt={p.name} fill sizes="(min-width: 768px) 45vw, 30vw" className="object-cover" />
              </Reveal>
              <div className="md:mt-5">
                <h3 className="text-xl tracking-tighter uppercase md:text-3xl">{p.name}</h3>
                <p className="mt-1 hidden text-base md:block">{p.lead}</p>
                <dl className="mt-1.5 space-y-1.5 text-[0.8rem] leading-snug md:mt-4 md:space-y-3 md:text-sm">
                  {[
                    [Clock, "Ação", p.action],
                    [Hourglass, "Duração", p.duration],
                    [CircleSlash, "Não fazemos", p.avoid],
                  ].map(([Icon, k, v]) => {
                    const I = Icon as typeof Clock;
                    return (
                      <div key={k as string} className={`gap-2.5 ${k === "Não fazemos" ? "hidden md:flex" : "flex"}`}>
                        <I size={14} strokeWidth={1.5} className="mt-0.5 shrink-0 text-olive" />
                        <div>
                          <dt className="eyebrow fat-sm !text-[0.55rem] text-olive">{k as string}</dt>
                          <dd>{v as string}</dd>
                        </div>
                      </div>
                    );
                  })}
                </dl>
                <a
                  href={waLink(`Olá, Dra. Sandra! Gostaria de saber mais sobre ${p.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fat-sm mt-4 hidden items-center gap-2 text-sm text-wine underline underline-offset-4 md:inline-flex"
                >
                  Perguntar sobre {p.name.toLowerCase()} →
                </a>
              </div>
            </ItemLi>
          ))}
        </ul>

        <Item className="mt-[3vh]">
          <Button href={whatsappUrl} variant="wine">
            Quero uma avaliação
          </Button>
        </Item>
      </Stagger>
    </Section>
  );
}
