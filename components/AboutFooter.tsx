"use client";

import Image from "next/image";
import { AtSign, Clock, MapPin, MessageCircle } from "lucide-react";
import { Section } from "./Section";
import { Button } from "./Button";
import { Faq } from "./Faq";
import { Blog } from "./Blog";
import { Location } from "./Location";
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
              <Tilt className="relative">
                <Reveal className="relative h-[24vh] w-full overflow-hidden rounded-[2rem] md:h-[64vh]">
                  <Image src={photos.desk} alt="Dra. Sandra Hretzko em seu consultório" fill sizes="(min-width: 768px) 35vw, 90vw" className="object-cover object-[18%_16%]" />
                </Reveal>
              </Tilt>
              {/* selo de formação */}
              <div className="absolute right-2 bottom-2 rounded-2xl bg-white/85 px-3 py-2 shadow-lg backdrop-blur-md md:-right-8 md:bottom-10 md:px-5 md:py-4">
                <p className="eyebrow !text-[0.5rem] text-olive md:!text-[0.58rem]">Formada desde</p>
                <p className="fat text-2xl leading-none text-wine md:text-4xl">1998</p>
                <p className="mt-0.5 text-[0.6rem] md:text-xs">Odontologia · PUC-PR</p>
              </div>
              {/* segunda foto (desktop) */}
              <div className="absolute -top-6 -right-8 hidden h-44 w-36 overflow-hidden rounded-2xl border-8 border-white shadow-xl md:block">
                <Image src={photos.mirror} alt="" fill sizes="144px" className="object-cover object-[58%_30%]" />
              </div>
            </div>
          </Item>
          <div className="md:col-span-7">
            <Item>
              <p className="eyebrow mb-[1.5vh] text-olive">Sobre a Dra. Sandra</p>
              <h2 className="text-[clamp(1.9rem,min(9vw,6.5vh),5rem)] leading-[0.95] tracking-tighter uppercase">
                Ciência com <span className="text-wine">propósito.</span>
              </h2>
              <p className="mt-[2.5vh] text-[0.92rem] leading-relaxed text-brown md:text-lg">
                Cirurgiã-dentista formada pela PUC-PR em 1998.{" "}
                <span className="hidden md:inline">
                  Depois de anos reabilitando sorrisos, percebeu que muitos pacientes ainda não se sentiam satisfeitos com a
                  própria imagem no espelho, e foi buscar a harmonização facial, sempre respeitando os traços de cada pessoa.
                </span>
              </p>
              <blockquote className="mt-[2.5vh] hidden border-l-2 border-wine pl-5 md:block">
                <p className="fat-sm text-xl leading-snug tracking-tight text-wine">“Cuido de pessoas respeitando os seus traços.”</p>
                <footer className="eyebrow mt-2 !text-[0.58rem] text-olive">Dra. Sandra Hretzko</footer>
              </blockquote>
            </Item>
            <Item>
              <ol className="mt-[3vh] grid grid-cols-2 gap-3 md:gap-6">
                {[
                  ["1998", "Odontologia", "PUC-PR"],
                  ["Hoje", "Harmonização orofacial", "Naturalidade e sutileza"],
                ].map(([k, t, d]) => (
                  <li key={k} className="group relative border-t border-wine/30 pt-3 transition-colors duration-500 hover:border-wine">
                    <span aria-hidden className="absolute -top-1 left-0 h-2 w-2 rounded-full bg-wine transition-transform duration-500 group-hover:scale-150" />
                    <p className="eyebrow !text-[0.52rem] text-olive">{k}</p>
                    <p className="fat-sm mt-1 text-[0.78rem] leading-tight md:text-base">{t}</p>
                    <p className="mt-1 hidden text-xs text-brown/70 md:block">{d}</p>
                  </li>
                ))}
              </ol>
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

      <Location />

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
              <li className="flex items-center gap-2">
                <Clock size={15} strokeWidth={1.5} /> {site.hours}
              </li>
            </ul>
            <div className="mt-[2.5vh] flex flex-col gap-1 text-[0.68rem] tracking-[0.16em] text-white/75 uppercase md:flex-row md:justify-between">
              <span>
                {site.name} · {site.profession}
                {site.cro ? ` · ${site.cro}` : ""} · CNPJ {site.cnpj}
              </span>
              <span>Desenvolvido por Jozzi Creative Lab</span>
            </div>
          </Item>
        </Stagger>
      </Section>
    </>
  );
}
