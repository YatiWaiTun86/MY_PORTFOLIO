import { Mail, Linkedin, PhoneCallIcon } from "lucide-react";

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

      <div className="cyberpunk-card p-6 rounded border border-blue-400 max-w-xl w-full text-white space-y-6 shadow-xl bg-black/70 backdrop-blur-md">
        {/* Email */}
        <div className="flex items-center space-x-3">
          <Mail className="text-neon-pink w-6 h-6 animate-pulse" />
          <a
            href="mailto:yatiwaitun86@gmail.com"
            className="text-xl text-neon-pink font-bold glitch hover:text-pink-300 transition duration-300"
          >
            yatiwaitun86@gmail.com
          </a>
        </div>

        {/* LinkedIn */}
        <div className="flex items-center space-x-3">
          <Linkedin className="text-neon-pink w-6 h-6 animate-pulse" />
          <a
            href="https://linkedin.com/in/yatiwaitun86"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-neon-pink font-bold glitch hover:text-pink-300 transition duration-300"
          >
            Yatiwaitun86
          </a>
        </div>

        <div className="flex items-center space-x-3">
          <PhoneCallIcon className="text-neon-pink w-6 h-6 animate-pulse" />
          <a
            href="https://linkedin.com/in/yatiwaitun86"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-neon-pink font-bold glitch hover:text-pink-300 transition duration-300"
          >
            +95 9959699158
          </a>
        </div>
      </div>
    </section>
  );
}
