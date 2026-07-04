import type { Metadata } from "next";
import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CtaBanner } from "@/components/CtaBanner";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "About",
  "Josh Strohm — AI automation consultant building production systems for service businesses.",
  "/about"
);

const principles = [
  "Outcomes over hours",
  "No black boxes",
  "Start small, scale fast",
  "Honest over comfortable",
];

// PLACEHOLDER: Replace with real writing links before launch
const writing = [
  { title: "Why I stopped selling AI demos", date: "2026-01-15" },
  { title: "The real cost of manual follow-up", date: "2025-11-02" },
  { title: "Building CRMs that teams actually use", date: "2025-09-18" },
];

export default function AboutPage() {
  return (
    <>
      <section className="section-padding pt-32 md:pt-40">
        <div className="container-content">
          <p className="font-mono-label mb-6 text-muted">About</p>
          <h1 className="font-display text-section max-w-3xl font-semibold text-text">
            The person behind the systems.
          </h1>

          <div className="mt-16 grid gap-12 md:grid-cols-12 md:gap-16">
            <ScrollReveal className="md:col-span-5">
              <div className="crosshair-corners relative aspect-[4/5] overflow-hidden rounded-[var(--radius-card)] bg-surface">
                <Image
                  src="/assets/joshstrohm-portfolio-image.png"
                  alt="Josh Strohm"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 420px"
                  priority
                />
              </div>
            </ScrollReveal>

            {/* Bio */}
            <ScrollReveal className="md:col-span-7" delay={100}>
              <div className="space-y-6 text-text2">
                <p>
                  I&apos;m Josh Strohm — founder of Strohm Partners LLC and Strohm
                  Media, based in Altoona, PA and working remote with clients
                  nationwide.
                </p>
                <p>
                  Sixteen years in client service and technical operations gave
                  me a clear picture of where small businesses bleed time: manual
                  follow-up, disconnected tools, and processes that depend on
                  someone remembering to do the thing. I started this practice
                  to fix that with systems that actually run.
                </p>
                <p>
                  I build custom AI agents, automations, CRMs, and websites for
                  service businesses — HVAC, plumbing, legal, dental, consulting.
                  Every system I ship is one I&apos;d run myself. Hermes, my
                  personal AI employee, handles my own back office. That&apos;s
                  the bar.
                </p>
                <p>
                  No hype. No black boxes. If something won&apos;t work for your
                  business, I&apos;ll tell you before we start.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Principles */}
          <ScrollReveal className="mt-20">
            <h2 className="font-mono-label mb-8 text-muted">Principles</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {principles.map((principle) => (
                <div
                  key={principle}
                  className="hairline-border rounded-[var(--radius-card)] bg-surface px-6 py-5"
                >
                  <p className="font-mono-label text-text">{principle}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Writing — PLACEHOLDER */}
          <ScrollReveal className="mt-20">
            <h2 className="font-mono-label mb-2 text-muted">Writing</h2>
            <p className="mb-8 text-sm text-muted">
              {/* PLACEHOLDER: Replace with real posts */}
              Placeholder links — add real URLs before launch.
            </p>
            <ul className="divide-y divide-border">
              {writing.map((post) => (
                <li key={post.title}>
                  <span className="flex flex-col gap-1 py-5 sm:flex-row sm:items-center sm:justify-between">
                    <span className="text-text transition-colors hover:text-accent">
                      {post.title}
                    </span>
                    <span className="font-mono-label text-muted">
                      {post.date}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}