export default function Skills() {
  const skills = [
    { name: "React.js & Next.js", level: 90 },
    { name: "Tailwind CSS", level: 85 },
    { name: "JavaScript (ES6+)", level: 88 },
    { name: "Pixel Art & Animation", level: 75 },
  ];

  return (
    <section id="skills" className="mb-10">
      <h1
        className="mt-7 animate-bounce glitch text-red-300 text-3xl font-bold uppercase tracking-widest mb-6 relative"
        data-text="Skills"
      >
        Skills
      </h1>

      <div className="space-y-6">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between mb-1 text-pink-400 text-sm font-semibold tracking-wide uppercase">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="relative h-4 w-full rounded-full bg-[#1a1a1a] border border-pink-500 shadow-inner overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-pink-500 to-yellow-300 shadow-[0_0_10px_#ff00ff] animate-pulse"
                style={{ width: `${skill.level}%` }}
              ></div>
              <div className="absolute inset-0 border border-pink-500 opacity-20 pointer-events-none" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
