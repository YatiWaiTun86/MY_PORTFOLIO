export default function Contact() {
  return (
    <section
      id="contact"
      className="p-6 flex flex-col items-start justify-center"
    >
      <h2
        className="animate-bounce glitch text-red-300 text-3xl font-bold uppercase tracking-widest mb-6 relative"
        data-text="Contact"
      >
        Contact
      </h2>

      <div className="cyberpunk-card p-6 rounded border border-blue-400 max-w-xl w-full text-white space-y-4">
        <p>
          <span className="text-xl text-neon-pink font-bold glitch">
            Email:
          </span>{" "}
          <a
            href="mailto:yatiwaitun86@gmail.com"
            className="text-xl text-neon-pink font-bold glitch hover:text-neon-pink transition duration-300"
          >
            yatiwaitun86@gmail.com
          </a>
        </p>
        <p>
          <span className="text-xl text-neon-pink font-bold glitch">
            LinkedIn:
          </span>{" "}
          <a
            href="https://linkedin.com/in/yatiwaitun86"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-neon-pink font-bold glitch hover:text-neon-pink transition duration-300"
          >
            Yatiwaitun86
          </a>
        </p>
      </div>
    </section>
  );
}
