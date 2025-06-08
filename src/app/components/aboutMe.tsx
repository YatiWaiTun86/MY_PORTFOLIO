export default function AboutMe() {
  return (
    <section
      id="aboutMe"
      className="flex flex-col items-center justify-center overflow-hidden p-4"
    >
      {/* <h1
        className="mt-7 animate-bounce glitch text-red-300 text-3xl font-bold uppercase tracking-widest mb-6 relative"
        data-text="About Me"
      >
        About Me
      </h1> */}
      <div className="cyberpunk-card card-text p-6 rounded border border-pink-500 relative overflow-hidden max-w-4xl w-full">
        <p className="text-sm text-white/80 mb-6 leading-relaxed">
          I am deeply passionate about web development not just as a career, but
          as a way to bring ideas to life. There is something incredibly
          exciting about building products that people can actually use, and I
          find joy in every part of the process — from planning and
          problem-solving to polishing the final user experience. I am the kind
          of person who gets lost in flow when coding, always curious to explore
          how things work under the hood. I love the challenge of solving logic
          puzzles, improving performance, and learning something new every day.
          To me, development is a creative outlet — a space where logic meets
          imagination. Whether it is a small detail that enhances usability or a
          big feature that brings value, I care deeply about what I create. I am
          always seeking better ways to build and more meaningful problems to
          solve.
        </p>
        <a
          href="#"
          className="read-more text-neon-blue underline hover:text-neon-pink transition-colors duration-300"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}
