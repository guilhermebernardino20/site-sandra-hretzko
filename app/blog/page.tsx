import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { formatDate, posts } from "@/lib/posts";
import { img } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog — Dra. Sandra Hretzko",
  description: "Informação com calma sobre medicina estética, procedimentos e cuidados.",
};

export default function BlogIndex() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12 md:px-12 md:py-20">
      <p className="eyebrow text-olive">Blog da Dra.</p>
      <h1 className="mt-3 text-[clamp(2.2rem,9vw,4.5rem)] leading-[0.95] tracking-tighter uppercase">
        Informação <span className="text-wine">com calma.</span>
      </h1>
      <div className="mt-10 grid gap-8 md:grid-cols-3">
        {posts.map((p) => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="group flex h-full flex-col rounded-2xl p-3 transition-all duration-500 hover:-translate-y-1 hover:bg-olive/5">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image src={img(p.image, 800)} alt="" fill sizes="(min-width: 768px) 30vw, 90vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <p className="eyebrow mt-4 text-olive">{p.category} · {formatDate(p.date)}</p>
            <h2 className="mt-1 line-clamp-2 min-h-[2.5em] text-xl leading-tight tracking-tight">{p.title}</h2>
            <p className="mt-2 line-clamp-3 text-sm leading-snug">{p.excerpt}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
