
export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md py-4 px-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-700"></h1>
        <ul className="flex space-x-6 text-blue-700 font-medium">
          <li>
            <a href="#home" className="hover:text-blue-500 transition">Home</a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-500 transition">About</a>
          </li>
          <li>
            <a href="#skills" className="hover:text-blue-500 transition">Skills</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-500 transition">Projects</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-500 transition">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

