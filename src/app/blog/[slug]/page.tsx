import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLink } from "@/components/ArrowLink";
import { MarkdownContent } from "@/components/MarkdownContent";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CtaBanner } from "@/components/CtaBanner";
import {
  formatPostDate,
  getAllPostSlugs,
  getPostBySlug,
} from "@/lib/blog";
import { pageMetadata } from "@/lib/metadata";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return pageMetadata(post.title, post.excerpt, `/blog/${slug}`);
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <article className="section-padding pt-32 md:pt-40">
        <div className="container-content">
          <header className="max-w-3xl">
            <p className="font-mono-label mb-6 text-muted">
              <span className="text-accent">Blog</span>
              <span className="mx-2">—</span>
              {formatPostDate(post.date)}
            </p>
            <h1 className="font-display text-section font-semibold text-text">
              {post.title}
            </h1>
            {post.excerpt && (
              <p className="mt-4 text-xl text-text2">{post.excerpt}</p>
            )}
          </header>

          {post.image && (
            <ScrollReveal className="mt-12">
              <div className="relative aspect-[16/9] max-w-4xl overflow-hidden rounded-[var(--radius-card)] border border-border bg-surface">
                <Image
                  src={post.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 896px"
                  priority
                />
              </div>
            </ScrollReveal>
          )}

          <ScrollReveal className="mt-16 max-w-3xl">
            <MarkdownContent content={post.content} />
          </ScrollReveal>

          <ScrollReveal className="mt-16">
            <ArrowLink href="/blog">All articles</ArrowLink>
          </ScrollReveal>
        </div>
      </article>

      <CtaBanner />
    </>
  );
}