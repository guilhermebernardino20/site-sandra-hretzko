"use client";

import { Check, Clock, Hourglass, UserRound } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Section } from "./Section";
import { Button } from "./Button";
import { Item, Stagger } from "./Motion";
import { waLink, whatsappUrl } from "@/lib/site";

// Conteúdo: checklist respondido pela Dra. Sandra em 06/11/2026.
// TODO: revisar com a Dra. e conferir as regras de publicidade do CFO antes de publicar.
const procedures = [
  {
    name: "Fios faciais",
    photo: ["/procedimentos/fios-faciais.jpg", "50% 28%"] as const,
    full: "Fios faciais",
    lead: "Sustentação e estímulo do colágeno da própria pele.",
    who: "Quem tem flacidez leve a moderada. A indicação depende da avaliação facial e do tipo de fio.",
    duration: "De 12 a 24 meses, conforme o tipo de fio.",
    result: "A sustentação aparece logo nos fios de tração; o colágeno evolui entre 30 e 90 dias.",
    gives: ["Melhor sustentação dos tecidos", "Pele mais firme", "Contorno facial valorizado"],
  },
  {
    name: "Botox",
    photo: ["/procedimentos/botox.jpg", "50% 40%"] as const,
    full: "Botox (toxina botulínica)",
    lead: "Suaviza linhas de expressão e previne que elas se aprofundem.",
    who: "Quem quer suavizar rugas e linhas de expressão (testa, entre as sobrancelhas, pés de galinha) ou preveni-las.",
    duration: "De 3 a 6 meses.",
    result: "Primeiros efeitos em 3 a 5 dias, máximo em 10 a 15 dias. Retorno no 15º dia para avaliar retoque.",
    gives: ["Linhas de expressão suavizadas", "Aparência descansada e natural", "Marcas que não se aprofundam"],
  },
  {
    name: "Preenchimento labial",
    photo: ["/procedimentos/preenchimento-labial.jpg", "50% 62%"] as const,
    full: "Preenchimento labial",
    lead: "Volume e contorno na medida certa, respeitando o seu sorriso.",
    who: "Quem deseja melhorar formato, volume ou definição, recuperar volume perdido ou corrigir pequenas assimetrias.",
    duration: "De 8 a 12 meses.",
    result: "Visível na hora, com inchaço nos primeiros dias. Resultado mais próximo do definitivo em 15 a 30 dias.",
    gives: ["Mais definição e contorno", "Proporção e simetria", "Hidratação e valorização do sorriso"],
  },
  {
    name: "Olheira",
    photo: ["/procedimentos/olheira.jpg", "50% 25%"] as const,
    full: "Preenchimento de olheira",
    lead: "Suaviza a sombra abaixo dos olhos para um olhar mais descansado.",
    who: "Quem tem depressão no sulco lacrimal que dá aspecto cansado. Nem toda olheira se trata com preenchimento: a indicação é na avaliação.",
    duration: "De 9 a 18 meses.",
    result: "Recuperação rápida. Pode ficar um roxinho, que sai em até 15 dias.",
    gives: ["Menos sombra sob os olhos", "Transição suave com a bochecha", "Olhar leve e rejuvenescido"],
  },
  {
    name: "Mandíbula",
    photo: ["/procedimentos/mandibula.jpg", "50% 62%"] as const,
    full: "Preenchimento de mandíbula",
    lead: "Mais definição para o contorno do rosto e a transição para o pescoço.",
    who: "Quem busca definir a linha da mandíbula, melhorar a proporção do rosto ou recuperar contornos perdidos com a idade.",
    duration: "De 12 a 18 meses.",
    result: "Visível na hora, com inchaço nos primeiros dias. Avaliação final em 15 a 30 dias.",
    gives: ["Contorno mais definido", "Proporção facial harmoniosa", "Aspecto estruturado e elegante"],
  },
  {
    name: "Full Face",
    photo: ["/procedimentos/full-face.jpg", "50% 35%"] as const,
    full: "Preenchimento Full Face",
    lead: "Harmonização do rosto como um todo, com volumes recuperados em pontos estratégicos.",
    who: "Quem quer equilibrar proporções, recuperar volume e sustentação. O planejamento é individual para cada rosto.",
    duration: "De 12 a 24 meses, conforme a região e o produto.",
    result: "Visível na hora, com inchaço nos primeiros dias. Mais próximo do definitivo entre 15 e 30 dias.",
    gives: ["Volumes perdidos recuperados", "Melhor sustentação e contornos", "Aparência descansada e natural"],
  },
  {
    name: "Bioestimuladores",
    photo: ["/procedimentos/bioestimuladores.jpg", "50% 30%"] as const,
    full: "Bioestimuladores de colágeno",
    lead: "Firmeza que vem de dentro, de forma gradual e natural.",
    who: "Quem tem flacidez, perda de firmeza ou de qualidade da pele, ou quer prevenir os sinais do envelhecimento. Inclui o do próprio sangue.",
    duration: "De 18 a 24 meses.",
    result: "Sem efeito imediato: primeiros resultados entre 30 e 60 dias, máximo entre 3 e 6 meses.",
    gives: ["Mais firmeza e elasticidade", "Textura e qualidade da pele", "Sem alterar os seus traços"],
  },
  {
    name: "Microagulhamento",
    photo: ["/procedimentos/microagulhamento.jpg", "40% 45%"] as const,
    full: "Microagulhamento com ativos",
    lead: "Renovação da pele com ativos escolhidos para cada necessidade.",
    who: "Quem quer tratar manchas, poros dilatados, cicatrizes de acne, linhas finas ou textura irregular.",
    duration: "Progressiva, com manutenção conforme o protocolo.",
    result: "A evolução costuma aparecer entre 30 e 90 dias.",
    gives: ["Pele mais uniforme e luminosa", "Cicatrizes e linhas suavizadas", "Poros menos evidentes"],
  },
  {
    name: "Peelings",
    photo: ["/procedimentos/peelings.jpg", "50% 35%"] as const,
    full: "Peelings químicos",
    lead: "Renovação celular para uma pele mais uniforme e saudável.",
    who: "Quem quer tratar manchas, acne e marcas, poros dilatados, linhas finas ou textura. O tipo de peeling depende da avaliação.",
    duration: "Varia pelo tipo; mantida com skincare e fotoproteção.",
    result: "Progressivo, com possível descamação. Pode exigir mais de uma sessão.",
    gives: ["Manchas e acne tratadas", "Textura mais uniforme", "Mais luminosidade e viço"],
  },
];

