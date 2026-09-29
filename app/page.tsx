import Image from "next/image";
import { Nav } from "@/components/Nav";
import { Section, CheckList } from "@/components/Section";
import { Icon, IconBadge, type IconName } from "@/components/Icons";
import { BackToTop } from "@/components/BackToTop";
import {
  company, systems, groupAffiliation, team, core, industries, workforce,
  edge, leverage, employeeBenefits, recruitment, locations,
} from "@/lib/content";
import { systemIcons, coreIcons, industryIcons, recruitmentIcons } from "@/lib/iconMap";

const lift = "transition motion-safe:hover:-translate-y-1 hover:shadow-lg";
const card = "border border-black/10 bg-panel";

export default function Home() {
  // Highlight the last word of the tagline in brand orange
  const words = company.tagline.split(" ");
  const accentWord = words.pop();
  const lead = words.join(" ");

  const stats: [string, string, IconName][] = [
    ["1986", "JRS Group of Companies established", "calendar"],
    [String(systems.length), "Integrated systems", "cpu"],
    [String(industries.length), "Industries served", "factory"],
    [String(locations.length), "Strategic locations", "pin"],
  ];

  return (
    <div id="top" className="bg-ink text-navy">
      <a href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-60 focus:bg-brand focus:px-4 focus:py-2 focus:font-medium focus:text-white"
      >
        Skip to content
      </a>
      <Nav />

      <main id="main">
        {/* Hero */}
        <section id="hero" className="bg-linear-to-br from-navy to-steel text-white">
          <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 pb-24 pt-20 md:grid-cols-[1.1fr_0.9fr] sm:pt-24">
            <div>
              <p className="mono-label flex items-center gap-3 text-brand">
                <span className="h-px w-8 bg-brand" />
                Company Profile 2025
              </p>
              <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl">
                {lead} <span className="text-brand">{accentWord}</span>.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-white/75">
                {company.name} helps clients across the country and around the world manufacture their brands and products, and keep their systems at their best.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#contact" className="inline-flex items-center gap-2 bg-brand px-6 py-3 font-semibold text-white transition hover:opacity-90">
                  Contact us
                  <Icon name="arrow-right" className="h-4 w-4" />
                </a>
                <a href="#about" className="inline-flex items-center gap-2 border border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
                  Learn more
                  <Icon name="arrow-down" className="h-4 w-4" />
                </a>
              </div>
              <ul className="mt-10 flex flex-wrap gap-3">
                {edge.map((e) => (
                  <li key={e} className="mono-label inline-flex items-center gap-2 border border-white/20 px-3 py-2 text-[0.7rem]! text-white/85">
                    <span className="h-1.5 w-1.5 bg-brand" />
                    {e}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative mb-6">
              <div className="border border-white/20 bg-white p-8 sm:p-10">
                <Image src="/images/logo.png" alt="Megatekton" width={420} height={306} priority className="mx-auto w-64 sm:w-80" />
              </div>
              <p className="mono-label absolute -bottom-5 left-6 border border-white/20 bg-navy px-4 py-2 text-[0.7rem]! text-white">
                Manufacturing · Warehousing · Supply chain
              </p>
            </div>
          </div>

          <div className="border-t border-white/10 bg-navy-2">
            <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-white/10 md:grid-cols-4">
              {stats.map(([n, l, ic]) => (
                <div key={l} className="bg-navy-2 px-6 py-7">
                  <dt className="font-display text-4xl font-bold text-white sm:text-5xl">{n}</dt>
                  <dd className="mono-label mt-2 flex items-center gap-2 text-[0.7rem]! text-white/60">
                    <Icon name={ic} className="h-3.5 w-3.5 shrink-0 text-brand" />
                    {l}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* About */}
        <Section id="about" eyebrow="Get to know us" title="Part of the manufacturing and warehousing industry since 1986">
          <div className="grid items-start gap-10 md:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-4 leading-7 text-secondary">
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
            <div className="grid h-96 grid-cols-2 grid-rows-2 gap-4 sm:h-112">
              <Image src="/images/about-factory.jpg" alt="Manufacturing floor" width={646} height={771} className="row-span-2 h-full w-full object-cover" />
              <Image src="/images/about-warehouse.jpg" alt="Warehouse interior" width={800} height={800} className="h-full w-full object-cover" />
              <Image src="/images/about-plant.jpg" alt="Industrial plant floor" width={770} height={770} className="h-full w-full object-cover" />
            </div>
          </div>          <h3 className="mt-14 text-2xl font-bold">Our integrated systems</h3>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {systems.map((s, i) => (
              <div key={s} className={`flex items-start gap-4 p-5 ${card} ${lift}`}>
                <IconBadge name={systemIcons[i] ?? "cpu"} />
                <div>
                  <span className="mono-label text-[0.7rem]! text-brand">{String(i + 1).padStart(2, "0")}</span>
                  <p className="mt-1 font-semibold">{s}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Core */}
        <Section id="core" eyebrow="Our core" title="Competitive and progressively innovating" className="bg-accent">
          <div className="grid gap-5 md:grid-cols-3">
            {core.map((c, i) => (
              <div key={c.label} className={`p-6 ${card} ${lift}`}>
                <IconBadge name={coreIcons[i] ?? "shield"} />
                <h3 className="mt-4 text-xl font-bold text-brand">{c.label}</h3>
                <p className="mt-3 leading-7 text-secondary">{c.text}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Team */}
        <Section id="team" eyebrow="Executive team" title="The people leading MMC">
          <div className="grid gap-5 md:grid-cols-2">
            {team.map((p) => (
              <figure key={p.name} className={`flex overflow-hidden ${card} ${lift}`}>
                <Image src={`/images/team/${p.photo}.jpg`} alt={p.name} width={420} height={525} sizes="160px" className="aspect-4/5 w-28 shrink-0 object-cover object-[50%_20%] sm:w-36" />
                <figcaption className="min-w-0 flex-1 border-l border-black/10 p-4 sm:p-5">
                  <p className="font-display text-lg font-semibold leading-tight tracking-wide">{p.name}</p>
                  <p className="mono-label mt-1 text-[0.7rem]! text-brand">{p.role}</p>
                  <ul aria-label={`${p.name} group affiliations`} className="mt-3 space-y-1 border-t border-black/10 pt-3">
                    {p.affiliations.map((a) => (
                      <li key={a} className="flex gap-2 text-xs leading-5 text-secondary">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-brand" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-6 text-sm text-secondary">{groupAffiliation}</p>
        </Section>

        {/* Industries + workforce */}
        <Section id="industries" eyebrow="Industries" title="We are present in the following industries" className="bg-accent">
          <CheckList items={industries} icon={industryIcons} cols="sm:grid-cols-2 lg:grid-cols-4" />
          <h3 className="mt-14 text-2xl font-bold">We are not limited to blue collars — we are also white collar</h3>
          <div className="mt-5 grid gap-6 md:grid-cols-2">
            <CheckList items={workforce.left} icon="wrench" />
            <CheckList items={workforce.right} icon="briefcase" />
          </div>
        </Section>

        {/* Edge + leverage */}
        <Section id="edge" eyebrow="Edge in the market" title="We go beyond our services through innovative integration in all aspects">
          <div className="grid gap-10 md:grid-cols-[1fr_1.2fr]">
            <div className="space-y-4">
              {edge.map((e, i) => (
                <div key={e} className={`flex items-center gap-4 p-5 ${card} ${lift}`}>
                  <span className="font-display flex h-10 w-10 shrink-0 items-center justify-center bg-brand text-lg font-bold text-white">{i + 1}</span>
                  <p className="font-semibold">{e}</p>
                </div>
              ))}
              <Image src="/images/edge.jpg" alt="Warehouse aisle" width={562} height={720} className="mt-4 h-64 w-full object-cover" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">Leverage</h3>
              <p className="mt-2 text-secondary">We cater to multi-national companies through continuous development of our trainings and competencies.</p>
              <div className="mt-5"><CheckList items={leverage} icon="check-circle" /></div>
            </div>
          </div>
        </Section>

        {/* Employees */}
        <section className="relative isolate overflow-hidden bg-navy px-6 py-20 text-white">
          <Image src="/images/city.jpg" alt="" fill sizes="100vw" className="-z-10 object-cover opacity-20" />
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
            <div>
              <p className="mono-label flex items-center gap-3 text-brand">
                <span className="h-px w-8 bg-brand" />
                Employee benefits
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">Real-time compensation and benefits</h2>
              <p className="mt-4 leading-8 text-white/75">
                Giving employees real-time compensation and benefits lets them meet their basic needs, especially in emergency cases.
              </p>
              <Image src="/images/forklift.jpg" alt="Forklift in a warehouse" width={800} height={824} className="mt-6 hidden h-56 w-full object-cover md:block" />
            </div>
            <CheckList items={employeeBenefits} icon="check-circle" />
          </div>
        </section>

        {/* Careers */}
        <Section id="careers" eyebrow="Recruitment & talent management" title="From new vacancy to deployment" className="bg-accent">
          <ol className="grid gap-5 md:grid-cols-4">
            {recruitment.map((r, i) => (
              <li key={r.n} className={`p-6 ${card} ${lift}`}>
                <div className="flex items-center justify-between">
                  <IconBadge name={recruitmentIcons[i] ?? "clipboard"} />
                  <span className="mono-label inline-flex items-center gap-1.5 bg-brand/10 px-3 py-1 text-[0.65rem]! text-brand">
                    <Icon name="clock" className="h-3.5 w-3.5" />
                    {r.days}
                  </span>
                </div>
                <p className="mono-label mt-4 text-[0.7rem]! text-brand">Step {r.n}</p>
                <h3 className="mt-1 text-lg font-semibold">{r.title}</h3>
                <p className="mt-2 text-sm leading-6 text-secondary">{r.text}</p>
              </li>
            ))}
          </ol>
        </Section>

        {/* Locations + contact */}
        <Section id="contact" eyebrow="Strategic locations" title="Find us">
          <div className="grid gap-5 md:grid-cols-3">
            {locations.map((l) => (
              <div key={l.label} className={`flex flex-col p-6 ${card} ${lift}`}>
                <div className="flex items-center gap-3">
                  <IconBadge name="pin" />
                  <h3 className="text-lg font-semibold text-brand">{l.label}</h3>
                </div>
                <p className="mt-4 flex-1 leading-7 text-secondary">{l.address}</p>
                <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(l.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-brand hover:text-secondary"
                >
                  Open in Maps
                  <Icon name="arrow-right" className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
          <div className={`mt-8 p-6 ${card}`}>
            <div className="flex items-center gap-3">
              <IconBadge name="mail" />
              <div>
                <h3 className="text-lg font-semibold">Email us</h3>
                <p className="text-sm text-secondary">Tap an address to open your email app.</p>
              </div>
            </div>
            <ul className="mt-4 flex flex-wrap gap-3">
              {company.emails.map((e) => (
                <li key={e}>
                  <a href={`mailto:${e}`}
                    className="inline-flex min-h-11 items-center gap-2 border border-black/20 px-5 text-secondary transition-colors hover:border-brand hover:text-brand"
                  >
                    <Icon name="mail" className="h-4 w-4" />
                    {e}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Section>
      </main>

      <footer className="border-t border-white/10 bg-navy px-6 py-8 text-center text-sm text-white/70">
        © {new Date().getFullYear()} {company.name}. {company.tagline}.
      </footer>

      <BackToTop />
    </div>
  );
}