import type { Metadata } from "next";
import { BlogCard } from "@/components/BlogCard";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CtaBanner } from "@/components/CtaBanner";
import { getAllPosts } from "@/lib/blog";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Blog",
  "Notes on AI automation, CRMs, and building systems that run in production.",
  "/blog"
);

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <section className="section-padding pt-32 md:pt-40">
        <div className="container-content">
          <p className="font-mono-label mb-6 text-muted">Blog</p>
          <h1 className="font-display text-section max-w-3xl font-semibold text-text">
            Writing on systems that ship.
          </h1>
          <p className="mt-6 max-w-xl text-text2">
            Notes on AI automation, CRMs, and building systems that hold up in
            production — not just in demos.
          </p>

          {posts.length > 0 ? (
            <div className="mt-16 flex flex-col gap-6">
              {posts.map((post, i) => (
                <ScrollReveal key={post.slug} delay={i * 60}>
                  <BlogCard post={post} index={i} />
                </ScrollReveal>
              ))}
            </div>
          ) : (
            <p className="mt-16 text-text2">No posts yet.</p>
          )}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}