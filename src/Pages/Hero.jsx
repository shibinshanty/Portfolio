// src/Pages/Hero.jsx
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from "react-icons/si";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 bg-gradient-to-r from-indigo-50 to-sky-100">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        Hi, I'm Shibin Shanty
      </h1>
      <p className="text-xl md:text-2xl text-gray-600 mb-8">
        A passionate <span className="font-semibold text-indigo-600">MERN Stack Developer | Passionate about building full-stack apps</span>
      </p>

      {/* MERN Icons */}
      <div className="flex space-x-10 text-5xl text-gray-700">
        <div className="flex flex-col items-center">
          <SiMongodb className="text-green-600" />
          <span className="text-sm mt-2">MongoDB</span>
        </div>
        <div className="flex flex-col items-center">
          <SiExpress className="text-black" />
          <span className="text-sm mt-2">Express</span>
        </div>
        <div className="flex flex-col items-center">
          <SiReact className="text-sky-500 animate-spin-slow" />
          <span className="text-sm mt-2">React</span>
        </div>
        <div className="flex flex-col items-center">
          <SiNodedotjs className="text-green-700" />
          <span className="text-sm mt-2">Node.js</span>
        </div>
      </div>
    </section>
  );
}
