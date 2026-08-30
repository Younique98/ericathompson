import Link from "next/link";
import { posts, readTimeFor } from "@/lib/posts";
import { Reveal } from "@/components/motion/Reveal";

export const metadata = {
  title: "Field Notes | Erica Thompson",
  description:
    "Notes on engineering, audits, and the industry from Erica Thompson, Fractional CTO and Technical Educator.",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen py-12 px-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-4 pt-8">Field Notes</h1>
      <p className="text-lg text-muted-foreground mb-12">
        Lessons from audits, compliance work, and training 500+ engineers.
        Longer form at{" "}
        <a
          href="https://www.youtube.com/@TheImposterEngineer"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-600 dark:text-cyan-400 hover:underline"
        >
          The Imposter Engineer
        </a>
        .
      </p>
      <div className="grid gap-5">
        {posts.map((post, index) => (
          <Reveal key={post.slug} delay={(index % 4) * 0.05}>
            <Link
              href={`/blog/${post.slug}`}
              className="block p-6 rounded-xl bg-card border border-border transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-cyan-500/40"
            >
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2 font-mono">
                <span>{post.date}</span>
                <span>&middot;</span>
                <span>{readTimeFor(post)}</span>
              </div>
              <h2 className="text-xl font-bold mb-2">{post.title}</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {post.excerpt}
              </p>
              <span className="mt-4 inline-block text-sm font-semibold text-cyan-600 dark:text-cyan-400">
                Read more &rarr;
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
