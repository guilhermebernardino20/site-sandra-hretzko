import Image from "next/image";
import { Clock, Hourglass, CircleSlash } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "./Reveal";
import { img, images } from "@/lib/site";

type Procedure = {
  index: string;
  title: string;
  lead: string;
  image: string;
  alt: string;
  facts: { icon: LucideIcon; label: string; value: string }[];
  avoid: string;
  className: string;
  imageClass: string;
};

const procedures: Procedure[] = [
  {
    index: "I",
    title: "Fios Faciais",
    lead: "Sustentação e reposicionamento suave dos tecidos, estimulando o colágeno da própria pele.",
    image: images.fios,
    alt: "Cuidado facial em consultório",
    facts: [
      { icon: Clock, label: "Ação", value: "Efeito de sustentação gradual, com melhora progressiva nas semanas seguintes" },
      { icon: Hourglass, label: "Duração", value: "Em média de 12 a 18 meses, conforme pele e rotina" },
    ],
    avoid: "Não indicamos para quem busca mudança de formato do rosto ou tem flacidez muito avançada — nesses casos, conversamos sobre outras opções.",
    className: "md:col-span-7",
    imageClass: "aspect-[4/3]",
  },
  {
    index: "II",
    title: "Preenchimentos",
    lead: "Reposição pontual de volume onde ele se perdeu — nunca para criar volume onde nunca existiu.",
    image: images.preench,
    alt: "Aplicação delicada em procedimento estético",
    facts: [
      { icon: Clock, label: "Ação", value: "Resultado visível já na avaliação, assentando em até 15 dias" },
      { icon: Hourglass, label: "Duração", value: "De 6 a 18 meses, variando muito com a região tratada" },
    ],
    avoid: "Não fazemos excesso, nem “sessões de manutenção” sem necessidade. Se a melhor indicação é esperar, nós esperamos.",
    className: "md:col-span-5 md:mt-32",
    imageClass: "aspect-[4/5]",
  },
];

export function Procedures() {
  return (
    <section id="procedimentos" className="bg-sand-deep px-5 py-28 md:px-10 md:py-44">
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="mb-16 grid grid-cols-12 gap-y-6 md:mb-28">
          <div className="col-span-12 md:col-span-6">
            <p className="eyebrow mb-6">Procedimentos de destaque</p>
            <h2 className="display-lg">
              Indicação precisa <br className="hidden md:block" />
              antes de <em className="text-terracotta">qualquer agulha.</em>
            </h2>
          </div>
          <p className="col-span-12 max-w-md text-coffee-soft md:col-span-4 md:col-start-9 md:self-end">
            Os prazos abaixo são médias — cada rosto responde de um jeito. Na avaliação, você recebe
            uma estimativa honesta para o seu caso.
          </p>
        </Reveal>

        <div className="grid grid-cols-12 gap-x-0 gap-y-20 md:gap-x-10">
          {procedures.map((p) => (
            <Reveal key={p.title} className={`col-span-12 min-w-0 ${p.className}`}>
              <article>
                <div className={`relative overflow-hidden rounded-[2rem] ${p.imageClass}`}>
                  <Image
                    src={img(p.image, 1200)}
                    alt={p.alt}
                    fill
                    sizes="(min-width: 768px) 55vw, 95vw"
                    className="object-cover transition-transform duration-[1500ms] ease-out hover:scale-105"
                  />
                </div>
                <div className="mt-8 flex items-baseline gap-5">
                  <span className="font-serif text-lg italic text-terracotta">{p.index}.</span>
                  <h3 className="display-md">{p.title}</h3>
                </div>
                <p className="mt-4 max-w-lg text-coffee-soft">{p.lead}</p>

                <dl className="mt-8 divide-y divide-coffee/10 border-y border-coffee/10">
                  {p.facts.map((f) => (
                    <div key={f.label} className="flex gap-5 py-4">
                      <f.icon size={18} strokeWidth={1.25} className="mt-1 shrink-0 text-olive" />
                      <div>
                        <dt className="eyebrow !text-olive">{f.label}</dt>
                        <dd className="mt-1 text-sm text-coffee">{f.value}</dd>
                      </div>
                    </div>
                  ))}
                  <div className="flex gap-5 py-4">
                    <CircleSlash size={18} strokeWidth={1.25} className="mt-1 shrink-0 text-terracotta" />
                    <div>
                      <dt className="eyebrow">O que não fazemos</dt>
                      <dd className="mt-1 text-sm text-coffee">{p.avoid}</dd>
                    </div>
                  </div>
                </dl>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
