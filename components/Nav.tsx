"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Icon } from "./Icons";
import { company } from "@/lib/content";

const links = [
  ["About", "#about"],
  ["Team", "#team"],
  ["Industries", "#industries"],
  ["Careers", "#careers"],
  ["Contact", "#contact"],
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const menuRef = useRef<HTMLDetailsElement>(null);

  // Track which section is in view. The hero clears the highlight.
  useEffect(() => {
    const ids = ["hero", ...links.map(([, h]) => h.slice(1))];
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id === "hero" ? "" : `#${e.target.id}`);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Close the mobile menu on outside tap or Escape
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        menuRef.current?.querySelector<HTMLElement>("summary")?.focus();
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy/95 text-white backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#top" className="flex items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white">
            <Image src="/images/logo.png" alt="" width={44} height={32} className="h-6 w-auto" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-xl font-bold uppercase tracking-wide">{company.short}</span>
            <span className="mono-label hidden text-[0.6rem]! text-white/60 lg:block">{company.name}</span>
          </span>
        </a>
        <nav aria-label="Primary" className="hidden gap-7 text-sm font-semibold md:flex">
          {links.filter(([, h]) => h !== "#contact").map(([l, h]) => (
            <a key={h} href={h}
              aria-current={active === h ? "true" : undefined}
              className={`border-b-2 py-1 transition-colors hover:text-brand ${active === h ? "border-brand text-white" : "border-transparent text-white/80"}`}
            >
              {l}
            </a>
          ))}
        </nav>

        <a href="#contact"
          className="mono-label hidden items-center gap-2 bg-brand px-5 py-2.5 text-white transition hover:-translate-y-0.5 hover:opacity-90 md:inline-flex"
        >
          Contact us
          <Icon name="arrow-right" className="h-3.5 w-3.5" />
        </a>
        <details
          ref={menuRef}
          className="relative md:hidden"
          open={open}
          onToggle={(e) => setOpen(e.currentTarget.open)}
        >
          <summary className="flex min-h-11 cursor-pointer list-none items-center gap-2 border border-white/30 px-4 text-sm hover:bg-white/10">
            <Icon name={open ? "x" : "menu"} className="h-4 w-4" />
            Menu
          </summary>
          <nav aria-label="Mobile" className="absolute right-0 mt-2 flex w-52 flex-col gap-1 border border-white/10 bg-navy-2 p-2 text-sm shadow-xl">
            {links.map(([l, h]) => (
              <a key={h} href={h}
                onClick={() => setOpen(false)}
                aria-current={active === h ? "true" : undefined}
                className={`flex min-h-11 items-center px-3 hover:bg-white/10 ${active === h ? "text-brand" : "text-white"}`}
              >
                {l}
              </a>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}