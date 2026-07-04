import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="hairline-top">
      <div className="container-content flex flex-col gap-6 py-12 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-2">
          <Link
            href="/"
            className="font-display text-base font-semibold tracking-tight text-text transition-colors hover:text-accent"
          >
            {site.name}
          </Link>
          <p className="font-mono-label text-muted">
            © {year} {site.name}
          </p>
        </div>

        <div className="flex flex-col gap-2 md:items-end">
          <p className="font-mono-label text-muted">{site.location}</p>
          <a
            href="#top"
            className="font-mono-label text-accent link-underline transition-colors hover:brightness-110"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}