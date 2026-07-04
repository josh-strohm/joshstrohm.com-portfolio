import { LineReveal } from "@/components/LineReveal";
import { SectionLabel } from "@/components/SectionLabel";
import { ArrowLink } from "@/components/ArrowLink";
import { Button } from "@/components/Button";
import { ProjectCard } from "@/components/ProjectCard";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CtaBanner } from "@/components/CtaBanner";
import { getFeaturedProjects } from "@/lib/data/projects";
import { services } from "@/lib/data/services";
import Link from "next/link";

export default function HomePage() {
  const projects = getFeaturedProjects();

  return (
    <>
      {/* 01 — HERO */}
      <section className="flex min-h-[90vh] items-center">
        <div className="container-content py-32 md:py-40">
          <p className="font-mono-label mb-8 text-muted">
            AI Automation Consultant — Altoona, PA
          </p>

          <h1 className="font-display text-hero max-w-4xl font-bold text-text">
            <LineReveal delay={0}>
              I build AI systems
            </LineReveal>
            <LineReveal delay={120} className="mt-[0.03em]">
              that do{" "}
              <span className="text-accent">real work</span>.
            </LineReveal>
          </h1>

          <p className="mt-8 max-w-xl text-lg text-text2">
            Custom agents, automations, and CRMs for service businesses that are
            done losing time to manual chaos.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button href="/work" variant="primary">
              See the work →
            </Button>
            <Button href="/contact" variant="secondary">
              Get in touch
            </Button>
          </div>

          <div className="mt-12 flex items-center gap-3">
            <span
              className="availability-pulse h-2 w-2 rounded-full bg-accent"
              aria-hidden="true"
            />
            <p className="font-mono-label text-text2">
              Available for new projects
            </p>
          </div>
        </div>
      </section>

      {/* 02 — SELECTED WORK */}
      <section className="section-padding hairline-top" aria-labelledby="work-heading">
        <div className="container-content">
          <ScrollReveal>
            <SectionLabel index="02" label="Selected Work" className="mb-6" />
            <h2
              id="work-heading"
              className="font-display text-section max-w-2xl font-semibold text-text"
            >
              Built to be used, not demoed.
            </h2>
          </ScrollReveal>

          <div className="mt-16 flex flex-col gap-6">
            {projects.map((project, i) => (
              <ScrollReveal key={project.slug} delay={i * 80}>
                <ProjectCard project={project} />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="mt-12">
            <ArrowLink href="/work">All work</ArrowLink>
          </ScrollReveal>
        </div>
      </section>

      {/* 03 — SERVICES SNAPSHOT */}
      <section className="section-padding hairline-top" aria-labelledby="services-heading">
        <div className="container-content">
          <ScrollReveal>
            <SectionLabel index="03" label="Services" className="mb-6" />
            <h2
              id="services-heading"
              className="font-display text-section font-semibold text-text"
            >
              What I take on.
            </h2>
          </ScrollReveal>

          <div className="mt-12 divide-y divide-border">
            {services.map((service, i) => (
              <ScrollReveal key={service.index} delay={i * 60}>
                <Link
                  href="/services"
                  className="group flex flex-col gap-2 py-8 transition-colors hover:text-accent md:flex-row md:items-center md:justify-between"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono-label text-muted">
                      {service.index}
                    </span>
                    <h3 className="font-display text-xl font-semibold tracking-tight text-text transition-colors group-hover:text-accent">
                      {service.name}
                    </h3>
                  </div>
                  <p className="max-w-md text-text2 md:text-right">
                    {service.description}
                  </p>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="mt-8">
            <ArrowLink href="/services">All services</ArrowLink>
          </ScrollReveal>
        </div>
      </section>

      {/* 04 — ABOUT TEASER */}
      <section className="section-padding hairline-top" aria-labelledby="about-heading">
        <div className="container-content">
          <ScrollReveal>
            <SectionLabel index="04" label="About" className="mb-6" />
            <h2
              id="about-heading"
              className="sr-only"
            >
              About Josh Strohm
            </h2>
            <p className="max-w-2xl text-lg text-text2">
              Sixteen years in client service and technical operations taught me
              what businesses actually need — not what slides well in a pitch
              deck. I founded Strohm Partners to build production-grade automation
              for small service businesses. The systems I ship are the ones I run
              myself.
            </p>
            <div className="mt-8">
              <ArrowLink href="/about">More about me</ArrowLink>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}