"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

function SectionLabel({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-foreground/70">
      <span className="text-accent">{n}</span>
      <span className="h-px w-10 bg-foreground/40" />
      <span>{children}</span>
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-md bg-background/70 border-b border-foreground/10">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 md:px-10">
        <a href="#top" className="font-display text-2xl tracking-wide">
          SG<span className="text-accent">.</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-[0.18em]">
          <a href="#operator" className="hover:text-accent transition-colors">O mnie</a>
          <a href="#capabilities" className="hover:text-accent transition-colors">Umiejętności</a>
          <a href="#evolution" className="hover:text-accent transition-colors">Moja droga</a>
          <a href="#cases" className="hover:text-accent transition-colors">Case Studies</a>
          <a href="#contact" className="hover:text-accent transition-colors">Kontakt</a>
        </nav>
        <a
          href="#contact"
          className="pill px-4 py-2 font-mono text-xs uppercase tracking-[0.18em] hover:bg-foreground hover:text-background transition-colors"
        >
          Kontakt ↗
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex items-start justify-between gap-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[14vw] md:text-[7vw] leading-[0.85] text-accent"
          >
            SERGIUSZ
          </motion.h1>
          <div className="hidden md:flex flex-col items-end gap-2 pt-4 max-w-xs text-right">
            <SectionLabel n="01">Operator File</SectionLabel>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative my-6 md:my-8 grain blob-frame aspect-[16/9] md:aspect-[21/9] w-full"
          style={{ borderColor: "var(--accent)" }}
        >
          <Image
            src="/portrait.png"
            alt="Portret Sergiusza Gromadzińskiego"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        <div className="flex items-end justify-between gap-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[10vw] md:text-[5vw] leading-[0.85]"
          >
            GROMADZIŃSKI<span className="text-accent">.</span>
          </motion.h1>
          <div className="hidden md:block max-w-sm text-right">
            <p className="font-display text-xl leading-tight">
              Building software<br />that can think.
            </p>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-3 md:gap-6 border-t border-foreground/15 pt-6 font-mono text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.18em] text-foreground/70 leading-snug">
          <div>Programowanie full-stack</div>
          <div>Systemy oparte o AI</div>
          <div>Rozwój oprogramowania</div>
          <div className="text-right text-accent">v4.0 / 2026</div>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#cases"
            className="group inline-flex items-center gap-3 rounded-full bg-foreground px-7 py-4 font-mono text-xs uppercase tracking-[0.2em] text-background hover:bg-accent transition-colors"
          >
            Zobacz projekty
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [
    "Agenty AI",
    "Automatyzacje workflow",
    "Aplikacje webowe",
    "TypeScript",
    "RAG Pipelines",
    "Optymalizacja SEO",
  ];
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-foreground/15 py-5 bg-background">
      <div className="marquee-track flex whitespace-nowrap font-display text-3xl md:text-5xl">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-12 pr-12">
            {t}
            <span className="text-accent">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Operator() {
  return (
    <section id="operator" className="py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionLabel n="02">Profil</SectionLabel>
        <motion.h2 {...fadeUp} className="font-display text-6xl md:text-9xl mt-4">
          O <span className="text-accent italic">Mnie</span>
        </motion.h2>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <motion.div
            {...fadeUp}
            className="lg:col-span-7 space-y-6 text-lg md:text-xl leading-relaxed max-w-2xl"
          >
            <p>
              Tworzę inteligentne systemy, łącząc solidne zaplecze techniczne z myśleniem produktowym. Projektuję i rozwijam rozwiązania, które są nie tylko skalowalne i niezawodne, ale także intuicyjne dla użytkowników. Mam doświadczenie w budowaniu zarówno systemów AI opartych na agentach, jak i nowoczesnych aplikacji full-stack. W pracy stawiam na prostotę, jakość wykonania i dbałość o detale.
            </p>
            <p className="text-foreground/70">
              Obecnie skupiam się na budowaniu rozwiązań, które skutecznie łączą modele AI z rzeczywistymi procesami biznesowymi. Tworzę systemy agentowe, rozwijam metody oceny jakości ich działania oraz projektuję interfejsy, które sprawiają, że nawet złożone systemy oparte na AI są przewidywalne i łatwe w użyciu.
            </p>
          </motion.div>

          <motion.aside {...fadeUp} className="lg:col-span-5">
            <div className="blob-soft border border-foreground bg-surface p-8 relative">
              <div className="absolute -top-3 left-6 bg-background px-3 font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
                Aktualnie rozwijam się
              </div>
              <ul className="space-y-3 font-mono text-sm">
                {[
                  ["01", "AI Agents"],
                  ["02", "Multi-Agent Systems"],
                  ["03", "Workflow Automation"],
                  ["04", "Product Design"],
                  ["05", "Evaluation Frameworks"],
                ].map(([n, t]) => (
                  <li
                    key={n}
                    className="flex items-center justify-between border-b border-foreground/10 pb-3 last:border-0"
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-accent">{n}</span>
                      <span className="uppercase tracking-wider">{t}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

function Capabilities() {
  const caps = [
    {
      t: "Agenty AI",
      d: "Autonomiczne wykorzystanie AI do wypełnienia złożonych zadań.",
      k: "LangGraph · OpenAI · Anthropic",
    },
    {
      t: "Automatyzacja",
      d: "Tworzenie rozwiązań automatyzujących powtarzalne zadania i procesy, zwiększając efektywność i produktywność.",
      k: "Python · n8n",
    },
    {
      t: "Rozwiązania full-stack",
      d: "Inżynieria produktu od początku do końca. Od projektowania schematu do pixel-perfect UI.",
      k: "TypeScript · React · Postgres",
    },
    {
      t: "Architektura",
      d: "Przemyślane projektowanie systemów, które są skalowalne, niezawodne i łatwe w utrzymaniu.",
      k: "Event sourcing · CQRS · DDD",
    },
    {
      t: "Optymalizacja",
      d: "Optymalizacja systemów pod kątem wydajności, kosztów i skalowalności.",
      k: "SEO",
    },
    {
      t: "Wdrażanie AI",
      d: "Wsparcie dla zespołów w procesie adopcji technologii AI.",
      k: "Consultation · Training",
    },
  ];

  return (
    <section id="capabilities" className="py-24 md:py-36 border-t border-foreground/15">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionLabel n="03">Module Index</SectionLabel>
        <motion.h2 {...fadeUp} className="font-display text-6xl md:text-9xl mt-4">
          Umiejętności
        </motion.h2>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caps.map((c, i) => (
            <motion.article
              key={c.t}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              whileHover={{ y: -6 }}
              className="blob-soft border border-foreground bg-surface p-8 flex flex-col gap-4 min-h-[280px]"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-xs text-foreground/50">0{i + 1}</span>
                <span className="h-2 w-2 rounded-full bg-accent" />
              </div>
              <h3 className="font-display text-3xl md:text-4xl leading-none">{c.t}</h3>
              <p className="text-sm text-foreground/70 leading-relaxed flex-1">{c.d}</p>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/50 border-t border-foreground/10 pt-3">
                {c.k}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Evolution() {
  const versions = [
    {
      v: "1.0",
      t: "Początek",
      y: "2021-2022",
      s: "HTML · CSS · JavaScript",
      d: "Początek mojej drogi z pisaniem kodu. Tworzyłem proste, hobbistyczne strony internetowe skupiając sie na warstwie frontend.",
    },
    {
      v: "2.0",
      t: "Nauka zaawansowanych technologii",
      y: "2022 — 2024",
      s: "Python · React · Postgres",
      d: "Stale poszerzam swoje umiejętności. Moje projekty stały się bardziej złożone i skalowalne.",
    },
    {
      v: "3.0",
      t: "Junior software developer",
      y: "2024 — 2025",
      s: "Practical skills · Teamwork · Requirements",
      d: "Zdobyłem pracę jako junior software developer. W tym momencie rozwijam swoje umiejętności w praktyce, pracując w dużej korporacji.",
    },
    {
      v: "4.0",
      t: "Mid-level software developer",
      y: "2025 — today",
      s: "LLMs · RAG · Eval",
      d: "Cieżka praca i rozwijanie umiejętności pomogło mi awansować. Zacząłem również pracować z systemami AI, aby użyc ich potencjału w projektach.",
    },
  ];

  return (
    <section id="evolution" className="py-24 md:py-36 border-t border-foreground/15">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionLabel n="04">Changelog</SectionLabel>
        <motion.h2 {...fadeUp} className="font-display text-6xl md:text-9xl mt-4">
          Moja <span className="text-accent">Droga</span>
        </motion.h2>

        <div className="mt-16 relative">
          <div className="absolute left-[7px] md:left-1/2 top-2 bottom-2 w-px bg-foreground/20" />
          <ul className="space-y-12">
            {versions.map((rel, i) => (
              <motion.li
                key={rel.v}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className={`relative pl-8 md:pl-0 md:grid md:grid-cols-2 md:gap-16 ${i % 2 ? "md:[&>div:first-child]:order-2" : ""
                  }`}
              >
                <div className={i % 2 ? "md:text-left md:pl-10" : "md:text-right md:pr-10"}>
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-foreground/50">
                    {rel.y}
                  </p>
                  <h3 className="font-display text-5xl md:text-7xl mt-1">
                    v<span className="text-accent">{rel.v}</span>
                  </h3>
                  <p className="font-display text-xl md:text-2xl mt-2">{rel.t}</p>
                </div>
                <div
                  className={`mt-3 md:mt-2 ${i % 2 ? "md:pr-10 md:text-right" : "md:pl-10"
                    }`}
                >
                  <p className="text-foreground/75 max-w-md md:inline-block">{rel.d}</p>
                  <p className="mt-3 font-mono text-xs uppercase tracking-[0.18em] text-foreground/50">
                    {rel.s}
                  </p>
                </div>
                <span className="absolute left-0 md:left-1/2 top-3 -translate-x-1/2 h-4 w-4 rounded-full bg-background border-2 border-accent" />
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function CaseFiles() {
  const cases = [
    {
      n: "001",
      title: "Website eval service",
      client: "Prywatny projekt",
      problem:
        "Brak systemowego podejścia do oceny jakości stron internetowych. Subiektywne opinie, brak danych do monitorowania postępów.",
      solution:
        "Zbudowałem narzędzie do oceny jakości stron internetowych. Analizje wydajność, dostępność, SEO oraz bezpieczeństwo stron internetowych według jasno określonych i ogólnie przyjętych standardów. Integracja z AI pozwala generowanie raportów.",
      stack: ["TypeScript", "React", "Python", "FastAPI"],
      outcome: "Oszczędność czasu spędzonego na podstawowym audycie stron internetowych",
    },
    {
      n: "002",
      title: "File organizer with AI agents",
      client: "Prywatny projekt",
      problem: "Brak zorganizowanej struktury dla moich plików.",
      solution:
        "Autorski system do samodzielnego tworzenia mechanizmów automatyzacji. System oparty na edytowalnym workflow umożliwia definiowanie reguł organizacji plików, takich jak przenoszenie czy usuwanie. Dzięki integracji z AI, system może inteligentnie kategoryzować i organizować pliki na podstawie ich zawartości i metadanych, co pozwala na utrzymanie porządku bez konieczności ręcznej interwencji.",
      stack: ["React", "Python", "React flow", "Redis"],
      outcome: "Zorganizowane pliki i oszczędność czasu spędzonego na ręcznym porządkowaniu",
    },
  ];

  return (
    <section id="cases" className="py-24 md:py-36 border-t border-foreground/15">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div>
            <SectionLabel n="05">Engineering Dossier</SectionLabel>
            <motion.h2 {...fadeUp} className="font-display text-6xl md:text-9xl mt-4">
              Case <span className="text-accent">Studies</span>
            </motion.h2>
          </div>
        </div>

        <div className="mt-14 space-y-6">
          {cases.map((c) => (
            <motion.article
              key={c.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="blob-soft border border-foreground bg-surface p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 hover:bg-[var(--surface)] transition-all"
            >
              <header className="lg:col-span-3">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{c.n}</p>
                <h3 className="font-display text-4xl md:text-5xl mt-2 leading-none">{c.title}</h3>
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-foreground/50 mt-3">
                  {c.client}
                </p>
              </header>

              <div className="lg:col-span-6 space-y-5 text-sm md:text-base leading-relaxed">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/40 mb-1">
                    Problem
                  </p>
                  <p>{c.problem}</p>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/40 mb-1">
                    Rozwiązanie
                  </p>
                  <p>{c.solution}</p>
                </div>
              </div>

              <aside className="lg:col-span-3 flex flex-col gap-4 border-t lg:border-t-0 lg:border-l border-foreground/15 lg:pl-6 pt-4 lg:pt-0">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/40 mb-2">
                    Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {c.stack.map((s) => (
                      <span
                        key={s}
                        className="pill px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/40 mb-2">
                    Wynik
                  </p>
                  <p className="font-display text-xl leading-tight text-accent">{c.outcome}</p>
                </div>
              </aside>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const links = [
    {
      l: "Email",
      v: "kontakt@sergiusz.gromadzinski.pl",
      h: "mailto:kontakt@sergiusz.gromadzinski.pl",
    },
    { l: "GitHub", v: "github.com/SereqG", h: "https://github.com/SereqG" },
    {
      l: "LinkedIn",
      v: "linkedin.com/in/sergiusz-gromadzinski",
      h: "https://www.linkedin.com/in/sergiusz-gromadzi%C5%84ski-8aa743265/",
    },
    { l: "Lokalizacja", v: "Polska", h: undefined },
  ];

  return (
    <section id="contact" className="py-24 md:py-36 border-t border-foreground/15">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionLabel n="06">Transmission</SectionLabel>
        <motion.h2 {...fadeUp} className="font-display text-6xl md:text-9xl mt-4">
          Kontakt
        </motion.h2>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <motion.div {...fadeUp} className="lg:col-span-7 flex flex-col">
            <div className="blob-soft border border-foreground bg-foreground text-background p-8 font-mono text-sm flex flex-col flex-1">
              <div className="flex items-center gap-2 border-b border-background/20 pb-3 mb-5">
                <span className="h-2.5 w-2.5 rounded-full bg-accent" />
                <span className="h-2.5 w-2.5 rounded-full bg-background/30" />
                <span className="h-2.5 w-2.5 rounded-full bg-background/30" />
                <span className="ml-3 text-[10px] uppercase tracking-[0.25em] opacity-60">
                  terminal · /contact
                </span>
              </div>
              <p className="text-background/60">$ whoami</p>
              <p className="mb-3">sergiusz_gromadzinski — software developer · ai systems</p>
              <p className="text-background/60">$ status</p>
              <p className="mb-3 text-accent">
                &gt; Gotowy, żeby razem coś zbudować?
              </p>
              <p className="text-background/60">$ contact --list</p>
              <div className="mt-2 space-y-2 flex-1">
                {[
                  ["email", "kontakt@sergiusz.gromadzinski.pl"],
                  ["github", "github.com/SereqG"],
                  ["linkedin", "linkedin.com/in/sergiusz-gromadzinski"],
                  ["location", "Polska"],
                ].map(([k, v]) => (
                  <p key={k}>
                    <span className="text-background/50">{k}:</span>{" "}
                    <span className="text-accent">{v}</span>
                  </p>
                ))}
              </div>
              <p className="mt-6 text-background/40 text-[11px]">
                — awaiting transmission —
              </p>
            </div>
          </motion.div>

          <motion.aside {...fadeUp} className="lg:col-span-5 space-y-4">
            {links.map((c) => (
              <a
                key={c.l}
                href={c.h ?? "#"}
                className="blob-soft border border-foreground bg-surface p-6 flex items-center justify-between hover:bg-accent hover:text-background transition-colors group"
              >
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] opacity-60">
                    {c.l}
                  </p>
                  <p className="font-display text-2xl mt-1">{c.v}</p>
                </div>
                {c.h && (
                  <span className="text-2xl group-hover:translate-x-1 transition-transform">↗</span>
                )}
              </a>
            ))}
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-foreground/15 py-10">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 flex flex-wrap items-center justify-between gap-4 font-mono text-xs uppercase tracking-[0.18em] text-foreground/60">
        <p>© 2026 Sergiusz Gromadziński</p>
        <p className="text-accent">◉ online</p>
      </div>
    </footer>
  );
}

export default function Portfolio() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <Marquee />
      <Operator />
      <Capabilities />
      <Evolution />
      <CaseFiles />
      <Contact />
      <Footer />
    </main>
  );
}
