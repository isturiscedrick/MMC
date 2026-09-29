"use client";

import { useEffect, useState } from "react";
import { Icon } from "./Icons";

export function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <a
      href="#top"
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center bg-brand text-white shadow-lg transition hover:opacity-90 motion-safe:hover:-translate-y-0.5"
    >
      <Icon name="arrow-up" className="h-5 w-5" />
    </a>
  );
}