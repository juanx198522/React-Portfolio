import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaLinkedinIn, FaGithub, FaEnvelope, FaDownload } from "react-icons/fa";
import { resume } from "../../assets/index";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Frontend Web Developer.", "Backend Web Developer.", "Full Stack Web Developer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "JuanCruzGarciaResume.pdf";
    link.click();
  };

  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <br /> <span className="text-designColor capitalize text-green-500">Juan Cruz Garcia</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span className="text-yellow-500">{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          As a recent graduate of the Full Stack Web Development program at the University of Miami, I possess a foundation in computer science, with a specialized focus on JavaScript and server-side development. My comprehensive training has honed my proficiency in a wide range of frontend and backend technologies.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
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
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Resume
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon" onClick={downloadResume}>
              <FaDownload />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBanner