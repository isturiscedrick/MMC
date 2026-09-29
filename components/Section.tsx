import { Reveal } from "./Reveal";
import { Icon, type IconName } from "./Icons";

export function Section({ id, eyebrow, title, children, className = "" }: { id: string; eyebrow: string; title: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={`scroll-mt-20 px-6 py-20 ${className}`}>
      <Reveal className="mx-auto max-w-6xl">
        <p className="mono-label flex items-center gap-3 text-brand">
          <span className="h-px w-8 bg-brand" />
          {eyebrow}
        </p>
        <h2 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight sm:text-5xl">{title}</h2>
        <div className="mt-10">{children}</div>
      </Reveal>
    </section>
  );
}

export function CheckList({
  items,
  cols = "",
  icon = "check",
}: {
  items: string[];
  cols?: string;
  icon?: IconName | IconName[];
}) {
  return (
    <ul className={`grid gap-3 ${cols}`}>
      {items.map((t, i) => (
        <li
          key={t}
          className="flex items-start gap-3 border border-black/10 bg-panel px-4 py-3 text-secondary transition-colors hover:border-brand/50"
        >
          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center text-brand">
            <Icon name={Array.isArray(icon) ? (icon[i] ?? "check") : icon} className="h-5 w-5" />
          </span>
          {t}
        </li>
      ))}
    </ul>
  );
}