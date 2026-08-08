"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export type CaseStudyNavItem = {
  id: string;
  label: string;
};

type CaseStudyNavProps = {
  items: CaseStudyNavItem[];
  title?: string;
};

export function CaseStudyNav({ items, title }: CaseStudyNavProps) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const sectionElements = items
      .map(({ id }) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sectionElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0, 0.1, 0.25, 0.5],
      }
    );

    sectionElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    setActiveId(id);
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const navLinkClass = (id: string) =>
    cn(
      "group relative w-full rounded-md px-3 py-2 text-left text-sm transition-colors",
      activeId === id
        ? "font-medium text-primary"
        : "text-muted-foreground hover:text-foreground"
    );

  return (
    <>
      {/* Desktop sidebar */}
      <aside
        aria-label={title}
        className="fixed left-8 top-[120px] z-40 hidden w-44 xl:block 2xl:left-16 2xl:w-48"
      >
        {title && (
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {title}
          </p>
        )}
        <nav className="space-y-0.5 border-l border-border pl-3">
          {items.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              onClick={() => scrollToSection(id)}
              className={navLinkClass(id)}
            >
              <span
                className={cn(
                  "absolute -left-3 top-1/2 h-5 w-0.5 -translate-y-1/2 rounded-full bg-primary transition-opacity",
                  activeId === id ? "opacity-100" : "opacity-0 group-hover:opacity-40"
                )}
                aria-hidden
              />
              {label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Mobile / tablet sticky nav */}
      <div className="sticky top-[84px] z-40  bg-secondary/30 backdrop-blur-md xl:hidden py-14 mt-14">
      {title && (
          <p className="mx-auto max-w-6xl px-4 mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {title}:
          </p>
        )}
        <nav
          aria-label={title}
          className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4 py-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {items.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              onClick={() => scrollToSection(id)}
              className={cn(
                "shrink-0 rounded-full px-3 py-1.5 text-xs font-medium transition-colors",
                activeId === id
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              )}
            >
              {label}
            </button>
          ))}
        </nav>
      </div>
    </>
  );
}
