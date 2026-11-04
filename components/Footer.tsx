import { AtSign, MapPin, MessageCircle, Mail } from "lucide-react";
import { site, whatsappUrl } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-coffee px-5 pt-24 pb-10 text-sand md:px-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-12 gap-y-12">
          <div className="col-span-12 md:col-span-6">
            <p className="display-lg !text-sand">
              Vamos conversar sobre <em className="text-[#d9a58f]">você?</em>
            </p>
          </div>
          <ul className="col-span-12 space-y-4 text-sm md:col-span-4 md:col-start-9">
            <li>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-[#d9a58f]">
                <MessageCircle size={16} strokeWidth={1.25} /> WhatsApp
              </a>
            </li>
            <li>
              <a href={`https://instagram.com/${site.instagram}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-[#d9a58f]">
                <AtSign size={16} strokeWidth={1.25} /> @{site.instagram}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="flex items-center gap-3 hover:text-[#d9a58f]">
                <Mail size={16} strokeWidth={1.25} /> {site.email}
              </a>
            </li>
            <li className="flex items-start gap-3 text-sand/70">
              <MapPin size={16} strokeWidth={1.25} className="mt-0.5 shrink-0" />
              <span>{site.address.join(" · ")}</span>
            </li>
          </ul>
        </div>

        <div className="mt-20 flex flex-col gap-3 border-t border-sand/10 pt-6 text-[0.7rem] uppercase tracking-[0.2em] text-sand/50 md:flex-row md:justify-between">
          <span>
            {site.name} · {site.crm}
          </span>
          <span>Desenvolvido por Jozzi Creative Lab</span>
        </div>
      </div>
    </footer>
  );
}
