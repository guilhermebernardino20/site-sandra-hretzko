"use client";

import Image from "next/image";
import { useState } from "react";
import { Quote } from "lucide-react";
import { Reveal } from "./Reveal";
import { img, images } from "@/lib/site";

/**
 * TROCAR antes de publicar: `before` e `after` devem ser fotos reais
 * (com autorização escrita da paciente). Enquanto isso usam a mesma imagem de banco.
 * Depoimentos abaixo são texto de exemplo — substitua por relatos reais.
 */
type Case = { id: string; name: string; note: string; before: string; after: string };

const cases: Case[] = [
  { id: "c1", name: "M., 52 anos", note: "Fios faciais · 60 dias", before: images.r1, after: images.r1 },
  { id: "c2", name: "L., 47 anos", note: "Preenchimento de olheiras · 30 dias", before: images.r2, after: images.r2 },
  { id: "c3", name: "R., 58 anos", note: "Fios + bioestimulador · 90 dias", before: images.r3, after: images.r3 },
];

const testimonials = [
  { text: "Saí do consultório e ninguém soube dizer o que eu tinha feito. Só me acharam descansada.", who: "Paciente, 54 anos" },
  { text: "Foi a primeira vez que me ouviram antes de me tratar. Ela até disse que eu não precisava de uma coisa.", who: "Paciente, 49 anos" },
  { text: "Eu me reconheço no espelho. É exatamente o que eu pedi.", who: "Paciente, 61 anos" },
];

function BeforeAfter({ c }: { c: Case }) {
  const [pos, setPos] = useState(50);
  return (
    <figure>
      <div className="relative aspect-[3/4] select-none overflow-hidden rounded-[1.75rem]">
        <Image src={img(c.after, 900)} alt={`Depois — ${c.name}`} fill sizes="(min-width: 768px) 30vw, 90vw" className="object-cover" />
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <Image src={img(c.before, 900)} alt={`Antes — ${c.name}`} fill sizes="(min-width: 768px) 30vw, 90vw" className="object-cover saturate-[.8]" />
        </div>
        <div className="pointer-events-none absolute inset-y-0 w-px bg-sand" style={{ left: `${pos}%` }}>
          <span className="absolute top-1/2 left-1/2 h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border border-sand bg-sand/30 backdrop-blur" />
        </div>
        <span className="absolute top-4 left-4 rounded-full bg-sand/80 px-3 py-1 text-[0.6rem] uppercase tracking-[0.2em]">Antes</span>
        <span className="absolute top-4 right-4 rounded-full bg-sand/80 px-3 py-1 text-[0.6rem] uppercase tracking-[0.2em]">Depois</span>
        <input
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-label={`Comparar antes e depois — ${c.name}`}
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>
      <figcaption className="mt-4 flex justify-between text-sm">
        <span className="font-serif text-lg">{c.name}</span>
        <span className="text-coffee-soft">{c.note}</span>
      </figcaption>
    </figure>
  );
}

export function Results() {
  return (
    <section id="resultados" className="px-5 py-28 md:px-10 md:py-44">
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="mb-16 max-w-2xl md:mb-24">
          <p className="eyebrow mb-6">Resultados naturais</p>
          <h2 className="display-lg">
            A melhor prova é a <em className="text-terracotta">sutileza.</em>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-3">
          {cases.map((c, i) => (
            <Reveal key={c.id} delay={i * 0.12} className={i === 1 ? "md:mt-20" : ""}>
              <BeforeAfter c={c} />
            </Reveal>
          ))}
        </div>

        <div className="mt-28 grid grid-cols-1 gap-12 border-t border-coffee/10 pt-16 md:grid-cols-3 md:gap-10">
          {testimonials.map((t, i) => (
            <Reveal key={t.who + i} delay={i * 0.12}>
              <blockquote>
                <Quote size={20} strokeWidth={1.25} className="mb-5 text-terracotta" />
                <p className="font-serif text-xl leading-snug tracking-tight md:text-2xl">{t.text}</p>
                <footer className="mt-5 text-xs uppercase tracking-[0.22em] text-coffee-soft">{t.who}</footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
