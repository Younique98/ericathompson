// TODO (ET): Add dynamic rendering of blog posts
export default function BlogPage() {
  const posts = [
    {
      title:
        "How AI-assisted development is changing the day-to-day for engineers",
      excerpt:
        "Tools like Copilot and Claude are changing how code gets written, but not why it gets written. Notes on where AI actually earns its place in a real engineering workflow, and where it doesn't.",
      date: "2026",
      readTime: "5 min read",
    },
    {
      title: "WCAG compliance is a business decision, not just a legal one",
      excerpt:
        "Accessibility gets treated as a checkbox until it becomes a lawsuit. What it actually costs to get right, what it costs to ignore, and how to make the case to a team that isn't convinced yet.",
      date: "2026",
      readTime: "4 min read",
    },
  ];

  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-3">Field Notes</h1>
        <p className="text-gray-400 mb-10 leading-relaxed">
          Notes on engineering, audits, and the industry. Longer-form videos
          live on{" "}
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

        <div className="grid gap-6">
          {posts.map((post, index) => (
            <article
              key={index}
              className="p-6 rounded-xl bg-gray-800 hover:bg-gray-700 transition-colors"
            >
              <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                <span>{post.date}</span>
                <span>&middot;</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="text-xl font-semibold mb-2 text-white">
                {post.title}
              </h2>
              <p className="text-gray-400 leading-relaxed">{post.excerpt}</p>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-gray-500">
          New posts are on the way. Check back soon.
        </p>
      </div>
    </div>
  );
}
