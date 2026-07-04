import type { Metadata } from "next";
import { ArrowLink } from "@/components/ArrowLink";
import { ScrollReveal } from "@/components/ScrollReveal";
import { site } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Schedule",
  "Book a consultation with Josh Strohm — AI automation, custom systems, and web projects.",
  "/calendar"
);

export default function CalendarPage() {
  return (
    <section className="section-padding pt-32 md:pt-40">
      <div className="container-content">
        <ScrollReveal>
          <p className="font-mono-label mb-6 text-muted">Schedule</p>
          <h1 className="font-display text-section max-w-2xl font-semibold text-text">
            Book a time.
          </h1>
          <p className="mt-6 max-w-xl text-text2">
            Pick a slot that works for you. We&apos;ll use the call to understand
            what you need and whether I can help.
          </p>
        </ScrollReveal>

        <ScrollReveal className="mt-12" delay={80}>
          <div className="crosshair-corners overflow-hidden rounded-[var(--radius-card)] border border-white/10 bg-white">
            <iframe
              src={site.calendarEmbedUrl}
              title="Schedule an appointment with Josh Strohm"
              className="h-[600px] w-full border-0 bg-white md:h-[700px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal className="mt-10">
          <p className="text-sm text-text2">
            Prefer email?{" "}
            <a
              href={`mailto:${site.email}`}
              className="text-accent link-underline transition-colors hover:brightness-110"
            >
              {site.email}
            </a>
          </p>
          <div className="mt-6">
            <ArrowLink href="/contact">Contact page</ArrowLink>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}