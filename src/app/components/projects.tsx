export default function Projects() {
  const projects = [
    {
      title: "Toward21Service",
      description: "Toward21Service",
      link: "https://github.com/yatiwaitun86/pixel-portfolio",
    },
    {
      title: "Cool Play",
      description: "A fun pixel art game made with React.",
      link: "https://github.com/yatiwaitun86/cool-game",
    },
    {
      title: "Cool Sleep",
      description: "A fun pixel art game made with React.",
      link: "https://github.com/yatiwaitun86/cool-game",
    },
  ];

  return (
    <section id="projects" className="mb-10">
      <h2
        className="mt-7 animate-bounce glitch text-red-300 text-3xl font-bold uppercase tracking-widest mb-6 relative"
        data-text="Projects"
      >
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map(({ title, description, link }) => (
          <div
            key={title}
            className="cyberpunk-card card-text p-5 rounded border border-pink-500 relative overflow-hidden group"
          >
            <h3
              className="text-xl text-neon-pink font-bold mb-2 glitch"
              data-text={title}
            >
              {title}
            </h3>
            <p className="text-white mb-4">{description}</p>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="read-more"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
