"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section } from "./Section";
import { Item, Stagger } from "./Motion";
import { posts } from "@/lib/posts";
import { EditorialPhoto } from "./EditorialPhoto";

export function Blog() {
  return (
    <Section id="blog" theme="brown">
      <Stagger>
        <Item className="flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow mb-[1.5vh] text-[#E6CFA5]">Blog da Dra.</p>
            <h2 className="text-[clamp(1.9rem,min(9vw,6.5vh),4.5rem)] leading-[0.95] tracking-tighter uppercase">
              Informação <span className="shimmer shimmer-gold">com calma.</span>
            </h2>
          </div>
          <Link
            href="/blog"
            className="fat-sm hidden shrink-0 items-center gap-2 rounded-full border border-white/30 px-5 py-2.5 text-sm tracking-wide uppercase transition-colors hover:bg-white hover:text-brown md:inline-flex"
          >
            Ver todos <ArrowUpRight size={16} strokeWidth={1.5} />
          </Link>
        </Item>

        <div className="mt-[3vh] grid gap-3 md:grid-cols-3 md:gap-6">
          {posts.map((p, i) => (
            <Item key={p.slug} className={`h-full ${i > 1 ? "hidden md:block" : ""}`}>
              <Link
                href={`/blog/${p.slug}`}
                className="group flex h-full items-center gap-4 rounded-2xl border border-white/15 bg-white/5 p-3 transition-all duration-500 hover:-translate-y-1 hover:border-[#E6CFA5]/60 hover:bg-white/10 md:min-h-[24rem] md:flex-col md:items-stretch md:p-4"
              >
                <EditorialPhoto id={p.image} n={i + 1} w={700} sizes="(min-width: 768px) 30vw, 30vw" className="h-[13vh] w-[28%] shrink-0 rounded-sm md:h-[24vh] md:w-full" />
                <div className="flex min-w-0 flex-1 flex-col">
                  <p className="eyebrow whitespace-nowrap !text-[0.6rem] text-[#E6CFA5] md:!text-[0.7rem]">{p.category} · {p.readTime}</p>
                  <h3 className="mt-1 line-clamp-3 min-h-[3.3em] text-[0.92rem] leading-tight tracking-tight md:mt-2 md:line-clamp-2 md:min-h-[2.5em] md:text-xl">{p.title}</h3>
                  <p className="mt-2 hidden line-clamp-3 text-sm leading-snug text-white/75 md:block">{p.excerpt}</p>
                </div>
              </Link>
            </Item>
          ))}
        </div>

        <Item className="mt-[3vh] md:hidden">
          <Link href="/blog" className="fat-sm inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-2.5 text-xs tracking-wide uppercase">
            Ver todos os artigos <ArrowUpRight size={14} strokeWidth={1.5} />
          </Link>
        </Item>
      </Stagger>
    </Section>
  );
}
