import Link from "next/link";
import Image from "next/image";
import type { BlogPostMeta } from "@/lib/blog";
import { formatPostDate } from "@/lib/blog";

type BlogCardProps = {
  post: BlogPostMeta;
  index: number;
};

export function BlogCard({ post, index }: BlogCardProps) {
  const indexLabel = String(index + 1).padStart(2, "0");

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block focus-visible:outline-none"
    >
      <article className="crosshair-corners relative overflow-hidden rounded-[var(--radius-card)] bg-surface transition-all duration-200 hover:-translate-y-0.5 hover:border-white/15 hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)] motion-reduce:transition-none motion-reduce:hover:translate-y-0">
        <div className="hairline-border absolute inset-0 rounded-[var(--radius-card)] transition-colors duration-200 group-hover:border-white/15" />

        <div className="relative z-10 flex flex-col gap-6 p-6 md:flex-row md:items-stretch md:p-8">
          {post.image && (
            <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden rounded-[var(--radius-card)] bg-surface2 md:aspect-auto md:h-auto md:w-48 lg:w-56">
              <Image
                src={post.image}
                alt=""
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-[1.02] motion-reduce:transition-none"
                sizes="(max-width: 768px) 100vw, 224px"
              />
            </div>
          )}

          <div className="flex flex-1 flex-col justify-between gap-4">
            <div>
              <p className="font-mono-label mb-3 text-muted">
                <span className="text-accent">{indexLabel}</span>
                <span className="mx-2">—</span>
                {formatPostDate(post.date)}
              </p>
              <h2 className="font-display text-xl font-semibold tracking-tight text-text transition-colors group-hover:text-accent md:text-2xl">
                {post.title}
              </h2>
              <p className="mt-3 text-text2">{post.excerpt}</p>
            </div>
            <span className="font-mono-label text-accent opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100">
              Read article →
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}