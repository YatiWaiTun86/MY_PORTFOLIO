export default function Navbar() {
  return (
    <nav className="flex justify-between items-center max-w-3xl mx-auto p-4 mb-8 border-b border-blue-400">
      <div className="mr-28">ELAINA</div>
      <ul className="flex space-x-6 text-lg">
        <li>
          <a
            href="#experience"
            className="hover:text-blue-300 transition-colors"
          >
            EXPERIENCES
          </a>
        </li>
        <li>
          <a href="#skills" className="hover:text-blue-300 transition-colors">
            SKILLS
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-blue-300 transition-colors">
            PROJECTS
          </a>
        </li>
        <li>
          <a href="#aboutMe" className="hover:text-blue-300 transition-colors">
            ABOUT ME
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-blue-300 transition-colors">
            CONTACT
          </a>
        </li>
      </ul>
    </nav>
  );
}
