export default function CoursesPage() {
  return (
    <div className="min-h-screen py-12">
      <h1 className="text-4xl font-bold mb-8">Courses</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-6 rounded bg-gray-800">
          <h2 className="text-xl font-bold mb-4">
            Women In Tech: Establish and Grow Your Developer Career
          </h2>
          <p className="text-gray-400 mb-4">
            Learn actionable strategies to build and advance your career as a
            developer. In this session, we cover networking, skill-building, and
            overcoming common challenges faced by women in tech.
          </p>
          <section className="w-full">
            <div className="relative w-full pb-[56.25%]">
              <iframe
                src="https://www.youtube.com/embed/ZvDZPpVM9gI"
                title="YouTube video"
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </section>
        </div>
        <div className="p-6 rounded bg-gray-800">
          <h2 className="text-xl font-bold mb-4">
            The importance of WCAG compliance and its impact on business reach.
          </h2>
          <p className="text-gray-400">
            Web Content Accessibility Guidelines (WCAG) compliance is essential
            for creating inclusive digital experiences. By ensuring websites and
            applications are accessible to users with disabilities, businesses
            can expand their reach to a broader audience, including the
            estimated 1 billion people globally who experience some form of
            disability.
          </p>
          <p className="text-gray-400 py-6">Course details coming soon...</p>
        </div>
        <div className="p-6 rounded bg-gray-800">
          <h2 className="text-xl font-bold mb-4">
            The rise of AI-driven development (e.g., GitHub Copilot, ChatGPT for
            coding).
          </h2>
          <p className="text-gray-400">
            As AI continues to evolve, the role of software engineers will
            transform, with an emphasis on collaboration between human expertise
            and machine intelligence. Mastering these tools will not only be a
            competitive advantage but a necessity for engineers aiming to stay
            ahead in an increasingly AI-augmented industry.
          </p>
          <p className="text-gray-400 py-6">Course details coming soon...</p>
        </div>
      </div>
    </div>
  );
}
