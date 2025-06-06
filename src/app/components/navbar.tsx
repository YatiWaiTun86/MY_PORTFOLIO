export default function Navbar() {
  return (
    <nav className="flex justify-between items-center max-w-3xl mx-auto p-4 mb-8 border-b border-blue-400">
      {/* <div className="text-2xl font-bold text-blue-400">Elaina</div> */}
      <ul className="flex space-x-6 text-lg">
        <li>
          <a href="#skills" className="hover:text-blue-300 transition-colors">
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-blue-300 transition-colors">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-blue-300 transition-colors">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
