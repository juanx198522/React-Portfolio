import React from 'react';
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-green-500">Juan Cruz Garcia</h3>
        <p className="text-lg font-normal text-gray-400 mb-6">
          Full Stack Web Developer
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">(954) 744-6443</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">juanx1985@icloud.com</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Location: <span className="text-lightText">Miami, FL</span>
        </p>
      </div>
      <div className="flex flex-col gap-4 mt-6">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <a href="https://www.linkedin.com/in/juan-cruz-garcia-549277272/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
          </span>
          <span className="bannerIcon">
            <a href="https://github.com/juanx198522" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </span>
          <span className="bannerIcon">
            <a href="mailto:juanx1985@gmail.com">
              <FaEnvelope />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft;