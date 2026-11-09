import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Clock } from "lucide-react";
import { ReadingProgress } from "@/components/ReadingProgress";
import { formatDate, getPost, posts } from "@/lib/posts";
import { img, photos, waLink } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  return { title: `${post.title} — Dra. Sandra Hretzko`, description: post.excerpt };
}

export default async function PostPage({ params }: Props) {
  const post = getPost((await params).slug);
  if (!post) notFound();

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 2);
  let firstP = true;
  let n = 0;

  return (
    <main>
      <ReadingProgress />

      {/* Capa */}
      <section className="relative overflow-hidden bg-brown text-white">
        <div aria-hidden className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-wine/60 blur-3xl" />
        <div className="relative mx-auto max-w-5xl px-6 pt-10 pb-28 md:pt-16 md:pb-40">
          <Link href="/blog" className="fat-sm flex w-fit items-center gap-2 text-xs tracking-widest text-[#E6CFA5] uppercase">
            <ArrowLeft size={14} strokeWidth={1.5} /> Todos os artigos
          </Link>
          <p className="eyebrow mt-8 block w-fit rounded-full border border-[#E6CFA5]/40 px-3 py-1 text-[#E6CFA5]">{post.category}</p>
          <h1 className="mt-5 text-[clamp(2rem,8.5vw,3.6rem)] leading-[1] tracking-tighter">{post.title}</h1>
          <p className="mt-5 max-w-xl text-base leading-snug text-white/75 md:text-lg">{post.excerpt}</p>
          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs tracking-wide text-white/70 uppercase">
            <span className="flex items-center gap-3">
              <span className="relative h-9 w-9 overflow-hidden rounded-full border border-white/30">
                <Image src={photos.desk} alt="" fill sizes="36px" className="object-cover object-[18%_16%]" />
              </span>
              Dra. Sandra Hretzko
            </span>
            <span>{formatDate(post.date)}</span>
            <span className="flex items-center gap-1.5"><Clock size={13} strokeWidth={1.5} /> {post.readTime}</span>
          </div>
        </div>
      </section>

      <article className="relative mx-auto max-w-5xl px-6">
        {/* Imagem sobreposta à capa */}
        <div className="relative mx-auto -mt-20 aspect-[16/9] max-w-3xl overflow-hidden rounded-3xl md:-mt-28 md:aspect-[21/9] shadow-2xl shadow-brown/20">
          <Image src={img(post.image, 1400)} alt="" fill priority sizes="(min-width: 768px) 768px, 100vw" className="object-cover" />
        </div>

        <div className="mx-auto mt-10 max-w-3xl md:mt-14">
          {post.body.map((b, i) => {
            if (b.type === "h2")
              return (
                <h2 key={i} className="mt-12 mb-4 flex items-baseline gap-3 text-2xl leading-tight tracking-tight text-wine md:text-3xl">
                  <span aria-hidden className="text-sm text-olive">{String(++n).padStart(2, "0")}</span>
                  {b.text.replace(/^\d+\.\s*/, "")}
                </h2>
              );
            if (b.type === "quote")
              return (
                <blockquote key={i} className="my-10 border-l-2 border-olive pl-5 text-xl leading-snug tracking-tight text-olive md:text-2xl">
                  {b.text}
                </blockquote>
              );
            const lead = firstP;
            firstP = false;
            return (
              <p
                key={i}
                className={
                  lead
                    ? "text-lg leading-relaxed first-letter:float-left first-letter:mr-3 first-letter:text-6xl first-letter:leading-[0.85] first-letter:text-wine first-letter:[-webkit-text-stroke:2px_currentColor] md:text-2xl"
                    : "mt-5 text-base leading-[1.75] md:text-lg"
                }
              >
                {b.text}
              </p>
            );
          })}

          <p className="mt-12 rounded-2xl bg-olive/10 p-4 text-xs leading-snug text-brown/80">
            Conteúdo informativo. Não substitui avaliação profissional individual; a indicação de qualquer procedimento depende de consulta.
          </p>
        </div>

        {/* CTA */}
        <div className="relative mt-14 overflow-hidden rounded-3xl bg-wine p-7 text-white md:p-10">
          <div aria-hidden className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-[#E6CFA5]/15" />
          <p className="eyebrow text-[#E6CFA5]">Próximo passo</p>
          <h2 className="mt-2 max-w-md text-2xl leading-tight tracking-tight md:text-3xl">Quer conversar sobre o seu caso?</h2>
          <a
            href={waLink(`Olá, Dra. Sandra! Li o artigo "${post.title}" e gostaria de agendar uma avaliação.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="fat-sm relative mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-xs tracking-widest text-brown uppercase"
          >
            Agendar avaliação <ArrowUpRight size={15} strokeWidth={1.5} />
          </a>
        </div>
      </article>

      {/* Leia também */}
      <section className="mx-auto mt-16 max-w-3xl px-6 pb-20">
        <p className="eyebrow text-olive">Leia também</p>
        <div className="mt-5 grid gap-6 md:grid-cols-2">
          {related.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="group block">
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
                <Image src={img(p.image, 700)} alt="" fill sizes="(min-width: 768px) 370px, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <p className="eyebrow mt-3 text-olive">{p.category} · {p.readTime}</p>
              <h3 className="mt-1 text-lg leading-tight tracking-tight">{p.title}</h3>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
