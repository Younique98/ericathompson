//TODO (ET) Fix lighting issues when toggled between dark and light theme
export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 sm:p-20 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 font-sans">
      {/* Header */}
      <header className="w-full flex justify-between items-center max-w-5xl">
        <h1 className="text-3xl font-bold">
          <span className="text-blue-500">Welcome</span>
        </h1>

      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center gap-16 text-center row-start-2 max-w-2xl">
        <section>
          <h2 className="text-4xl font-extrabold sm:text-5xl">
            Hi, I&apos;m <span className="text-blue-500">Erica</span> 👋🏾
          </h2>
          <p className="mt-4 text-lg">
            I&apos;m a software engineer by trade and a storyteller at heart,
            passionate about creating scalable systems and demystifying tech for
            others.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-bold mb-4">What I Do</h3>
          <p className="text-lg">
            I specialize in building mobile apps, scalable web applications, and
            cloud solutions. Let&apos;s build something amazing together.
          </p>
        </section>
TODO: (ET) Add in my work and demo link/live link, and github link
        <div className="flex gap-4">
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
          >
            View My Work
          </a>
          <a
            href="/contact"
            className="px-6 py-3 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700"
          >
            Get in Touch
          </a>
                    <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
          >
            View My Resume
          </a>
        </div>
      </main>

    </div>
  );
}
