import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiGit,
  SiJavascript,
} from "react-icons/si";

const skillIcons = {
  MongoDB: <SiMongodb className="text-green-600" />,
  Express: <SiExpress className="text-black" />,
  React: <SiReact className="text-sky-500" />,
  "Node.js": <SiNodedotjs className="text-green-700" />,
  "Tailwind CSS": <SiTailwindcss className="text-cyan-500" />,
  Git: <SiGit className="text-orange-600" />,
  JavaScript: <SiJavascript className="text-yellow-500" />,
};

export default function Skills() {
  const skills = ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS", "Git", "JavaScript"];

  return (
    <section id="skills" className="bg-blue-50 py-16 px-6">
      <h2 className="text-3xl font-semibold text-center text-blue-700 mb-8">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map(skill => (
          <span
            key={skill}
            className="flex items-center gap-2 bg-white text-blue-700 border border-blue-300 px-4 py-2 rounded-full shadow"
          >
            {skillIcons[skill]}
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
