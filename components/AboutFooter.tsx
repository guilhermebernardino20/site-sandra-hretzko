"use client";

import Image from "next/image";
import { AtSign, BookOpen, GraduationCap, HeartHandshake, MapPin, MessageCircle } from "lucide-react";
import { Section } from "./Section";
import { Button } from "./Button";
import { Faq } from "./Faq";
import { Blog } from "./Blog";
import { Item, Reveal, Stagger } from "./Motion";
import { Tilt } from "./Tilt";
import { photos, site, whatsappUrl } from "@/lib/site";

export function AboutFooter() {
  return (
    <>
      <Section id="sobre" theme="white">
        <Stagger className="grid items-center gap-[3vh] md:grid-cols-12 md:gap-14">
          <Item className="md:col-span-5">
            <div className="relative mx-auto w-full md:max-w-md">
              <div aria-hidden className="absolute -bottom-3 -left-3 h-[85%] w-[85%] rounded-[2rem] bg-olive/15 md:-bottom-6 md:-left-6" />
              <Tilt className="relative"><Reveal className="relative h-[24vh] w-full overflow-hidden rounded-[2rem] md:h-[66vh]">
                <Image src={photos.desk} alt="Dra. Sandra Hretzko em seu consultório" fill sizes="(min-width: 768px) 35vw, 90vw" className="object-cover object-[18%_16%]" />
              </Reveal></Tilt>
            </div>
          </Item>
          <div className="md:col-span-7">
            <Item>
              <p className="eyebrow mb-[1.5vh] text-olive">Sobre a Dra. Sandra</p>
              <h2 className="text-[clamp(1.9rem,min(9vw,6.5vh),5rem)] leading-[0.95] tracking-tighter uppercase">
                Ciência com <span className="text-wine">propósito.</span>
              </h2>
              <p className="mt-[2.5vh] text-[0.95rem] leading-relaxed text-brown md:text-xl">
                Médica esteta em atualização constante. Ética, anatomia e fé guiam cada atendimento, com tempo,
                escuta e indicação honesta.
                {/* TODO: completar com formação e instituições reais */}
              </p>
            </Item>
            <Item>
              <ul className="mt-[3vh] grid gap-2 border-t border-wine/30 pt-[2vh] sm:grid-cols-3 sm:gap-4">
                {[
                  [GraduationCap, "Formação médica"],
                  [BookOpen, "Atualização constante"],
                  [HeartHandshake, "Atendimento ético"],
                ].map(([Icon, t]) => {
                  const I = Icon as typeof GraduationCap;
                  return (
                    <li key={t as string} className="fat-sm group flex cursor-default items-center gap-2.5 text-sm transition-transform duration-300 hover:translate-x-1">
                      <I size={16} strokeWidth={1.5} className="text-olive transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12" /> {t as string}
                    </li>
                  );
                })}
              </ul>
            </Item>
            <Item className="mt-[3vh] hidden md:block">
              <Button href={whatsappUrl} variant="wine">
                Agendar com a Dra. Sandra
              </Button>
            </Item>
          </div>
        </Stagger>
      </Section>

      <Blog />

      <Faq />

      <Section id="contato" theme="brown">
        <Stagger className="flex flex-col gap-[4vh]">
          <Item>
            <h2 className="text-[clamp(2rem,min(9.4vw,8vh),7rem)] leading-[0.95] tracking-tighter whitespace-nowrap uppercase">
              <span className="block">Pronta para</span>
              <span className="block">
                se <span className="text-[#E6CFA5]">reconhecer?</span>
              </span>
            </h2>
            <div className="mt-[3vh]">
              <Button href={whatsappUrl} variant="light">
                Agendar Avaliação
              </Button>
            </div>
          </Item>
          <Item>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 border-t border-white/25 pt-[2.5vh] text-sm">
              <li>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="link-draw flex items-center gap-2 hover:text-[#E6CFA5]">
                  <MessageCircle size={15} strokeWidth={1.5} /> WhatsApp
                </a>
              </li>
              <li>
                <a href={`https://instagram.com/${site.instagram}`} target="_blank" rel="noopener noreferrer" className="link-draw flex items-center gap-2 hover:text-[#E6CFA5]">
                  <AtSign size={15} strokeWidth={1.5} /> {site.instagram}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={15} strokeWidth={1.5} /> {site.address.join(" · ")}
              </li>
            </ul>
            <div className="mt-[2.5vh] flex flex-col gap-1 text-[0.68rem] tracking-[0.16em] text-white/75 uppercase md:flex-row md:justify-between">
              <span>
                {site.name} · {site.crm}
              </span>
              <span>Desenvolvido por Jozzi Creative Lab</span>
            </div>
          </Item>
        </Stagger>
      </Section>
    </>
  );
}
