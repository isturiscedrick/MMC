"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const links = [
  ["About", "#about"],
  ["Team", "#team"],
  ["Industries", "#industries"],
  ["Clients", "#clients"],
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
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#top" className="flex items-center gap-3 font-semibold">
          <Image src="/images/logo.png" alt="" width={44} height={32} className="h-8 w-auto" />
          MMC
        </a>
        <nav aria-label="Primary" className="hidden gap-6 text-sm text-zinc-300 md:flex">
          {links.filter(([, h]) => h !== "#contact").map(([l, h]) => (
            <a key={h} href={h}
              aria-current={active === h ? "true" : undefined}
              className={`border-b-2 py-1 transition-colors hover:text-brand ${active === h ? "border-brand text-brand" : "border-transparent"}`}
            >
              {l}
            </a>
          ))}
        </nav>
        
        <a href="#contact"
          className="mono-label hidden rounded-full bg-brand px-5 py-2 text-white transition hover:-translate-y-0.5 hover:opacity-90 md:inline-flex"
        >
          Contact us
        </a>
        <details
          ref={menuRef}
          className="relative md:hidden"
          open={open}
          onToggle={(e) => setOpen(e.currentTarget.open)}
        >
          <summary className="flex min-h-11 cursor-pointer list-none items-center rounded-lg border border-white/20 px-4 text-sm hover:bg-white/10">
            Menu
          </summary>
          <nav aria-label="Mobile" className="absolute right-0 mt-2 flex w-52 flex-col gap-1 rounded-xl bg-panel p-2 text-sm shadow-xl">
            {links.map(([l, h]) => (
              <a key={h} href={h}
                onClick={() => setOpen(false)}
                aria-current={active === h ? "true" : undefined}
                className={`flex min-h-11 items-center rounded-lg px-3 hover:bg-white/10 ${active === h ? "text-brand" : ""}`}
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