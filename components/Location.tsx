import { Car, Clock, MapPin, Navigation, Route } from "lucide-react";
import { Section } from "./Section";
import { Item, Reveal, Stagger } from "./Motion";
import { maps, site } from "@/lib/site";

const info = [
  { icon: MapPin, label: "Endereço", value: site.address.join(", ") },
  { icon: Clock, label: "Atendimento", value: site.hours },
  { icon: Car, label: "Estacionamento", value: site.parking },
];

const options = [
  { label: "Waze", href: maps.waze, icon: Navigation, cls: "bg-brown text-white hover:bg-wine" },
  { label: "Uber", href: maps.uber, icon: Car, cls: "bg-wine text-white hover:bg-olive" },
  { label: "Maps", href: maps.route, icon: Route, cls: "border border-brown/30 text-brown hover:border-brown hover:bg-brown hover:text-white" },
];

/** Como chegar ao consultório: endereço, horário e mapa. */
export function Location() {
  return (
    <Section id="como-chegar" theme="white">
      <Stagger className="grid items-center gap-[3vh] md:grid-cols-12 md:gap-8">
        <div className="md:col-span-4">
          <Item>
            <p className="eyebrow mb-[1.5vh] text-olive">Como chegar</p>
            <h2 className="text-[clamp(1.9rem,min(9vw,6.5vh),4.5rem)] leading-[0.95] tracking-tighter uppercase">
              Venha nos <span className="text-wine">visitar.</span>
            </h2>
          </Item>
          <Item>
            <ul className="mt-[2.5vh] border-t border-wine/30">
              {info.map((x) => (
                <li key={x.label} className="group flex gap-4 border-b border-wine/30 py-[1.4vh] transition-all duration-500 hover:pl-2 md:py-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-olive text-white transition-all duration-500 group-hover:rotate-[360deg] group-hover:bg-wine">
                    <x.icon size={16} strokeWidth={1.5} />
                  </span>
                  <div>
                    <p className="eyebrow !text-[0.55rem] text-olive">{x.label}</p>
                    <p className="fat-sm text-left text-[0.9rem] leading-snug md:text-base">{x.value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Item>
          <Item className="mt-[2.5vh]">
            <p className="eyebrow mb-2 !text-[0.55rem] text-olive">Ir até o consultório</p>
            <div className="grid grid-cols-3 gap-2 md:gap-3">
              {options.map((o) => (
                <a
                  key={o.label}
                  href={o.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn-shine group relative flex h-11 items-center justify-center gap-2 overflow-hidden rounded-full text-[0.72rem] tracking-wide transition-colors duration-500 fat-sm md:h-12 md:text-sm ${o.cls}`}
                >
                  <o.icon size={15} strokeWidth={1.75} className="relative transition-transform duration-500 group-hover:scale-125" />
                  <span className="relative">{o.label}</span>
                </a>
              ))}
            </div>
          </Item>
        </div>

        <Item className="md:col-span-7 md:col-start-6">
          <div className="relative">
            <div aria-hidden className="absolute -right-3 -bottom-3 h-[85%] w-[85%] rounded-[2rem] bg-olive/15 md:-right-6 md:-bottom-6" />
            <Reveal className="relative h-[21vh] w-full overflow-hidden rounded-[2rem] shadow-[0_24px_50px_-25px_rgba(54,17,28,0.5)] md:h-[58vh]">
              <iframe
                title="Mapa com a localização do consultório da Dra. Sandra Hretzko"
                src={maps.embed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="h-full w-full border-0"
              />
            </Reveal>
          </div>
        </Item>
      </Stagger>
    </Section>
  );
}
