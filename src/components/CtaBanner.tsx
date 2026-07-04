import { ScrollReveal } from "./ScrollReveal";
import { Button } from "./Button";

type CtaBannerProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  className?: string;
};

export function CtaBanner({
  eyebrow = "Ready?",
  title = "Let's build something that works.",
  description = "Tell me what you need. I'll tell you honestly if I can help.",
  buttonText = "Get in touch",
  buttonHref = "/contact",
  className = "",
}: CtaBannerProps) {
  return (
    <section
      className={`section-padding ${className}`}
      aria-labelledby="cta-heading"
    >
      <div className="container-content">
        <ScrollReveal>
          <div className="crosshair-corners relative overflow-hidden rounded-[var(--radius-card)] bg-surface px-8 py-16 md:px-16 md:py-20">
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #F4F4F5 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
              aria-hidden="true"
            />
            <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-lg">
                <p className="font-mono-label mb-4 text-muted">{eyebrow}</p>
                <h2
                  id="cta-heading"
                  className="font-display text-section font-semibold text-text"
                >
                  {title}
                </h2>
                <p className="mt-4 text-text2">{description}</p>
              </div>
              <Button href={buttonHref} variant="primary">
                {buttonText}
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}