import Image from "next/image";

const links = [
  ["About", "#about"],
  ["Team", "#team"],
  ["Industries", "#industries"],
  ["Clients", "#clients"],
  ["Careers", "#careers"],
  ["Contact", "#contact"],
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#top" className="flex items-center gap-3 font-semibold">
          <Image src="/images/logo.png" alt="Megatekton logo" width={44} height={32} className="h-8 w-auto" />
          MMC
        </a>
        <nav className="hidden gap-6 text-sm text-zinc-300 md:flex">
          {links.map(([l, h]) => (
            <a key={h} href={h} className="hover:text-brand">{l}</a>
          ))}
        </nav>
        <details className="relative md:hidden">
          <summary className="cursor-pointer list-none rounded-lg border border-white/20 px-3 py-1.5 text-sm">Menu</summary>
          <nav className="absolute right-0 mt-2 flex w-44 flex-col gap-1 rounded-xl bg-panel p-3 text-sm shadow-xl">
            {links.map(([l, h]) => (
              <a key={h} href={h} className="rounded-lg px-3 py-2 hover:bg-white/10">{l}</a>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}