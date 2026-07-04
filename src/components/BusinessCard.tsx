import type { Business } from "@/lib/data/businesses";

type BusinessCardProps = {
  business: Business;
};

export function BusinessCard({ business }: BusinessCardProps) {
  return (
    <a
      href={business.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block focus-visible:outline-none"
    >
      <article className="crosshair-corners relative overflow-hidden rounded-[var(--radius-card)] bg-surface p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/15 hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 md:p-10">
        <div className="hairline-border absolute inset-0 rounded-[var(--radius-card)] transition-colors duration-200 group-hover:border-white/15" />

        <div className="relative z-10 flex flex-col gap-6">
          <div>
            <p className="font-mono-label mb-4 text-muted">
              <span className="text-accent">{business.index}</span>
              <span className="mx-2">—</span>
              {business.tags[0]}
            </p>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-text transition-colors group-hover:text-accent md:text-3xl">
              {business.name}
            </h2>
            <p className="mt-2 font-mono-label text-accent">{business.tagline}</p>
            <p className="mt-4 max-w-2xl text-text2">{business.description}</p>
          </div>

          <ul className="space-y-2">
            {business.focus.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm text-text2"
              >
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
            <div className="flex flex-wrap gap-2">
              {business.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono-label text-[10px] text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
            <span className="font-mono-label text-accent transition-transform duration-150 group-hover:translate-x-1 motion-reduce:transition-none">
              Visit site →
            </span>
          </div>
        </div>
      </article>
    </a>
  );
}