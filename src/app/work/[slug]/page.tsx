import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";
import { ArrowLink } from "@/components/ArrowLink";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CtaBanner } from "@/components/CtaBanner";
import {
  getCaseStudySlugs,
  getNextProject,
  getProjectBySlug,
} from "@/lib/data/projects";
import { pageMetadata } from "@/lib/metadata";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return pageMetadata(
    project.name,
    project.outcome,
    `/work/${slug}`
  );
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project || !project.hasCaseStudy) {
    notFound();
  }

  const nextProject = getNextProject(slug);

  return (
    <>
      <article className="section-padding pt-32 md:pt-40">
        <div className="container-content">
          {/* Hero */}
          <header className="max-w-3xl">
            <p className="font-mono-label mb-6 text-muted">
              <span className="text-accent">{project.index}</span>
              <span className="mx-2">—</span>
              Case Study
            </p>
            <h1 className="font-display text-section font-semibold text-text">
              {project.heroTitle}
            </h1>
            <p className="mt-4 text-xl text-text2">{project.heroSubtitle}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono-label text-[10px] text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </header>

          {/* Context */}
          <ScrollReveal className="mt-20 max-w-2xl">
            <h2 className="font-mono-label mb-4 text-muted">Context</h2>
            <p className="text-text2">{project.context}</p>
          </ScrollReveal>

          {/* Problem */}
          <ScrollReveal className="mt-16 max-w-2xl">
            <h2 className="font-mono-label mb-4 text-muted">Problem</h2>
            <p className="text-text2">{project.problem}</p>
          </ScrollReveal>

          {/* What I built */}
          <ScrollReveal className="mt-16">
            <h2 className="font-mono-label mb-4 text-muted">What I built</h2>
            <p className="mb-10 max-w-2xl text-text2">{project.solution}</p>
            <ArchitectureDiagram
              nodes={project.architecture.nodes}
              edges={project.architecture.edges}
            />
          </ScrollReveal>

          {/* Results */}
          <ScrollReveal className="mt-16">
            <h2 className="font-mono-label mb-8 text-muted">Results</h2>
            <div className="grid gap-6 sm:grid-cols-3">
              {project.results.map((result) => (
                <div
                  key={result.label}
                  className="crosshair-corners rounded-[var(--radius-card)] bg-surface p-6"
                >
                  <p className="font-display text-3xl font-semibold text-accent">
                    {result.value}
                  </p>
                  <p className="mt-2 font-mono-label text-muted">
                    {result.label}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Stack */}
          <ScrollReveal className="mt-16">
            <h2 className="font-mono-label mb-6 text-muted">Stack</h2>
            <ul className="flex flex-wrap gap-3">
              {project.stack.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-border bg-surface2 px-4 py-2 font-mono text-xs uppercase tracking-wider text-text2"
                >
                  {item}
                </li>
              ))}
            </ul>
          </ScrollReveal>

          {/* Next project */}
          {nextProject && (
            <ScrollReveal className="mt-20 hairline-top pt-12">
              <p className="font-mono-label mb-4 text-muted">Next project</p>
              <Link
                href={`/work/${nextProject.slug}`}
                className="group inline-block"
              >
                <span className="font-display text-2xl font-semibold text-text transition-colors group-hover:text-accent">
                  {nextProject.name}
                </span>
                <span className="mt-2 block text-text2">{nextProject.outcome}</span>
              </Link>
            </ScrollReveal>
          )}

          <ScrollReveal className="mt-12">
            <ArrowLink href="/work">All work</ArrowLink>
          </ScrollReveal>
        </div>
      </article>

      <CtaBanner />
    </>
  );
}