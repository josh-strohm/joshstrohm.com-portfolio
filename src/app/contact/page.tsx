import type { Metadata } from "next";
import { ArrowLink } from "@/components/ArrowLink";
import { ContactForm } from "@/components/ContactForm";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CtaBanner } from "@/components/CtaBanner";
import { site } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Contact",
  "Get in touch with Josh Strohm for AI automation, custom CRMs, and web projects.",
  "/contact"
);

export default function ContactPage() {
  return (
    <>
      <section className="section-padding pt-32 md:pt-40">
        <div className="container-content">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="font-mono-label mb-6 text-muted">Contact</p>
              <h1 className="font-display text-section font-semibold text-text">
                Let&apos;s build something that works.
              </h1>
              <p className="mt-6 text-text2">
                Tell me what you&apos;re dealing with. I&apos;ll read it, reply
                honestly, and let you know if I can help — usually within 24
                hours.
              </p>

              <div className="mt-10 space-y-4">
                <div>
                  <p className="font-mono-label mb-1 text-muted">Email</p>
                  <a
                    href={`mailto:${site.email}`}
                    className="text-lg text-accent link-underline transition-colors hover:brightness-110"
                  >
                    {site.email}
                  </a>
                </div>
                <p className="font-mono-label text-muted">
                  I reply within 24 hours
                </p>
                <div className="space-y-1">
                  <ArrowLink href="/calendar">Book a call</ArrowLink>
                  <p className="font-mono-label text-muted">
                    30-minute intro — pick a time that works
                  </p>
                </div>
              </div>

              <ScrollReveal className="mt-12">
                <p className="font-mono-label mb-4 text-muted">Elsewhere</p>
                <p className="font-mono-label flex flex-wrap items-center gap-x-3 gap-y-2 text-text2">
                  <a
                    href={site.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline transition-colors hover:text-accent"
                  >
                    Linkedin
                  </a>
                  <span className="text-muted" aria-hidden="true">
                    —
                  </span>
                  <a
                    href={site.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline transition-colors hover:text-accent"
                  >
                    Github
                  </a>
                  <span className="text-muted" aria-hidden="true">
                    —
                  </span>
                  <a
                    href={site.social.x}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline transition-colors hover:text-accent"
                  >
                    Twitter/X
                  </a>
                </p>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={100}>
              <ContactForm />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <CtaBanner
        eyebrow="Prefer a call?"
        title="Schedule time on my calendar."
        description="Book a slot and we'll talk through what you're working on — no back-and-forth required."
        buttonText="Book now"
        buttonHref="/calendar"
        className="-mt-8 !pt-16 md:-mt-12 md:!pt-20"
      />
    </>
  );
}