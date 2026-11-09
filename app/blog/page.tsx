import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/lib/posts";
import { EditorialPhoto } from "@/components/EditorialPhoto";

export const metadata: Metadata = {
  title: "Blog | Dra. Sandra Hretzko",
  description: "Informação com calma sobre harmonização orofacial, procedimentos e cuidados.",
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
            <EditorialPhoto id={p.image} n={posts.indexOf(p) + 1} w={800} sizes="(min-width: 768px) 30vw, 90vw" className="aspect-[4/5] rounded-sm" />
            <p className="eyebrow mt-4 text-olive">{p.category} · {p.readTime}</p>
            <h2 className="mt-1 line-clamp-2 min-h-[2.5em] text-xl leading-tight tracking-tight">{p.title}</h2>
            <p className="mt-2 line-clamp-3 text-sm leading-snug">{p.excerpt}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
