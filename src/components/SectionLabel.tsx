type SectionLabelProps = {
  index: string;
  label: string;
  className?: string;
};

export function SectionLabel({ index, label, className = "" }: SectionLabelProps) {
  return (
    <p className={`font-mono-label text-muted ${className}`}>
      <span className="text-accent">{index}</span>
      <span className="mx-2 text-border">—</span>
      {label}
    </p>
  );
}