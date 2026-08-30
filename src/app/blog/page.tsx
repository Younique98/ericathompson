export default function BlogPage() {
  const posts = [
    {
      title: "What 400 Daily 404s Taught Me About Technical Audits",
      date: "August 2026",
      body: [
        "When I audited a documentation platform serving 100K+ users, the symptom was simple: hundreds of routing errors every day. The instinct most teams have is to fix the errors. Patch the redirects, silence the alerts, move on.",
        "The audit found something different. The errors were not 400 separate problems. They were three systemic ones: legacy slug mapping, malformed path normalization, and unvalidated version resolution. Fix those three root causes and the error rate dropped 60%. Patch the symptoms and you would still be patching today.",
        "That is the entire argument for a fixed-scope audit over ongoing firefighting. You are not paying for hours of fixing. You are paying for the diagnosis that makes most of the fixing unnecessary. When I scope an audit now, the deliverable is never a list of bugs. It is a map of root causes, ranked by what they cost you, with a remediation path your own team can execute.",
      ],
    },
    {
      title: "Accessibility Is Not a Checkbox. It Is $500K.",
      date: "August 2026",
      body: [
        "A company I worked with faced an active accessibility lawsuit threat. The codebase had 200+ WCAG violations across 15+ pages. Legal exposure: over half a million dollars, plus a Series A due diligence process that would surface all of it.",
        "We did not hire an agency to bolt on fixes. We built accessibility into the engineering system itself: automated testing with jest-axe and pa11y in the CI pipeline, a remediation framework the team could follow without me, and component patterns that made the accessible version the default version.",
        "Result: 95% WCAG 2.1 compliance, the lawsuit risk eliminated, and due diligence passed. The lesson generalizes. Compliance done as a one-time cleanup decays immediately. Compliance done as a system compounds. This is true for accessibility, security, and testing alike, and it is why every engagement I run ends with your team owning the system, not renting my attention.",
      ],
    },
    {
      title: "Self-Taught to Staff Level: What Actually Transfers",
      date: "August 2026",
      body: [
        "I did not come through a CS degree pipeline. I started fixing family computers and taught myself into a 12+ year engineering career that runs from InsurTech startups to HashiCorp. Along the way I trained 500+ engineers, most of them career changers, into the industry at an 80%+ placement rate.",
        "Here is what I learned matters, and what does not. Credentials got none of my students hired. Judgment did: the ability to read an unfamiliar codebase, form a hypothesis, and test it cheaply. Debugging like a detective instead of guessing. Writing down what you found so the next person does not repeat the search.",
        "The industry keeps telling self-taught engineers to wait until they are ready. Readiness is not a feeling. It is a track record, and track records are built by shipping in public before you feel ready. That is the whole thesis of The Imposter Engineer, and it is why I put my methods, my numbers, and my mistakes on the record.",
      ],
    },
  ];

  return (
    <div className="min-h-screen py-12 px-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-4 pt-8">Field Notes</h1>
      <p className="text-lg text-gray-400 mb-12">
        Lessons from audits, compliance work, and training 500+ engineers.
        Longer form at{" "}
        <a
          href="https://www.youtube.com/@TheImposterEngineer"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          The Imposter Engineer
        </a>
        .
      </p>
      <div className="space-y-16">
        {posts.map((post) => (
          <article key={post.title}>
            <p className="text-sm text-gray-500 mb-2">{post.date}</p>
            <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              {post.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
