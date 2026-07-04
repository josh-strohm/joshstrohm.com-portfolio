import Link from "next/link";

type ArrowLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
};

export function ArrowLink({
  href,
  children,
  className = "",
  external = false,
}: ArrowLinkProps) {
  const classes = `group inline-flex items-center gap-2 font-medium text-text link-underline transition-colors duration-150 hover:text-accent focus-visible:text-accent ${className}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        <span>{children}</span>
        <span
          className="inline-block transition-transform duration-150 group-hover:translate-x-1 motion-reduce:transition-none"
          aria-hidden="true"
        >
          →
        </span>
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      <span>{children}</span>
      <span
        className="inline-block transition-transform duration-150 group-hover:translate-x-1 motion-reduce:transition-none"
        aria-hidden="true"
      >
        →
      </span>
    </Link>
  );
}