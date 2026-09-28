import Image from "next/image";
import { Nav } from "@/components/Nav";
import { Section, CheckList } from "@/components/Section";
import { clients } from "@/lib/clients";
import {
  company, systems, groupAffiliation, team, core, industries, workforce,
  edge, leverage, employeeBenefits, recruitment, locations,
} from "@/lib/content";

export default function Home() {
  return (
    <div id="top" className="bg-ink text-white">
      <a href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-brand focus:px-4 focus:py-2 focus:font-medium focus:text-white"
      >
        Skip to content
      </a>
      <Nav />

      <main id="main">
        {/* Hero */}
        <section id="hero" className="relative overflow-hidden px-6 pb-24 pt-20 sm:pt-28">
          <div className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-accent/30 blur-3xl" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">Company Profile 2025</p>
              <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">{company.tagline}.</h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-300">
                {company.name} helps clients across the country and around the world manufacture their brands and products, and keep their systems at their best.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#contact" className="rounded-full bg-brand px-6 py-3 font-medium text-white transition hover:opacity-90">Contact us</a>
                <a href="#about" className="rounded-full border border-white/25 px-6 py-3 font-medium transition hover:bg-white/10">Learn more</a>
              </div>
            </div>
            <div className="flex justify-center">
              <Image src="/images/logo.png" alt="Megatekton" width={420} height={306} priority className="w-72 sm:w-96" />
            </div>
          </div>
          <dl className="relative mx-auto mt-16 grid max-w-6xl grid-cols-2 gap-4 md:grid-cols-4">
            {[
              ["1986", "JRS Group of Companies established"],
              [String(systems.length), "Integrated systems"],
              [String(industries.length), "Industries served"],
              [String(clients.length), "Client brands"],
            ].map(([n, l]) => (
              <div key={l} className="rounded-2xl bg-panel p-5">
                <dt className="text-3xl font-semibold text-brand">{n}</dt>
                <dd className="mono-label mt-1 !text-[0.7rem] text-zinc-300">{l}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* About */}
        <Section id="about" eyebrow="Get to know us" title="Part of the manufacturing and warehousing industry since 1986">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="space-y-5 leading-8 text-zinc-300">
              <p>
                Megatekton Manufacturing Corp. is engaged in manufacturing and other services, where clients across the country experience innovative services that help international clients manufacture their brands and products and maintain their systems at an optimum level.
              </p>
              <p>
                We have been part of the manufacturing and warehousing industry since JRS Group of Companies was established in 1986, and we are one of the leading companies continuously innovating over the past decade.
              </p>
              <p>
                Since the internet began saturating modern industry activity, we have taken it up a notch to bring forth the best integrations in the industry.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Image src="/images/about-warehouse.jpg" alt="Warehouse interior" width={800} height={800} className="aspect-square w-full rounded-2xl object-cover" />
              <Image src="/images/about-factory.jpg" alt="Manufacturing floor" width={646} height={771} className="aspect-square w-full rounded-2xl object-cover" />
            </div>
          </div>
          <h3 className="mt-14 text-xl font-semibold">Our integrated systems</h3>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {systems.map((s, i) => (
              <div key={s} className="rounded-2xl bg-panel p-5">
                <span className="text-sm font-semibold text-accent">{String(i + 1).padStart(2, "0")}</span>
                <p className="mt-2 font-medium">{s}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Core */}
        <Section id="core" eyebrow="Our core" title="Competitive and progressively innovating" className="bg-panel/40">
          <div className="grid gap-5 md:grid-cols-3">
            {core.map((c) => (
              <div key={c.label} className="rounded-2xl border border-white/10 bg-ink p-6">
                <h3 className="text-lg font-semibold text-brand">{c.label}</h3>
                <p className="mt-3 leading-7 text-zinc-300">{c.text}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Team */}
        <Section id="team" eyebrow="Executive team" title="The people leading MMC">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((p) => (
              <figure key={p.name} className="overflow-hidden rounded-2xl bg-panel">
                <Image src={`/images/team/${p.photo}.jpg`} alt={p.name} width={420} height={420} className="aspect-[4/3] w-full object-cover object-top" />
                <figcaption className="p-5">
                  <p className="font-semibold">{p.name}</p>
                  <p className="text-sm text-brand">{p.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-6 text-sm text-zinc-400">{groupAffiliation}</p>
        </Section>

        {/* Industries + workforce */}
        <Section id="industries" eyebrow="Industries" title="We are present in the following industries" className="bg-panel/40">
          <CheckList items={industries} cols="sm:grid-cols-2 lg:grid-cols-4" />
          <h3 className="mt-14 text-xl font-semibold">We are not limited to blue collars — we are also white collar</h3>
          <div className="mt-5 grid gap-6 md:grid-cols-2">
            <CheckList items={workforce.left} />
            <CheckList items={workforce.right} />
          </div>
        </Section>

        {/* Edge + leverage */}
        <Section id="edge" eyebrow="Edge in the market" title="We go beyond our services through innovative integration in all aspects">
          <div className="grid gap-10 md:grid-cols-[1fr_1.2fr]">
            <div className="space-y-4">
              {edge.map((e, i) => (
                <div key={e} className="flex items-center gap-4 rounded-2xl bg-panel p-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand font-semibold">{i + 1}</span>
                  <p className="font-medium">{e}</p>
                </div>
              ))}
              <Image src="/images/edge.jpg" alt="Warehouse aisle" width={562} height={720} className="mt-4 h-64 w-full rounded-2xl object-cover" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Leverage</h3>
              <p className="mt-2 text-zinc-300">We cater to multi-national companies through continuous development of our trainings and competencies.</p>
              <div className="mt-5"><CheckList items={leverage} /></div>
            </div>
          </div>
        </Section>

        {/* Employees */}
        <section className="relative isolate overflow-hidden px-6 py-20">
          <Image src="/images/city.jpg" alt="" fill sizes="100vw" className="-z-10 object-cover opacity-20" />
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">Employee benefits</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Real-time compensation and benefits</h2>
              <p className="mt-4 leading-8 text-zinc-300">
                Giving employees real-time compensation and benefits lets them meet their basic needs, especially in emergency cases.
              </p>
              <Image src="/images/forklift.jpg" alt="Forklift in a warehouse" width={800} height={824} className="mt-6 hidden h-56 w-full rounded-2xl object-cover md:block" />
            </div>
            <CheckList items={employeeBenefits} />
          </div>
        </section>

        {/* Clients */}
        <Section id="clients" eyebrow="Our clients" title="Trusted by leading brands">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {clients.map((c) => (
              <div key={c.name} className="flex h-28 items-center justify-center rounded-2xl bg-white p-4">
                <Image src={c.src} alt={c.name} width={c.w} height={c.h} className="max-h-full w-auto object-contain" />
              </div>
            ))}
          </div>
        </Section>

        {/* Careers */}
        <Section id="careers" eyebrow="Recruitment & talent management" title="From new vacancy to deployment" className="bg-panel/40">
          <ol className="grid gap-5 md:grid-cols-4">
            {recruitment.map((r) => (
              <li key={r.n} className="rounded-2xl border border-white/10 bg-ink p-6">
                <div className="flex items-center justify-between">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand font-semibold">{r.n}</span>
                  <span className="rounded-full bg-accent/20 px-3 py-1 text-xs font-medium text-accent">{r.days}</span>
                </div>
                <h3 className="mt-4 font-semibold">{r.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-300">{r.text}</p>
              </li>
            ))}
          </ol>
        </Section>

        {/* Locations + contact */}
        <Section id="contact" eyebrow="Strategic locations" title="Find us">
          <div className="grid gap-5 md:grid-cols-3">
            {locations.map((l) => (
              <div key={l.label} className="flex flex-col rounded-2xl bg-panel p-6">
                <h3 className="font-semibold text-brand">{l.label}</h3>
                <p className="mt-2 flex-1 leading-7 text-zinc-300">{l.address}</p>
                <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(l.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex min-h-11 items-center text-sm font-medium text-accent hover:text-brand"
                >
                  Open in Maps &rarr;
                </a>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-white/10 p-6">
            <h3 className="font-semibold">Email us</h3>
            <p className="mt-1 text-sm text-zinc-400">Tap an address to open your email app.</p>
            <ul className="mt-4 flex flex-wrap gap-3">
              {company.emails.map((e) => (
                <li key={e}>
                  <a href={`mailto:${e}`}
                    className="inline-flex min-h-11 items-center rounded-full border border-white/20 px-5 text-zinc-200 transition-colors hover:border-brand hover:text-brand"
                  >
                    {e}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Section>
      </main>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-zinc-400">
        © {new Date().getFullYear()} {company.name}. {company.tagline}.
      </footer>
    </div>
  );
}