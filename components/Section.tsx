import { Reveal } from "./Reveal";

export function Section({ id, eyebrow, title, children, className = "" }: { id: string; eyebrow: string; title: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={`scroll-mt-20 px-6 py-20 ${className}`}>
      <Reveal className="mx-auto max-w-6xl">
        <p className="mono-label text-brand">{eyebrow}</p>
        <h2 className="mt-2 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
        <div className="mt-10">{children}</div>
      </Reveal>
    </section>
  );
}

export function CheckList({ items, cols = "" }: { items: string[]; cols?: string }) {
  return (
    <ul className={`grid gap-3 ${cols}`}>
      {items.map((t) => (
        <li key={t} className="flex gap-3 rounded-xl bg-panel px-4 py-3 text-zinc-200">
          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand" />
          {t}
        </li>
      ))}
    </ul>
  );
}