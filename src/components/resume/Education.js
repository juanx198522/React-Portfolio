import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Full Stack Web Development Certificate"
            subTitle="University of Miami (2023)"
            des="Completed a 24-week intensive Full Stack Web Development program with a strong focus on acquiring skills in both frontend and backend technologies. Developed full-stack single-page web applications using RESTful API and MERN stack, demonstrating proficiency in building dynamic and interactive websites." />
          <ResumeCard
            title="AI Applications And Prompt Engineering Certificate"
            subTitle="EdX (2023)"
            des="Learned to define AI applications, master prompt engineering and machine learning, and leverage these tools for personal projects. Also gained expertise in crafting effective questions for AI applications and utilizing LangChain and ChatGPT for application development."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
