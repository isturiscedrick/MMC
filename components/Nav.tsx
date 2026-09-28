"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    const els = links
      .map(([, h]) => document.getElementById(h.slice(1)))
      .filter((el): el is HTMLElement => el !== null);

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#top" className="flex items-center gap-3 font-semibold">
          <Image src="/images/logo.png" alt="Megatekton logo" width={44} height={32} className="h-8 w-auto" />
          MMC
        </a>
        <nav aria-label="Primary" className="hidden gap-6 text-sm text-zinc-300 md:flex">
          {links.filter(([, h]) => h !== "#contact").map(([l, h]) => (
            <a key={h} href={h}
              aria-current={active === h ? "true" : undefined}
              className={`transition-colors hover:text-brand ${active === h ? "text-brand" : ""}`}
            >
              {l}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="mono-label hidden rounded-full bg-brand px-5 py-2 text-white transition hover:-translate-y-0.5 hover:opacity-90 md:inline-flex"
        >
          Contact us
        </a>
        <details
          className="relative md:hidden"
          open={open}
          onToggle={(e) => setOpen(e.currentTarget.open)}
        >
          <summary className="cursor-pointer list-none rounded-lg border border-white/20 px-3 py-1.5 text-sm hover:bg-white/10">
            Menu
          </summary>
          <nav aria-label="Mobile" className="absolute right-0 mt-2 flex w-48 flex-col gap-1 rounded-xl bg-panel p-3 text-sm shadow-xl">
            {links.map(([l, h]) => (
              <a key={h} href={h}
                onClick={() => setOpen(false)}
                aria-current={active === h ? "true" : undefined}
                className={`rounded-lg px-3 py-2 hover:bg-white/10 ${active === h ? "text-brand" : ""}`}
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