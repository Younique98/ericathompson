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
    {
      title: "The Compliance Deadline That Could Have Ended the Company",
      date: "August 2026",
      body: [
        "An insurtech I worked with faced a regulatory deadline: implement Pet Model Act compliance or lose the ability to operate in all 50 states. On the line: $12.5M in annual revenue and 20K+ active policies that could not experience a minute of disruption.",
        "The instinct under regulatory pressure is to freeze the roadmap and throw everyone at it. We did the opposite. We scoped the compliance work like an audit: mapped every surface the regulation touched, sequenced changes so each one shipped behind the last safely, and kept the rest of the roadmap moving. It shipped 10 days ahead of the deadline. Zero policy disruption.",
        "Regulatory work is not different from other engineering. It is engineering with a real deadline, which most engineering does not have. Teams that treat compliance as a panic event pay twice: once in the scramble, once in the tech debt the scramble leaves behind. Teams that treat it as scoped, sequenced work ship early and keep their platform clean.",
      ],
    },
    {
      title: "The Tool That Still Runs Years After I Left",
      date: "August 2026",
      body: [
        "At a gaming platform serving millions of tournament entries, engineer onboarding was a manual checklist: repo access, IAM roles, cloud provisioning, all done by hand, all error-prone, all stealing senior time.",
        "I built an automation tool in Terraform and Go that eliminated 100% of the manual steps. Years later, it is still in production. That is the metric I care about most, more than the observability rollout that cut incident response from 2+ hours to 36 minutes, because it proves the thing consultants rarely prove: the system worked without me.",
        "This is my test for infrastructure work, mine or anyone's. Not 'did it work at launch' but 'does it still run after the author leaves.' If your platform depends on one person's presence, you do not have infrastructure. You have a hostage situation with extra YAML.",
      ],
    },
    {
      title: "How to Run a Migration Nobody Notices",
      date: "August 2026",
      body: [
        "I have led three major platform migrations with zero business disruption: a Redux-heavy legacy codebase rebuilt into modern React and TypeScript, a Flutter to React Native transition with full feature parity, and a B2C to B2B business model pivot that touched every surface of the product.",
        "The pattern that made all three quiet: never migrate and change at the same time. Feature parity first, improvement second. Every migration failure I have seen came from teams who tried to fix the product while moving it, which means every bug has two suspects and every delay has no owner.",
        "The second pattern: migrations are sequenced dependency rollouts, not events. When I published a cross-repository component library consumed by 5+ product teams, the library was the easy part. The value was leading every downstream repo through adoption in sync with a rebrand, so design and engineering hit the same moment together. That coordination is the actual job. The code is the artifact.",
      ],
    },
    {
      title: "Build the Tool That Makes Your Team Stop Needing You",
      date: "August 2026",
      body: [
        "Marketing needed engineering for every campaign change. Claims teams needed engineering for every workflow tweak. Engineering was the bottleneck for work that was not engineering.",
        "I built a custom CMS that put those changes in the hands of the teams who needed them: marketing, product, and claims. Engineering dependency dropped 35%. Campaign delivery accelerated 20%. Estimated productivity gain: $150K a year. And the engineers got their roadmap back.",
        "The counterintuitive lesson for engineers worried about making themselves unnecessary: the person who removes the bottleneck becomes the go-to person, permanently. I became the engineer other teams routed hard problems to precisely because my systems kept solving problems while I slept. Dependency is not job security. Leverage is.",
      ],
    },
    {
      title: "What Being the Go-To Person Actually Costs, and Earns",
      date: "August 2026",
      body: [
        "At one company I closed 172 tickets in a year, 22% of the entire team's output. I was the release captain, the person tagged into cross-team support channels, the one handed the errors nobody else could trace. Docker credential failures blocking contributor onboarding. Hashing performance. Sentry audits that cut error logs 40%.",
        "Here is the honest accounting. Being the go-to person taught me more, faster, than any curriculum could: you learn systems by being handed their worst days. It is also how staff-level operators end up doing staff-level work at mid-level titles, because output alone does not reprice you. I know both sides of that ledger personally.",
        "So my advice to engineers in that seat has two parts. Take the hard tickets, they are compounding education. And document your wins in business terms as you go, revenue protected, hours saved, errors eliminated, because the record you keep is the leverage you will negotiate with later. The work makes you valuable. The record makes you paid.",
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
          className="text-cyan-400 hover:underline"
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
