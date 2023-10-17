import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="E-Commerce Manager"
            subTitle="Neptune Corp, Miami, FL (2021 - Present)"
            des={
              <ul>
                <li>• Established and maintained a balanced and accurate e-commerce budget to execute on
                  initiatives with proper funding and enrich customer experience.</li>
                <li>• Optimized e-commerce fulfillment strategy to minimize costs while maximizing profits
                  and customer satisfaction.</li>
                <li>• Supported annual media planning process and media buying for digital content.</li>
                <li>• Constructed new payment systems for online orders to optimize website shopping and
                  boost sales.</li>
              </ul>
            }
          />
          <ResumeCard
            title="Restaurant Manager"
            subTitle="The Knife Restaurant, Miami, FL (2013 - 2020)"
            des={
              <ul>
                <li>• Managed day-to-day restaurant operations, including staff supervision, customer service, and inventory control.</li>
                <li>• Demonstrated strong leadership by fostering a positive work environment and ensuring team cohesion.</li>
                <li>• Developed and implemented efficient workflows, resulting in improved customer satisfaction and profitability.</li>
                <li>• Utilized problem-solving skills to address customer concerns and resolve issues promptly.</li>
              </ul>
            }
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
