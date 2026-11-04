import Image from "next/image";
import { Eye, Home, Hourglass } from "lucide-react";
import { Reveal } from "./Reveal";
import { img, images } from "@/lib/site";

const pillars = [
  { icon: Hourglass, title: "Tempo de consulta", text: "Sem relógio na parede. A avaliação é longa o bastante para ouvir sua história antes de olhar para o seu rosto." },
  { icon: Eye, title: "O detalhe do olhar", text: "Observamos assimetrias, expressões e proporções com calma — é aí que mora a naturalidade." },
  { icon: Home, title: "Receber em casa", text: "Um ambiente quieto, acolhedor e seguro, pensado para que você chegue tranquila e saia ainda mais você." },
];

export function Experience() {
  return (
    <section id="experiencia" className="relative overflow-hidden bg-coffee px-5 py-28 text-sand md:px-10 md:py-44">
      <div className="mx-auto grid max-w-[1400px] grid-cols-12 items-center gap-y-16">
        <Reveal className="relative col-span-12 md:col-span-6">
          <div className="relative aspect-[5/6] overflow-hidden rounded-[2rem] md:w-[85%]">
            <Image
              src={img(images.experience, 1200)}
              alt="Ambiente acolhedor do consultório"
              fill
              sizes="(min-width: 768px) 45vw, 95vw"
              className="object-cover"
            />
          </div>
          <div className="relative -mt-16 ml-auto aspect-square w-1/2 overflow-hidden rounded-[1.5rem] border-[6px] border-coffee md:absolute md:-bottom-16 md:right-0 md:mt-0 md:w-2/5">
            <Image
              src={img(images.detail, 700)}
              alt="Detalhe de cuidado e acolhimento"
              fill
              sizes="25vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <div className="col-span-12 md:col-span-5 md:col-start-8">
          <Reveal>
            <p className="eyebrow mb-6 !text-[#d9a58f]">A experiência</p>
            <h2 className="display-lg">
              Como ser recebida <em className="text-[#d9a58f]">em casa.</em>
            </h2>
          </Reveal>
          <ul className="mt-12 space-y-10">
            {pillars.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 0.1} className="flex gap-5">
                <p.icon size={22} strokeWidth={1.25} className="mt-1 shrink-0 text-[#d9a58f]" />
                <div>
                  <h3 className="font-serif text-xl tracking-tight">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-sand/70">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
