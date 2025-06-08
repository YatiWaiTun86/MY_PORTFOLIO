export default function Projects() {
  const projects = [
    {
      image: "/img/2ward.png",
      title: "Learning Center And Agency Services (2024)",
      description:
        "A full-stack platform featuring student registration, learning progress tracking, interview management, and real-time chat using WebSocket. Built with Next.js 13, Node.js, TypeScript, MongoDB, and integrated multilingual support (Myanmar, English, Japanese).",
      link: "https://towards21services.com/",
      stack: [
        "Node.js",
        "Express.js",
        "TypeScript",
        "WebSocket",
        "MongoDB",
        "Next.js 13",
        "React Query",
        "Zustand",
        "React Hook Form",
        "Zod",
        "Figma",
        "i18n",
      ],
    },
    {
      image: "/img/Tower.png",
      title: "ERP Systems (2024)",
      description:
        "A comprehensive ERP solution integrating Point of Sale (POS), Inventory Management, and Accounting modules. Designed to streamline business operations, it offers real-time inventory tracking and seamless transaction processing for efficient and accurate decision-making.",
      stack: [
        "TypeScript",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Sequelize",
        "Sequelize-CLI",
        "Inversify",
        "Zod",
        "Swagger",
        "Next.js 14",
        "Zustand",
        "Shadcn/UI",
        "NextUI",
      ],
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
        {projects.map(({ image, title, description, link, stack }) => (
          <div
            key={title}
            className="cyberpunk-card card-text p-5 rounded border border-pink-500 relative overflow-hidden group"
          >
            {image && (
              <img
                src={image}
                alt={title}
                className="mb-3 w-full h-40 object-cover rounded"
              />
            )}
            <h3
              className="text-xl text-neon-pink font-bold mb-2 glitch"
              data-text={title}
            >
              {title}
            </h3>
            <p className="text-white mb-4">{description}</p>
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="read-more text-blue-400 hover:underline"
              >
                View
              </a>
            )}

            {stack && (
              <div className="mt-4 flex flex-wrap gap-2">
                {stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-semibold px-3 py-1 border border-pink-400 text-pink-300 rounded-full hover:bg-red-500 hover:text-black transition duration-200 cyberpunk-glow"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
