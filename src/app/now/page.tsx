import type { Metadata } from "next";
import { ArrowLink } from "@/components/ArrowLink";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Now",
  "What Josh Strohm is working on right now.",
  "/now"
);

// PLACEHOLDER: Update this page regularly with current focus
const nowItems = [
  {
    date: "2026-07",
    text: "Shipping intake automation for two HVAC clients — missed-call text-back and CRM sync.",
  },
  {
    date: "2026-06",
    text: "Extending Hermes with document parsing for contract review and scope extraction.",
  },
  {
    date: "2026-05",
    text: "Building Rhyme CRM v2 — pipeline views and automated follow-up sequences.",
  },
];

export default function NowPage() {
  return (
    <section className="section-padding pt-32 md:pt-40">
      <div className="container-content max-w-2xl">
        <p className="font-mono-label mb-6 text-muted">Now</p>
        <h1 className="font-display text-section font-semibold text-text">
          What I&apos;m working on.
        </h1>
        <p className="mt-6 text-text2">
          A short, current list. Updated when things change.
        </p>

        <ul className="mt-16 space-y-0 divide-y divide-border">
          {nowItems.map((item) => (
            <li key={item.date} className="py-8">
              <p className="font-mono-label mb-3 text-accent">{item.date}</p>
              <p className="text-text2">{item.text}</p>
            </li>
          ))}
        </ul>

        <p className="mt-12 font-mono-label text-muted">
          Last updated: July 2026
        </p>

        <div className="mt-8">
          <ArrowLink href="/contact">Get in touch</ArrowLink>
        </div>
      </div>
    </section>
  );
}