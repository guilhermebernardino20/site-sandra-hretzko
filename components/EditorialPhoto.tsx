import Image from "next/image";
import { img } from "@/lib/site";

/** Foto com tratamento editorial: tons suaves, moldura fina e numeração, como em revista. */
export function EditorialPhoto({ id, n, sizes, w = 800, className = "", priority = false }: { id: string; n?: number; sizes: string; w?: number; className?: string; priority?: boolean }) {
  return (
    <div className={`relative overflow-hidden bg-brown ${className}`}>
      <Image
        src={img(id, w)}
        alt=""
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover grayscale-[0.55] sepia-[0.18] contrast-[1.06] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 group-hover:sepia-0"
      />
      <span aria-hidden className="absolute inset-0 bg-gradient-to-t from-brown/70 via-wine/10 to-transparent mix-blend-multiply" />
      <span aria-hidden className="pointer-events-none absolute inset-2 border border-white/45 md:inset-3" />
      {n !== undefined && <span aria-hidden className="fat absolute bottom-3 left-4 text-2xl leading-none text-white/95 md:bottom-4 md:left-5 md:text-4xl">Nº {String(n).padStart(2, "0")}</span>}
    </div>
  );
}
