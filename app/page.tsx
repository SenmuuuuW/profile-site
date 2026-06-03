const focusItems = [
  "Learning frontend basics",
  "Building my personal profile site",
  "Exploring AI coding with Codex",
  "Documenting my progress on X and GitHub",
];

const projects = [
  {
    title: "Profile Site",
    description: "Personal homepage and build-in-public base.",
  },
  {
    title: "AI Tools Collection",
    description: "Coming soon.",
  },
  {
    title: "AI Learning Log Generator",
    description: "Coming soon.",
  },
  {
    title: "Research / Information Collection Tool",
    description: "Coming soon.",
  },
];

const learningLog = [
  "Day 1: Updated X profile and posted my first build-in-public tweet.",
  "Day 2: Built the first version of my personal homepage and pushed it to GitHub.",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-16 px-6 py-8 sm:px-8 sm:py-12 lg:py-16">
        <header className="flex items-center justify-between gap-6">
          <a className="text-sm font-semibold tracking-wide text-white" href="#">
            Senmuuuu
          </a>
          <nav className="hidden items-center gap-5 text-sm text-zinc-400 sm:flex">
            <a className="transition hover:text-white" href="#about">
              🧑‍💻 About
            </a>
            <a className="transition hover:text-white" href="#projects">
              🛠️ Projects
            </a>
            <a className="transition hover:text-white" href="#links">
              🔗 Links
            </a>
          </nav>
        </header>

        <section className="grid gap-8 border-b border-zinc-800 pb-14 pt-10 sm:pt-16 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-cyan-300">
              Building from zero ✦
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">
              Senmuuuu
            </h1>
            <div className="mt-6 space-y-3 text-lg leading-8 text-zinc-300 sm:text-xl">
              <p>17 y/o builder learning AI, law, photography, and product.</p>
              <p>Building small tools with Codex / vibe coding.</p>
              <p>Documenting the journey from zero.</p>
            </div>
          </div>
          <div className="rounded-lg border border-zinc-800 bg-zinc-900/60 p-5">
            <p className="text-sm font-medium text-zinc-400">🚀 Current mode</p>
            <p className="mt-3 text-2xl font-semibold text-white">
              Learn, build, ship, write.
            </p>
          </div>
        </section>

        <section id="about" className="grid gap-6 md:grid-cols-[0.35fr_0.65fr]">
          <h2 className="text-2xl font-semibold text-white">🧑‍💻 About</h2>
          <p className="text-base leading-8 text-zinc-300">
            I&apos;m currently in high school in the US. I&apos;m interested in
            how AI can help people build useful tools, understand law and
            research, and improve creative workflows.
          </p>
        </section>

        <section className="grid gap-6 md:grid-cols-[0.35fr_0.65fr]">
          <h2 className="text-2xl font-semibold text-white">
            🔍 Current Focus
          </h2>
          <ul className="space-y-3 text-zinc-300">
            {focusItems.map((item) => (
              <li className="flex gap-3" key={item}>
                <span className="mt-2 size-1.5 flex-none rounded-full bg-cyan-300" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section id="projects" className="grid gap-6">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl font-semibold text-white">🛠️ Projects</h2>
            <p className="text-sm text-zinc-500">Small tools, early versions.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {projects.map((project) => (
              <article
                className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-5 transition hover:border-zinc-700 hover:bg-zinc-900"
                key={project.title}
              >
                <h3 className="text-lg font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mt-3 leading-7 text-zinc-400">
                  {project.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-[0.35fr_0.65fr]">
          <h2 className="text-2xl font-semibold text-white">
            📝 Learning Log
          </h2>
          <div className="space-y-3">
            {learningLog.map((entry) => (
              <p
                className="rounded-lg border border-zinc-800 bg-zinc-900/40 px-4 py-3 text-zinc-300"
                key={entry}
              >
                {entry}
              </p>
            ))}
          </div>
        </section>

        <section
          id="links"
          className="flex flex-col gap-4 border-t border-zinc-800 pt-8 sm:flex-row sm:items-center sm:justify-between"
        >
          <h2 className="text-2xl font-semibold text-white">🔗 Links</h2>
          <div className="flex flex-wrap gap-3">
            <a
              className="rounded-lg border border-zinc-700 px-4 py-2 text-sm font-medium text-zinc-200 transition hover:border-cyan-300 hover:text-white"
              href="https://x.com/MiWaAilearning"
              rel="noreferrer"
              target="_blank"
            >
              X
            </a>
            <a
              className="rounded-lg border border-zinc-700 px-4 py-2 text-sm font-medium text-zinc-200 transition hover:border-cyan-300 hover:text-white"
              href="https://github.com/SenmuuuuW"
              rel="noreferrer"
              target="_blank"
            >
              GitHub
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
