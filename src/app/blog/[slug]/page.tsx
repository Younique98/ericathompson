import Link from "next/link";
import { notFound } from "next/navigation";
import { posts, getPostBySlug, readTimeFor } from "@/lib/posts";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Field Notes`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen py-12 px-6 max-w-3xl mx-auto">
      <Link
        href="/blog"
        className="inline-block mb-8 text-sm font-semibold text-cyan-600 dark:text-cyan-400 hover:underline"
      >
        &larr; Field Notes
      </Link>
      <article>
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3 font-mono">
          <span>{post.date}</span>
          <span>&middot;</span>
          <span>{readTimeFor(post)}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-8">{post.title}</h1>
        <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
          {post.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </article>

      <div className="mt-14 pt-8 border-t border-border">
        <p className="text-muted-foreground mb-4">
          Need something like this handled on your codebase?
        </p>
        <Link
          href="/contact"
          className="inline-block px-6 py-3 rounded-lg bg-cyan-500 dark:bg-cyan-400 text-white dark:text-black font-semibold hover:bg-cyan-400 dark:hover:bg-cyan-300 transition-colors"
        >
          Book an Audit
        </Link>
      </div>
    </div>
  );
}
