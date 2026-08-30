import { Intro } from "@/components/Intro";
import { TechSkills } from "@/components/skills/TechSkills";
import { TestimonialGrid } from "@/components/testimonials/TestimonialGrid";

const impact = [
  { stat: "$1.2M", label: "annual B2B revenue delivered" },
  { stat: "$12.5M", label: "revenue protected through compliance" },
  { stat: "$500K+", label: "legal exposure eliminated (WCAG 2.1)" },
  { stat: "60%", label: "error reduction on a 100K+ user platform" },
  { stat: "500+", label: "engineers trained, 80%+ placement" },
  { stat: "12+", label: "years across frontend, backend, infra" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12 px-6">
      <h1 className="text-4xl font-bold mb-4 pt-6">About Me</h1>
      <div className="prose prose-invert max-w-none">
        <Intro />
      </div>

      {/* Impact */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Impact, in numbers</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {impact.map((p) => (
            <div
              key={p.label}
              className="rounded-xl bg-gray-800 p-6 text-center"
            >
              <div className="text-3xl font-extrabold text-cyan-400">
                {p.stat}
              </div>
              <div className="mt-2 text-sm text-gray-300 leading-snug">
                {p.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How I work */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">How I work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-gray-800 rounded-xl">
            <h3 className="text-xl font-semibold mb-3">Audits first</h3>
            <p className="text-gray-300">
              I don&apos;t start with opinions, I start with the codebase.
              Every engagement opens with a real audit: what&apos;s broken,
              why, and what it&apos;s costing you. Security, architecture,
              accessibility, performance.
            </p>
          </div>
          <div className="p-6 bg-gray-800 rounded-xl">
            <h3 className="text-xl font-semibold mb-3">
              Built to make myself unnecessary
            </h3>
            <p className="text-gray-300">
              Documentation, decision records, and hands-on training so your
              team keeps the judgment after I leave, not another vendor
              relationship to manage.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        <TechSkills />
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Teaching Methodology</h2>
        <div className="space-y-6">
          <div className="p-6 bg-gray-800 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">
              The &ldquo;Building Blocks&rdquo; Approach
            </h3>
            <p className="text-gray-300">
              I believe in breaking down complex systems into understandable
              components. My teaching style focuses on:
            </p>
            <ul className="mt-4 space-y-2 text-gray-300">
              <li>
                • Starting with fundamental concepts before diving into
                complexity
              </li>
              <li>
                • Using real-world examples to illustrate theoretical concepts
              </li>
              <li>
                • Providing hands-on exercises and practical implementations
              </li>
              <li>
                • Emphasizing the &ldquo;why&rdquo; behind architectural
                decisions
              </li>
            </ul>
          </div>

          <div className="p-6 bg-gray-800 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">
              Mentorship Philosophy
            </h3>
            <p className="text-gray-300">
              My mentoring approach is built on three core principles:
            </p>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-gray-700 rounded-lg">
                <h4 className="font-semibold mb-2">Personalized Guidance</h4>
                <p className="text-sm">
                  Tailoring advice to each individual&apos;s goals and
                  learning style
                </p>
              </div>
              <div className="p-4 bg-gray-700 rounded-lg">
                <h4 className="font-semibold mb-2">Practical Application</h4>
                <p className="text-sm">
                  Converting theory into real-world engineering practices
                </p>
              </div>
              <div className="p-4 bg-gray-700 rounded-lg">
                <h4 className="font-semibold mb-2">Continuous Growth</h4>
                <p className="text-sm">
                  Building a foundation for long-term career development
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-2">Impact & Testimonials</h2>
        <p className="text-lg mb-8 text-gray-300">
          Throughout my career, I&apos;ve had the privilege of mentoring
          professionals transitioning into tech, helping them navigate career
          changes, and supporting their growth. Here&apos;s what some of them
          have to say:
        </p>

        <TestimonialGrid />

        <div className="mt-10 p-6 bg-gray-800 rounded-xl text-center">
          <p className="text-lg text-gray-300">
            Interested in mentoring? Feel free to reach out - I&apos;m always
            happy to connect and share experiences in tech.
          </p>
          <div className="pt-6">
            <a
              href="/contact"
              className="px-6 py-3 rounded-lg bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
