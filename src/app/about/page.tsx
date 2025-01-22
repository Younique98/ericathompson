import { Intro } from "@/components/Intro";
import { TechSkills } from "@/components/skills/TechSkills";
import { TestimonialCarousel } from "@/components/testimonials/TestimonialCarousel";

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12">
      <h1 className="text-4xl font-bold mb-8">About Me</h1>
      <div className="prose prose-invert max-w-none">
        <Intro />
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <TechSkills />
        </div>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold my-6">Technical Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-gray-800 rounded">
            <h3 className="text-xl font-semibold mb-3">
              System Design & Architecture
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                • Designed and implemented distributed systems handling 10M+
                daily requests
              </li>
              <li>• Led architecture modernization reducing latency by 40%</li>
              <li>
                • Developed scalable microservices using Go and Kubernetes
              </li>
              <li>
                • Implemented efficient caching strategies reducing database
                load by 60%
              </li>
            </ul>
          </div>
          <div className="p-6 bg-gray-800 rounded">
            <h3 className="text-xl font-semibold mb-3">
              Cloud & Infrastructure
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                • Orchestrated migration of legacy systems to cloud
                infrastructure
              </li>
              <li>
                • Built robust CI/CD pipelines improving deployment time by 70%
              </li>
              <li>• Implemented infrastructure as code using Terraform</li>
              <li>
                • Designed multi-region deployment strategies for high
                availability
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Teaching Methodology</h2>
        <div className="space-y-6">
          <div className="p-6 bg-gray-800 rounded">
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

          <div className="p-6 bg-gray-800 rounded">
            <h3 className="text-xl font-semibold mb-4">
              Mentorship Philosophy
            </h3>
            <p className="text-gray-300">
              My mentoring approach is built on three core principles:
            </p>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-gray-700 rounded">
                <h4 className="font-semibold mb-2">Personalized Guidance</h4>
                <p className="text-sm">
                  Tailoring advice to each individual&apos;s goals and learning
                  style
                </p>
              </div>
              <div className="p-4 bg-gray-700 rounded">
                <h4 className="font-semibold mb-2">Practical Application</h4>
                <p className="text-sm">
                  Converting theory into real-world engineering practices
                </p>
              </div>
              <div className="p-4 bg-gray-700 rounded">
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
        <h2 className="text-2xl font-bold mb-6">Impact & Testimonials</h2>
        <p className="text-lg mb-8 text-gray-300">
          Throughout my career, I&apos;ve had the privilege of mentoring
          professionals transitioning into tech, helping them navigate career
          changes, and supporting their growth. Here&apos;s what some of them
          have to say:
        </p>

        <TestimonialCarousel />

        <div className="mt-8 p-6 bg-gray-800 rounded-lg text-center">
          <p className="text-lg text-gray-300">
            Interested in mentoring? Feel free to reach out - I&apos;m always
            happy to connect and share experiences in tech.
          </p>
          <div className="py-6">
            <a
              href="/contact"
              className="px-6 py-3 rounded-lg bg-cyan-400 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
