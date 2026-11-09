import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center bg-brown px-6 text-center text-white">
      <p className="eyebrow text-[#E6CFA5]">Erro 404</p>
      <h1 className="mt-4 text-[clamp(2.4rem,9vw,5rem)] leading-[0.95] tracking-tighter uppercase">
        Página <span className="text-[#E6CFA5]">não encontrada.</span>
      </h1>
      <p className="mt-5 max-w-sm text-white/80">O endereço que você tentou abrir não existe ou mudou de lugar.</p>
      <Link
        href="/"
        className="fat-sm mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-xs tracking-widest text-brown uppercase transition-colors hover:bg-[#E6CFA5]"
      >
        <ArrowLeft size={14} strokeWidth={1.75} /> Voltar ao início
      </Link>
    </main>
  );
}
