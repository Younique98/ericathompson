import { HeroMark } from "@/components/HeroMark";
import { Reveal } from "@/components/motion/Reveal";

export default function Home() {
  const proofPoints = [
    { stat: "$1.2M", label: "annual B2B revenue delivered" },
    { stat: "$12.5M", label: "revenue protected through compliance" },
    { stat: "$500K+", label: "legal exposure eliminated (WCAG 2.1)" },
    { stat: "60%", label: "error reduction on a 100K+ user platform" },
    { stat: "500+", label: "engineers trained, 80%+ placement" },
    { stat: "12+", label: "years across frontend, backend, infra" },
  ];

  const services = [
    {
      title: "Technical Audit",
      detail:
        "Fixed fee, fixed scope. I dig into your codebase, find root causes, and deliver a prioritized remediation roadmap. Security, architecture, accessibility, performance. On-site fly-in audits available.",
      price: "$7,500 (1 week) / $12,500 (2 weeks)",
    },
    {
      title: "Team Training & Workshops",
      detail:
        "AI-assisted engineering workflows, React architecture, accessibility, async collaboration. Built for teams that want capability, not dependency.",
      price: "Half day $3,500. Full day $6,000. Custom series from $12K.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <main className="mx-auto max-w-5xl px-6 py-16 sm:py-24 flex flex-col gap-20">
        {/* Hero */}
        <section className="grid md:grid-cols-[1fr_auto] gap-10 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
              Erica Thompson
            </h1>
            <p className="mt-3 text-xl sm:text-2xl font-semibold bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-500 text-transparent bg-clip-text">
              Fractional CTO. Technical Educator.
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed mx-auto md:mx-0">
              I audit codebases. I find what is broken. I fix it. Then I hand
              your team back clean systems with documentation they can
              maintain without me. Self-taught, staff-level, and public about
              the whole journey at{" "}
              <a
                href="https://www.youtube.com/@TheImposterEngineer"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-600 dark:text-cyan-400 hover:underline"
              >
                @TheImposterEngineer
              </a>
              .
            </p>
            <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
              <a
                href="/contact"
                className="px-6 py-3 rounded-lg bg-cyan-500 dark:bg-cyan-400 text-white dark:text-black hover:bg-cyan-400 dark:hover:bg-cyan-300 font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              >
                Book an Audit
              </a>
              <a
                href="/pdf/career/Erica_Thompson_Fractional_CTO_Resume_2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100 font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              >
                Resume
              </a>
              <a
                href="/projects"
                className="px-6 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100 font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              >
                Projects
              </a>
            </div>
          </div>
          <HeroMark className="hidden md:block w-56 h-56 shrink-0" />
        </section>

        {/* Proof */}
        <Reveal>
          <section>
            <h2 className="text-2xl font-bold text-center mb-10">
              Work tied to outcomes, not hours
            </h2>
            <div className="flex flex-wrap justify-center divide-x divide-border">
              {proofPoints.map((p) => (
                <div key={p.label} className="px-6 py-2 text-center w-1/2 sm:w-1/3 md:w-auto">
                  <div className="text-3xl font-extrabold text-cyan-600 dark:text-cyan-400">
                    {p.stat}
                  </div>
                  <div className="mt-2 text-sm leading-snug text-muted-foreground max-w-[12rem] mx-auto">
                    {p.label}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        {/* Services */}
        <Reveal>
          <section>
            <h2 className="text-2xl font-bold text-center mb-8">Engagements</h2>

            <div className="rounded-xl bg-card border border-cyan-500/30 p-8 flex flex-col md:flex-row md:items-center gap-6 mb-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
              <div className="flex-1">
                <span className="text-xs font-semibold uppercase tracking-wide text-cyan-600 dark:text-cyan-400">
                  Flagship engagement
                </span>
                <h3 className="text-xl font-bold mt-1">
                  Fractional CTO Advisory
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Ongoing retainer. Architecture reviews, technical strategy,
                  hiring guidance, AI enablement. Your team keeps the judgment
                  after I leave.
                </p>
              </div>
              <p className="text-2xl font-bold text-cyan-600 dark:text-cyan-400 whitespace-nowrap">
                From $4K/month
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="rounded-xl bg-card border border-border p-6 flex flex-col transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                >
                  <h3 className="text-lg font-bold">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed flex-1 text-muted-foreground">
                    {s.detail}
                  </p>
                  <p className="mt-4 font-semibold text-cyan-600 dark:text-cyan-400">
                    {s.price}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-center text-sm text-muted-foreground">
              Select engagements. Tuesday through Thursday. Async-first teams
              preferred. Remote worldwide, with on-site audits and conference
              speaking by arrangement. I do not staff hourly feature
              development.
            </p>
          </section>
        </Reveal>

        {/* Teaching */}
        <Reveal>
          <section className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">The Imposter Engineer</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              I trained 500+ engineers into this industry, including 100+
              veterans and military spouses at an 80%+ placement rate. I teach
              what engineers actually need: judgment, systems, and the
              audacity to stop waiting for permission.
            </p>
            <a
              href="https://www.youtube.com/@TheImposterEngineer"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block px-6 py-3 rounded-lg bg-cyan-500 dark:bg-cyan-400 text-white dark:text-black hover:bg-cyan-400 dark:hover:bg-cyan-300 font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Watch on YouTube
            </a>
          </section>
        </Reveal>
      </main>
    </div>
  );
}
