"use client";

import { useEffect, useRef, type RefObject } from "react";

type HeroDotGridProps = {
  boundsRef: RefObject<HTMLElement | null>;
};

export function HeroDotGrid({ boundsRef }: HeroDotGridProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    const bounds = boundsRef.current;
    if (!canvas || !container || !bounds) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const spacing = 32;
    let drift = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2);
      const w = bounds.offsetWidth;
      const h = bounds.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      const w = bounds.offsetWidth;
      const h = bounds.offsetHeight;

      ctx.clearRect(0, 0, w, h);

      if (!prefersReduced) {
        drift += 0.15;
      }

      const cols = Math.ceil(w / spacing) + 2;
      const rows = Math.ceil(h / spacing) + 2;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const baseX = i * spacing - spacing / 2;
          const baseY =
            j * spacing -
            spacing / 2 +
            (prefersReduced
              ? 0
              : Math.sin(drift * 0.01 + i * 0.3 + j * 0.2) * 3);

          const dx = baseX - mx;
          const dy = baseY - my;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const proximity = Math.max(0, 1 - dist / 180);

          const baseOpacity = 0.12;
          const opacity = baseOpacity + proximity * 0.5;
          const radius = 1 + proximity * 1.2;

          ctx.beginPath();
          ctx.arc(baseX, baseY, radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(18, 145, 176, ${opacity * 0.6})`;
          ctx.fill();

          if (proximity > 0.1) {
            ctx.beginPath();
            ctx.arc(baseX, baseY, radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(244, 244, 245, ${opacity * 0.3})`;
            ctx.fill();
          }
        }
      }

      frameRef.current = requestAnimationFrame(draw);
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = bounds.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        mouseRef.current = { x, y };
      } else {
        mouseRef.current = { x: -1000, y: -1000 };
      }
    };

    resize();
    draw();

    const observer = new ResizeObserver(resize);
    observer.observe(bounds);

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    return () => {
      cancelAnimationFrame(frameRef.current);
      observer.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [boundsRef]);

  return (
    <div ref={containerRef} className="pointer-events-none absolute inset-0">
      <canvas
        ref={canvasRef}
        className="h-full w-full opacity-60"
        aria-hidden="true"
      />
    </div>
  );
}