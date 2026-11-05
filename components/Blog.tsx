"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section } from "./Section";
import { Item, Stagger } from "./Motion";
import { posts } from "@/lib/posts";
import { img } from "@/lib/site";

export function Blog() {
  return (
    <Section id="blog" theme="brown">
      <Stagger>
        <Item className="flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow mb-[1.5vh] text-[#E6CFA5]">Blog da Dra.</p>
            <h2 className="text-[clamp(1.9rem,min(9vw,6.5vh),4.5rem)] leading-[0.95] tracking-tighter uppercase">
              Informação <span className="text-[#E6CFA5]">com calma.</span>
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
            <Item key={p.slug} className={i > 1 ? "hidden md:block" : ""}>
              <Link
                href={`/blog/${p.slug}`}
                className="group flex items-center gap-4 rounded-2xl border border-white/15 bg-white/5 p-3 transition-colors hover:bg-white/10 md:flex-col md:items-stretch md:p-4"
              >
                <div className="relative h-[13vh] w-[28%] shrink-0 overflow-hidden rounded-xl md:h-[24vh] md:w-full">
                  <Image
                    src={img(p.image, 700)}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 30vw, 30vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="min-w-0">
                  <p className="eyebrow text-[#E6CFA5]">{p.category} · {p.readTime}</p>
                  <h3 className="mt-1 text-[0.95rem] leading-tight tracking-tight md:mt-2 md:text-xl">{p.title}</h3>
                  <p className="mt-2 hidden text-sm leading-snug text-white/75 md:block">{p.excerpt}</p>
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
