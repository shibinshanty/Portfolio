import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "Travel Booking Website",
      desc: "A full-stack MERN travel platform with authentication, booking system, and admin dashboard.",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      github: "https://github.com/shibinshanty/travel_booking",
     
    },
    {
      title: "Sgya",
      desc: "A responsive static React-based website built with modern design and Tailwind.",
      tech: ["React", "BootStrap"],
      github: "https://github.com/shibinshanty/sgya-chelakkara",
      
    },
    {
      title: "To-do App",
      desc: "A simple todo app with React ",
      tech: ["React"],
      github: "https://github.com/shibinshanty/Project-Todo",
     
    },
     {
      title: "Weather",
      desc: "A responsive weather application built using React and OpenWeatherMap API.",
      tech: [ "React"],
      github: "https://github.com/shibinshanty/https://github.com/shibinshanty/weather",
     
    }
  ];

  return (
    <section id="projects" className="py-16 px-6 max-w-6xl mx-auto bg-gradient-to-tr from-blue-50 to-indigo-100">
      <h2 className="text-3xl font-semibold text-center text-blue-700 mb-12">Projects</h2>
      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1 duration-300"
          >
            <h3 className="text-xl font-bold text-blue-600 mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.desc}</p>

            {/* Tech Stack Badges */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  className="flex items-center gap-1 text-gray-700 hover:text-blue-600"
                >
                  <FaGithub /> GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
