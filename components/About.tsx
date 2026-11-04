import Image from "next/image";
import { BookOpen, GraduationCap, HeartHandshake } from "lucide-react";
import { Reveal } from "./Reveal";
import { Button } from "./Button";
import { img, images, whatsappUrl } from "@/lib/site";

const principles = [
  { icon: GraduationCap, title: "Formação", text: "Médica, com pós-graduação em estética. [Complete com instituições e anos.]" },
  { icon: BookOpen, title: "Atualização constante", text: "Congressos e cursos todos os anos, para indicar apenas o que é seguro e atual." },
  { icon: HeartHandshake, title: "Princípios", text: "Ética, anatomia e fé guiam cada atendimento — antes de qualquer técnica." },
];

export function About() {
  return (
    <section id="sobre" className="bg-sand-deep px-5 py-28 md:px-10 md:py-44">
      <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-y-14">
        <Reveal className="col-span-12 md:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px]">
            <Image
              src={img(images.doctor, 1100)}
              alt="Dra. Sandra Hretzko"
              fill
              sizes="(min-width: 768px) 40vw, 90vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <div className="col-span-12 md:col-span-6 md:col-start-7 md:pt-16">
          <Reveal>
            <p className="eyebrow mb-6">Sobre a Dra. Sandra</p>
            <h2 className="display-lg">
              Ciência com <em className="text-terracotta">propósito.</em>
            </h2>
            <p className="mt-8 text-base leading-relaxed text-coffee-soft md:text-lg">
              Sandra Hretzko acredita que a medicina estética bem feita é aquela que ninguém
              percebe — só enxergam você, mais descansada. Cada paciente é atendida com tempo,
              escuta e uma indicação honesta.
            </p>
          </Reveal>
          <ul className="mt-12 divide-y divide-coffee/10 border-y border-coffee/10">
            {principles.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 0.1} className="flex gap-5 py-6">
                <p.icon size={20} strokeWidth={1.25} className="mt-1 shrink-0 text-olive" />
                <div>
                  <h3 className="font-serif text-xl tracking-tight">{p.title}</h3>
                  <p className="mt-1 text-sm text-coffee-soft">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
          <Reveal className="mt-12">
            <Button href={whatsappUrl}>Agendar Avaliação</Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
