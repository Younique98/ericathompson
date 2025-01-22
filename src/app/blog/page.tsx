// TODO (ET): Add dynamic rendering of blog posts
export default function BlogPage() {
  const blogPosts = [
    {
      title:
        "How AI-Driven Development is Revolutionizing Software Engineering",
      excerpt:
        "AI tools like GitHub Copilot and ChatGPT are transforming software development, offering code suggestions, automating repetitive tasks, and boosting productivity. Learn how these technologies are shaping the future of engineering.",
    },
    {
      title: "Why WCAG Compliance Matters for Your Business",
      excerpt:
        "Digital accessibility isn't optional—it's essential for reaching a diverse audience and boosting business success. Discover how WCAG compliance drives inclusivity, improves SEO, and expands your market reach.",
    },
    {
      title: "Mastering Frontend Development",
      excerpt:
        "In today's tech landscape, frontend development is more critical than ever. This course dives deep into creating stunning, responsive, and accessible user interfaces. Learn advanced concepts in React, CSS architecture, and design systems, while mastering the art of building user-friendly applications. Whether you're a beginner looking to break into frontend development or a mid-level engineer aiming to refine your skills, this course provides the tools and guidance you need to deliver polished, professional results.",
    },
    {
      title: "Introduction to Cloud Architecture",
      excerpt:
        "Cloud computing powers the modern web, and this course is your gateway to understanding how it all works. Explore the essentials of cloud architecture, from infrastructure-as-code to building scalable, resilient systems on platforms like AWS and GCP. By the end of this course, you'll have a solid foundation in deploying, monitoring, and managing cloud-based applications, giving you the confidence to tackle real-world challenges in any organization.",
    },
    {
      title: "The Art of Debugging",
      excerpt:
        "Debugging is an essential skill for any developer, but mastering it can be a game-changer. This course teaches you how to think like a detective, systematically approach bugs, and uncover hidden issues in your code. From learning how to use debugging tools to leveraging logs and performance monitoring, this course will help you build robust, error-free applications. Perfect for developers who want to improve their problem-solving skills and reduce debugging frustration.",
    },
  ];

  return (
    <div className="min-h-screen py-12 px-6">
      <h1 className="text-4xl font-bold mb-8 pt-8">Blog</h1>
      <div className="grid gap-8">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="p-6 rounded bg-gray-800 hover:bg-gray-700 transition-colors"
          >
            <h2 className="text-2xl font-semibold mb-2 text-white">
              {post.title}
            </h2>
            <p className="text-gray-400">{post.excerpt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
