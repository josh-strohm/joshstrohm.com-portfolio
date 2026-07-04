import Link from "next/link";
import type { Project } from "@/lib/data/projects";

type ProjectCardProps = {
  project: Project;
  delay?: number;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const content = (
    <article className="crosshair-corners group relative overflow-hidden rounded-[var(--radius-card)] bg-surface p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/15 hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 md:p-10">
      <div className="hairline-border absolute inset-0 rounded-[var(--radius-card)] transition-colors duration-200 group-hover:border-white/15" />

      <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <div className="flex-1">
          <p className="font-mono-label mb-4 text-muted">
            <span className="text-accent">{project.index}</span>
            <span className="mx-2">—</span>
            {project.tags[0]}
          </p>
          <h3 className="font-display text-2xl font-semibold tracking-tight text-text transition-colors group-hover:text-accent md:text-3xl">
            {project.name}
          </h3>
          <p className="mt-3 max-w-xl text-text2">{project.outcome}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.metrics.map((metric) => (
              <span
                key={metric}
                className="rounded-full border border-border bg-surface2 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-text2"
              >
                {metric}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-start gap-4 md:items-end">
          <div className="flex flex-wrap gap-2 md:justify-end">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono-label text-[10px] text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
          {project.hasCaseStudy && (
            <span className="font-mono-label text-accent opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100">
              View case study →
            </span>
          )}
        </div>
      </div>
    </article>
  );

  if (project.hasCaseStudy) {
    return (
      <Link
        href={`/work/${project.slug}`}
        className="block focus-visible:outline-none"
      >
        {content}
      </Link>
    );
  }

  return content;
}