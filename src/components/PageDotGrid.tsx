"use client";

import { useRef } from "react";
import { HeroDotGrid } from "./HeroDotGrid";

export function PageDotGrid({ children }: { children: React.ReactNode }) {
  const boundsRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={boundsRef} className="relative min-h-screen">
      <HeroDotGrid boundsRef={boundsRef} />
      <div className="relative z-10">{children}</div>
    </div>
  );
}