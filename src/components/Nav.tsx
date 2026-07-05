"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/work", label: "Work" },
  { href: "/blog", label: "Blog" },
  { href: "/services", label: "Services" },
  { href: "/businesses", label: "Businesses" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function isActive(pathname: string, href: string) {
  if (href === "/work") return pathname.startsWith("/work");
  if (href === "/blog") return pathname.startsWith("/blog");
  return pathname === href;
}

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-200 motion-reduce:transition-none ${
        scrolled
          ? "border-b border-border bg-bg/80 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav
        className="container-content flex h-16 items-center justify-between md:h-20"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="font-display text-base font-semibold tracking-tight text-text transition-colors hover:text-accent md:text-lg"
        >
          Josh Strohm
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative font-mono-label text-[11px] transition-colors duration-150 hover:text-text ${
                    active ? "text-text" : "text-text2"
                  }`}
                >
                  {link.label}
                  {active && (
                    <span
                      className="absolute -bottom-1.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-accent"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-button)] hairline-border text-text2 transition-colors hover:text-text md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span className="sr-only">{menuOpen ? "Close" : "Menu"}</span>
          <svg
            width="18"
            height="14"
            viewBox="0 0 18 14"
            fill="none"
            aria-hidden="true"
          >
            {menuOpen ? (
              <path
                d="M1 1l16 12M17 1L1 13"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            ) : (
              <>
                <path d="M0 1h18" stroke="currentColor" strokeWidth="1.5" />
                <path d="M0 7h18" stroke="currentColor" strokeWidth="1.5" />
                <path d="M0 13h18" stroke="currentColor" strokeWidth="1.5" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-0 top-16 z-40 bg-bg/95 backdrop-blur-lg md:hidden"
        >
          <ul className="container-content flex flex-col gap-1 py-8">
            {links.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`flex items-center gap-3 py-4 font-display text-2xl font-semibold tracking-tight transition-colors ${
                      active ? "text-accent" : "text-text hover:text-accent"
                    }`}
                  >
                    {link.label}
                    {active && (
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}