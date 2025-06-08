export default function Experience() {
  const experiences = [
    {
      date: "Jan 2024 - Apr 2024",
      title: "Learning Center And Agency Services",
      position: "Fullstack - Freelance Project",
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
      description: `Designed and developed a full-stack web application using Node.js, Express.js, TypeScript, WebSocket, and MongoDB with Mongoose for data modeling and real-time communication.

  Planned and structured the ERD (Entity-Relationship Diagram) and collaborated with the team to establish a scalable base project structure, optimizing code flow and maintainability.
  
  Implemented core features including:
  - Blog System: CRUD functionality, form handling, and content display.
  - User Profile System: User data management and profile customization.
  - Pagination, Search, and Filtering: Efficient data querying and user-friendly navigation.
  
  Built the frontend with Next.js 13, integrating React Query for data fetching, Zustand for state management, React Hook Form for form handling, and Zod for schema validation.
  
  Designed intuitive and responsive UI/UX using Figma, focusing on seamless user interactions across devices.
  
  Developed reusable and logical components for blog management and user profiles.
  
  Integrated i18n localization, supporting Myanmar, English, and Japanese for a multilingual user experience.`,
    },
    {
      date: "Apr 2024 - Aug 2024",
      title: "ERP Systems",
      position: "Fullstack - Freelance Project",
      description: `Designed and developed a full-stack financial management and employee system using Node.js, Express.js, TypeScript, and PostgreSQL with Sequelize for data modeling and Sequelize-CLI for migrations.
          
          Planned and structured the ERD, and implemented core backend features including employee management, financial tracking, and role-based access. Used Inversify for dependency injection, Zod for validation, and Swagger for API documentation.
          
          Built the frontend with Next.js 14, integrating Zustand for state management and UI components from Shadcn/UI and NextUI. Focused on reusable components, application flow, and responsive design.`,
      stack: [
        "TypeScript", // language
        "Node.js", // runtime
        "Express.js", // backend framework
        "PostgreSQL", // database
        "Sequelize", // ORM
        "Sequelize-CLI", // migrations
        "Inversify", // DI container
        "Zod", // validation
        "Swagger", // API docs
        "Next.js 14", // frontend framework
        "Zustand", // state management
        "Shadcn/UI", // UI components
        "NextUI", // UI components
      ],
    },
    {
      date: "Mar 2023 - Apr 2023",
      title: "Hotel Reservation Rooms And Blogs Management System",
      position: "Fullstack - School Training Project",
      description: `Designed and developed a web application using Spring MVC, Hibernate, and MySQL, hosted on Tomcat 9. Created and optimized the Entity-Relationship Diagram (ERD) to structure the database efficiently.
          
          Implemented full CRUD (Create, Read, Update, Delete) operations for user account management, ensuring robust data handling.
          
          Integrated authorization and authentication features using JavaScript, jQuery, Bootstrap, and JSTL to secure user access and enhance user experience.
          
          Developed, maintained, tested, and debugged the website to ensure high performance and reliability.`,

      stack: [
        "Spring MVC",
        "Hibernate",
        "MySQL",
        "Tomcat 9",
        "JavaScript",
        "jQuery",
        "Bootstrap",
        "JSTL",
        "ERD Design",
      ],
    },
  ];

  return (
    <section id="experience" className="mb-10">
      <h2
        className="mt-7 animate-bounce glitch text-red-300 text-3xl font-bold uppercase tracking-widest mb-6 relative"
        data-text="Experiences"
      >
        Experiences
      </h2>
      <div className="grid grid-cols-1  gap-6">
        {experiences.map(({ title, description, date, position, stack }) => (
          <div
            key={title}
            className="cyberpunk-card card-text p-5 rounded border border-pink-500 relative overflow-hidden group flex flex-col justify-between"
          >
            <div>
              <h3
                className="text-xl text-neon-pink font-bold mb-2 glitch"
                data-text={title}
              >
                {title}
              </h3>
              {date && <p className="text-pink-400 text-sm mb-1">{date}</p>}
              {position && (
                <p className="text-pink-300 text-sm italic mb-2">{position}</p>
              )}
              <p className="text-white whitespace-pre-line mb-4">
                {description}
              </p>
            </div>
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
