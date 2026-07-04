import type { Metadata } from "next";
import { BusinessCard } from "@/components/BusinessCard";
import { CtaBanner } from "@/components/CtaBanner";
import { ScrollReveal } from "@/components/ScrollReveal";
import { businesses } from "@/lib/data/businesses";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Businesses",
  "Strohm Partners and Strohm Media — the companies Josh Strohm runs.",
  "/businesses"
);

export default function BusinessesPage() {
  return (
    <>
      <section className="section-padding pt-32 md:pt-40">
        <div className="container-content">
          <ScrollReveal>
            <p className="font-mono-label mb-6 text-muted">Businesses</p>
            <h1 className="font-display text-section max-w-3xl font-semibold text-text">
              What I run.
            </h1>
            <p className="mt-6 max-w-xl text-text2">
              Two practices, one operator. Automation consulting through Strohm
              Partners. Web and brand work through Strohm Media.
            </p>
          </ScrollReveal>

          <div className="mt-16 flex flex-col gap-6">
            {businesses.map((business, i) => (
              <ScrollReveal key={business.name} delay={i * 80}>
                <BusinessCard business={business} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}