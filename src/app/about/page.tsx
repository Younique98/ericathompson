import Image from "next/image";
import { Intro } from "@/components/Intro";
import { TechSkills } from "@/components/skills/TechSkills";
import { TestimonialGrid } from "@/components/testimonials/TestimonialGrid";
import { Reveal } from "@/components/motion/Reveal";

export const metadata = {
  title: "About",
  description:
    "Self-taught to staff-level: Erica Thompson's background, track record, technical skills, and client testimonials.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Erica Thompson",
    description:
      "Self-taught to staff-level: background, track record, technical skills, and client testimonials.",
    url: "https://ericathompson.io/about",
  },
};

export default function AboutPage() {
  const achievements = [
    {
      title: "Revenue & Compliance",
      items: [
        "Led B2B onboarding launch generating $1.2M in annual revenue, lifting activation 15% and cutting drop-off 18%",
        "Directed Pet Model Act compliance 10 days ahead of deadline with zero disruption to 20K+ policies, protecting $12.5M in annual revenue",
        "Drove 95% WCAG 2.1 accessibility compliance across 10+ surfaces, eliminating $500K+ in legal exposure and passing Series A due diligence",
        "Directed penetration test remediation to 100% compliance on critical and high findings, contributing to an $8.9M funding round",
      ],
    },
    {
      title: "Audits & Platform Reliability",
      items: [
        "Audited a documentation platform serving 100K+ users, traced 400+ daily routing errors to systemic root causes, and shipped fixes reducing errors 60%",
        "Rebuilt a legacy Redux codebase into modern React and TypeScript, then managed a Flutter to React Native migration with full feature parity",
        "Built a custom CMS that cut engineering bottlenecks 35% and accelerated campaign delivery 20%",
        "Reduced claim processing time 30%, an estimated $250K in annual savings",
      ],
    },
    {
      title: "Infrastructure & Scale",
      items: [
        "Deployed core platform infrastructure serving millions of gaming tournament entries",
        "Built Terraform and Golang automation eliminating 100% of manual engineer onboarding steps; the tool remains in production",
        "Implemented observability across Datadog, New Relic, and PagerDuty, cutting incident response from 2+ hours to 36 minutes",
        "Standardized mobile state management, reducing development time 40% as Fractional CTO of a distributed team of 5",
      ],
    },
    {
      title: "Teaching & Leadership",
      items: [
        "Trained 500+ engineers into the industry with an 80%+ placement rate",
        "Mentored 100+ military leaders, veterans, and spouses into technical roles",
        "Deliver full-stack curriculum to 30+ students per cohort as Senior Software Consultant and Instructor",
        "Founded the Bridge Program: emerging engineers ship real products under mentorship, and graduates now hold full-time engineering roles",
      ],
    },
  ];

  return (
    <div className="min-h-screen py-12 px-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 pt-6">About Me</h1>

      <section className="grid md:grid-cols-[1fr_auto] gap-8 items-center mb-4">
        <div className="prose prose-invert max-w-none">
          <Intro />
        </div>
        <div className="order-first md:order-none relative w-28 h-28 md:w-40 md:h-40 mx-auto md:mx-0 mb-2 md:mb-0 shrink-0 rounded-full overflow-hidden ring-4 ring-cyan-500/30 shadow-xl">
          <Image
            src="/images/erica-thompson-portrait.jpg"
            alt="Portrait of Erica Thompson"
            fill
            className="object-cover"
          />
        </div>
      </section>

      <section className="mb-12 text-lg leading-relaxed space-y-4">
        <p>
          I am self-taught. I started fixing family computers, and over 12+
          years I worked my way to staff-level engineering across frontend,
          backend, and infrastructure, at companies from InsurTech startups to
          HashiCorp. For years I operated above my title. Now I set the title.
        </p>
        <p>
          Today I run fractional CTO engagements: technical audits, ongoing
          advisory, and team training. My work is measured in outcomes, not
          hours. Every number below comes from shipped work, and I document my
          methods publicly at The Imposter Engineer, because I believe
          self-taught engineers need judgment and proof, not permission.
        </p>
      </section>

      <Reveal>
        <section className="mb-12">
          <h2 className="text-2xl font-bold my-6">Track Record</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((a) => (
              <div
                key={a.title}
                className="p-6 bg-card border border-border rounded-xl transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-3">{a.title}</h3>
                <ul className="space-y-2 text-muted-foreground">
                  {a.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <TechSkills />
        </section>
      </Reveal>

      <Reveal>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-2">Impact & Testimonials</h2>
          <p className="text-lg mb-8 text-muted-foreground">
            Throughout my career, I&apos;ve had the privilege of mentoring
            professionals transitioning into tech, helping them navigate
            career changes, and supporting their growth. Here&apos;s what
            some of them have to say:
          </p>

          <TestimonialGrid />

          <div className="mt-10 p-6 bg-card border border-border rounded-xl text-center">
            <p className="text-lg text-muted-foreground">
              Interested in mentoring, or want to talk about your team&apos;s
              engineering? I&apos;m always happy to connect.
            </p>
            <div className="pt-6">
              <a
                href="/contact"
                className="px-6 py-3 rounded-lg bg-cyan-500 dark:bg-cyan-400 text-white dark:text-black font-semibold hover:bg-cyan-400 dark:hover:bg-cyan-300 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
