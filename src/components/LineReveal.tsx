"use client";

type LineRevealProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

export function LineReveal({
  children,
  delay = 0,
  className = "",
}: LineRevealProps) {
  return (
    <span className={`line-reveal-mask ${className}`}>
      <span
        className="line-reveal-inner"
        style={{ animationDelay: `${delay}ms` }}
      >
        {children}
      </span>
    </span>
  );
}