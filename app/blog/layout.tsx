import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { whatsappUrl } from "@/lib/site";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div id="blog-scroll" className="h-dvh overflow-y-auto bg-white text-brown">
      <header className="sticky top-0 z-40 border-b border-brown/10 bg-white/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3 md:px-12">
          <Link href="/" className="fat-sm inline-flex items-center gap-2 text-xs tracking-widest uppercase">
            <ArrowLeft size={16} strokeWidth={1.5} /> Início
          </Link>
          <span className="text-sm leading-none tracking-tight">Dra. Sandra Hretzko</span>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fat-sm rounded-full bg-brown px-4 py-2 text-[0.7rem] tracking-widest text-white uppercase"
          >
            Agendar
          </a>
        </div>
      </header>
      {children}
    </div>
  );
}
