import type { Metadata } from "next";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CtaBanner } from "@/components/CtaBanner";
import { services } from "@/lib/data/services";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Services",
  "AI agents, custom CRMs, and high-performance websites for service businesses.",
  "/services"
);

export default function ServicesPage() {
  return (
    <>
      <section className="section-padding pt-32 md:pt-40">
        <div className="container-content">
          <p className="font-mono-label mb-6 text-muted">Services</p>
          <h1 className="font-display text-section max-w-2xl font-semibold text-text">
            What I take on.
          </h1>
          <p className="mt-6 max-w-xl text-text2">
            Three lanes. Each one ends with something running in production —
            not a slide deck.
          </p>

          <div className="mt-20 divide-y divide-border">
            {services.map((service, i) => (
              <ScrollReveal key={service.index} delay={i * 80}>
                <div className="py-12 md:py-16">
                  <div className="grid gap-8 md:grid-cols-12">
                    <div className="md:col-span-1">
                      <span className="font-mono-label text-accent">
                        {service.index}
                      </span>
                    </div>
                    <div className="md:col-span-4">
                      <h2 className="font-display text-2xl font-semibold tracking-tight text-text">
                        {service.name}
                      </h2>
                      <p className="mt-4 text-text2">{service.description}</p>
                    </div>
                    <div className="md:col-span-3">
                      <h3 className="font-mono-label mb-4 text-muted">
                        Deliverables
                      </h3>
                      <ul className="space-y-2">
                        {service.deliverables.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-sm text-text2"
                          >
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="md:col-span-4">
                      <h3 className="font-mono-label mb-4 text-muted">Stack</h3>
                      <div className="flex flex-wrap gap-2">
                        {service.stack.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-border bg-surface px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-muted"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}