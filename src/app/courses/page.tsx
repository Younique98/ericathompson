export default function WorkshopsPage() {
  const offerings = [
    {
      title: "AI-Assisted Engineering Workflows",
      detail:
        "How your team ships faster with AI tools without shipping risk. Prompting for code, review discipline, guardrails, and knowing when not to trust the output. Built for teams under pressure to adopt AI responsibly.",
    },
    {
      title: "Accessibility That Survives an Audit",
      detail:
        "WCAG 2.1 compliance as an engineering practice, not a checkbox. Automated testing with jest-axe and pa11y, remediation frameworks, and how I took a platform to 95% compliance under active lawsuit threat.",
    },
    {
      title: "Frontend Architecture & Design Systems",
      detail:
        "Component architecture, state management, and the patterns that keep a codebase maintainable past 10 engineers. Drawn from unifying design systems at HashiCorp and rebuilding legacy platforms in production.",
    },
    {
      title: "From Junior to Trusted: Engineering Judgment",
      detail:
        "The curriculum behind 500+ engineers trained and placed. Debugging as detective work, reading unfamiliar codebases, and building the judgment that gets engineers promoted.",
    },
  ];

  return (
    <div className="min-h-screen py-12 px-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-4 pt-8">Workshops & Speaking</h1>
      <p className="text-lg text-muted-foreground mb-10 max-w-3xl">
        Live training for engineering teams, delivered remote or on-site.
        Custom curriculum built from production experience, not slides. Half
        day $3,500. Full day $6,000. Custom multi-session series from $12,000.
        Conference talks and fly-in engagements by arrangement.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {offerings.map((o) => (
          <div key={o.title} className="p-6 rounded-lg bg-card border border-border">
            <h2 className="text-xl font-bold mb-3">{o.title}</h2>
            <p className="text-muted-foreground">{o.detail}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-6">Watch Me Teach</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-6 rounded-lg bg-card border border-border">
          <h3 className="text-xl font-bold mb-4">
            Women In Tech: Establish and Grow Your Developer Career
          </h3>
          <div className="relative w-full pb-[56.25%]">
            <iframe
              src="https://www.youtube.com/embed/ZvDZPpVM9gI"
              title="Women In Tech talk"
              className="absolute top-0 left-0 w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="p-6 rounded-lg bg-card border border-border">
          <h3 className="text-xl font-bold mb-4">
            Why WCAG Compliance Matters for Your Business
          </h3>
          <p className="text-muted-foreground mb-4">
            Accessibility expands reach to the estimated 1 billion people
            worldwide living with a disability, and it protects revenue. I
            teach it as the engineering discipline that saved a client $500K+
            in legal exposure.
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 rounded-lg bg-cyan-500 dark:bg-cyan-400 text-white dark:text-black hover:bg-cyan-400 dark:hover:bg-cyan-300 font-semibold transition-colors"
          >
            Book This Workshop
          </a>
        </div>
      </div>

      <div className="mt-16 text-center">
        <p className="text-lg mb-6">
          Have a team that needs one of these, or a stage that needs a speaker?
        </p>
        <a
          href="/contact"
          className="px-8 py-4 rounded-lg bg-cyan-500 dark:bg-cyan-400 text-white dark:text-black hover:bg-cyan-400 dark:hover:bg-cyan-300 font-semibold transition-colors"
        >
          Get in Touch
        </a>
      </div>
    </div>
  );
}
