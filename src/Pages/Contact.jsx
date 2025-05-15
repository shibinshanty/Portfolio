import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { MdPhoneAndroid } from "react-icons/md";

export default function Contact() {
  return (
    <section id="contact" className="bg-blue-50 py-16 px-6 text-center">
      <h2 className="text-3xl font-semibold text-blue-700 mb-6">Get in Touch</h2>

      <div className="flex flex-col items-center gap-4 text-lg text-gray-700 mb-6">
        <div className="flex items-center gap-2">
          <FaEnvelope className="text-blue-600" />
          <a href="mailto:shibinshanty612000@gmail.com" className="text-blue-600 hover:underline">
            shibinshanty612000@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-2">
          <MdPhoneAndroid className="text-blue-600" />
          <span className="text-gray-800">+91 90615 15113</span>
        </div>
      </div>

      <div className="flex justify-center gap-6 mt-4 text-3xl">
        <a
          href="https://github.com/shibinshanty"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-black"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/shibin-shanty-562379227"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:text-blue-900"
        >
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
}


