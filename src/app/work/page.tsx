import type { Metadata } from "next";
import { ProjectCard } from "@/components/ProjectCard";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CtaBanner } from "@/components/CtaBanner";
import { getAllProjects } from "@/lib/data/projects";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Work",
  "Production AI systems, custom CRMs, and automation builds for service businesses.",
  "/work"
);

export default function WorkPage() {
  const projects = getAllProjects();

  return (
    <>
      <section className="section-padding pt-32 md:pt-40">
        <div className="container-content">
          <p className="font-mono-label mb-6 text-muted">Work</p>
          <h1 className="font-display text-section max-w-3xl font-semibold text-text">
            Built to be used, not demoed.
          </h1>
          <p className="mt-6 max-w-xl text-text2">
            Every project here runs in production. Metrics are real. Placeholder
            copy is marked in source — swap before launch.
          </p>

          <div className="mt-16 flex flex-col gap-6">
            {projects.map((project, i) => (
              <ScrollReveal key={project.slug} delay={i * 60}>
                <ProjectCard project={project} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}