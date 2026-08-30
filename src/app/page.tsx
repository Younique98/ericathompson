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
        "1 to 2 weeks. I dig into your codebase, find root causes, and deliver a prioritized remediation roadmap. Security, architecture, accessibility, performance.",
      price: "From $1,000/day",
    },
    {
      title: "Fractional CTO Advisory",
      detail:
        "Ongoing retainer. Architecture reviews, technical strategy, hiring guidance, AI enablement. Your team keeps the judgment after I leave.",
      price: "$3K to $5K/month",
    },
    {
      title: "Team Training & Workshops",
      detail:
        "AI-assisted engineering workflows, React architecture, accessibility, async collaboration. Built for teams that want capability, not dependency.",
      price: "$2K to $12K/session",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 font-sans">
      <main className="mx-auto max-w-5xl px-6 py-16 sm:py-24 flex flex-col gap-20">
        {/* Hero */}
        <section className="text-center">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
            Erica Thompson
          </h1>
          <p className="mt-3 text-xl sm:text-2xl font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
            Fractional CTO. Technical Educator.
          </p>
          <p className="mt-6 mx-auto max-w-2xl text-lg leading-relaxed">
            I audit codebases. I find what is broken. I fix it. Then I hand
            your team back clean systems with documentation they can maintain
            without me. Self-taught, staff-level, and public about the whole
            journey at{" "}
            <a
              href="https://www.youtube.com/@TheImposterEngineer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              @TheImposterEngineer
            </a>
            .
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="px-6 py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 font-semibold"
            >
              Book an Audit
            </a>
            <a
              href="/pdf/career/Erica_Thompson_Fractional_CTO_Resume_2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 font-semibold"
            >
              Resume
            </a>
            <a
              href="/projects"
              className="px-6 py-3 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 font-semibold"
            >
              Projects
            </a>
          </div>
        </section>

        {/* Proof */}
        <section>
          <h2 className="text-2xl font-bold text-center mb-8">
            Work tied to outcomes, not hours
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {proofPoints.map((p) => (
              <div
                key={p.label}
                className="rounded-xl bg-white dark:bg-gray-800 p-6 text-center shadow-sm"
              >
                <div className="text-3xl font-extrabold text-blue-500">
                  {p.stat}
                </div>
                <div className="mt-2 text-sm leading-snug">{p.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section>
          <h2 className="text-2xl font-bold text-center mb-8">Engagements</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-xl bg-white dark:bg-gray-800 p-6 shadow-sm flex flex-col"
              >
                <h3 className="text-lg font-bold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed flex-1">{s.detail}</p>
                <p className="mt-4 font-semibold text-blue-500">{s.price}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
            Select engagements. Tuesday through Thursday. Async-first teams
            preferred. Fully remote, worldwide.
          </p>
        </section>

        {/* Teaching */}
        <section className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">The Imposter Engineer</h2>
          <p className="text-lg leading-relaxed">
            I trained 500+ engineers into this industry, including 100+
            veterans and military spouses at an 80%+ placement rate. I teach
            what engineers actually need: judgment, systems, and the audacity
            to stop waiting for permission.
          </p>
          <a
            href="https://www.youtube.com/@TheImposterEngineer"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block px-6 py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 font-semibold"
          >
            Watch on YouTube
          </a>
        </section>
      </main>
    </div>
  );
}