export function Procedures() {
  const [i, setI] = useState(0);
  
  return (
    <Section id="procedimentos">
      <Stagger>
        <Item className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
          <div>
            <p className="eyebrow mb-[1.5vh] text-olive">Procedimentos</p>
            <h2 className="text-[clamp(1.9rem,min(9vw,6.5vh),4.5rem)] leading-[0.95] tracking-tighter uppercase">
              Indicação precisa, <span className="shimmer shimmer-wine">sempre.</span>
            </h2>
          </div>
          <p className="hidden max-w-xs text-sm md:block">
            Prazos são médias; na avaliação você recebe uma estimativa honesta para o seu caso.
          </p>
        </Item>

        <Item className="mt-[2vh] grid grid-cols-[minmax(0,1fr)] gap-[1.5vh] md:grid-cols-12 md:gap-10">
          {/* Lista (desktop) / abas rolantes (celular) */}
          <div className="min-w-0 md:col-span-4">
            <div role="tablist" aria-label="Procedimentos" className="-mx-6 flex snap-x gap-2 overflow-x-auto px-6 pb-1 md:mx-0 md:flex-col md:gap-0 md:overflow-visible md:px-0 md:pb-0 [&::-webkit-scrollbar]:hidden">
              {procedures.map((x, k) => {
                const on = k === i;
                return (
                  <button
                    key={x.name}
                    type="button"
                    role="tab"
                    aria-selected={on}
                    onClick={() => setI(k)}
                    className={`group group relative flex h-9 w-[10.75rem] shrink-0 snap-start items-center justify-center gap-2 rounded-full border px-3 text-left whitespace-nowrap transition-all duration-500 md:h-auto md:w-auto md:justify-start md:gap-3 md:rounded-none md:border-0 md:border-b md:border-wine/25 md:px-0 md:py-[1.05vh] ${
                      on ? "border-wine bg-wine text-white md:bg-transparent md:text-wine" : "border-brown/20 hover:border-wine md:hover:pl-2"
                    }`}
                  >
                    <span className={`eyebrow !text-[0.6rem] ${on ? "text-white md:text-wine" : "text-olive"}`}>0{k + 1}</span>
                    <span className="fat-sm text-[0.8rem] tracking-tight md:text-lg">{x.name}</span>
                    {on && <span aria-hidden className="ml-auto hidden h-px w-8 bg-wine md:block" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Detalhe */}
          <div className="min-w-0 md:col-span-8">
            {/* Todos os painéis ocupam a mesma célula: o cartão tem sempre a altura do maior */}
            <div role="presentation" className="relative grid overflow-hidden rounded-3xl bg-olive p-3.5 text-white md:p-6">
              {procedures.map((p, k) => {
                const on = k === i;
                return (
                  <div
                    key={p.name}
                    role="tabpanel"
                    aria-hidden={!on}
                    className={`col-start-1 row-start-1 transition-[opacity,transform,visibility] duration-500 ${on ? "visible translate-y-0 opacity-100" : "invisible translate-y-3 opacity-0"}`}
                  >
                    <div className="flex gap-3 md:gap-6">
                    {/* foto padronizada em preto e branco (desktop) */}
                    <div className="relative order-last hidden w-[13rem] shrink-0 overflow-hidden rounded-2xl md:block">
                      <Image src={p.photo[0]} alt="" fill sizes="220px" style={{ objectPosition: p.photo[1] }} className={`object-cover ${on ? "kenburns" : ""}`} />
                      <span aria-hidden className="absolute inset-0 bg-gradient-to-t from-olive/70 via-transparent to-transparent" />
                      <span aria-hidden className="fat absolute bottom-3 left-4 text-5xl leading-none text-white/90">0{k + 1}</span>
                    </div>
                    <div className="min-w-0 flex-1">
                    {/* miniatura no celular, ao lado do título */}
                    <div className="float-right mb-1 ml-3 h-[4.6rem] w-[3.6rem] overflow-hidden rounded-xl md:hidden">
                      <Image src={p.photo[0]} alt="" width={120} height={150} style={{ objectPosition: p.photo[1] }} className="h-full w-full object-cover" />
                    </div>
                    <p className="eyebrow text-[#E6CFA5]">{p.full}</p>
                    <h3 className="mt-1 max-w-md text-[0.98rem] leading-tight tracking-tight md:mt-1.5 md:text-[1.45rem]">{p.lead}</h3>

                    <dl className="mt-2 space-y-1.5 text-[0.78rem] leading-snug md:mt-3 md:grid md:grid-cols-2 md:gap-x-5 md:gap-y-2.5 md:space-y-0 md:text-[0.8rem]">
                      {[
                        [UserRound, "Para quem", p.who],
                        [Clock, "Duração", p.duration],
                        [Hourglass, "Resultado", p.result],
                      ].map(([Icon, label, v]) => {
                        const I = Icon as typeof Clock;
                        return (
                          <div key={label as string} className="flex gap-2.5">
                            <I size={14} strokeWidth={1.5} className="mt-0.5 shrink-0 text-[#E6CFA5]" />
                            <div>
                              <dt className="eyebrow fat-sm !text-[0.55rem] text-[#E6CFA5]">{label as string}</dt>
                              <dd className="text-white/90">{v as string}</dd>
                            </div>
                          </div>
                        );
                      })}
                      <div className="hidden gap-2.5 md:flex">
                        <Check size={14} strokeWidth={1.5} className="mt-0.5 shrink-0 text-[#E6CFA5]" />
                        <div>
                          <dt className="eyebrow fat-sm !text-[0.55rem] text-[#E6CFA5]">O que proporciona</dt>
                          <dd className="text-white/90">{p.gives.join(" · ")}</dd>
                        </div>
                      </div>
                    </dl>

                    <a
                      href={waLink(`Olá, Dra. Sandra! Gostaria de saber mais sobre ${p.full.toLowerCase()}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      tabIndex={on ? 0 : -1}
                      className="fat-sm link-draw mt-3 inline-flex items-center gap-2 text-sm text-[#E6CFA5] md:mt-3"
                    >
                      Perguntar sobre {p.name.toLowerCase()} →
                    </a>
                    </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Item>

        <Item className="mt-[2.5vh] hidden lg:block">
          <Button href={whatsappUrl} variant="wine">
            Quero uma avaliação
          </Button>
        </Item>
      </Stagger>
    </Section>
  );
}
