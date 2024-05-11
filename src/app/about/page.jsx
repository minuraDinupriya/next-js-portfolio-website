"use client";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* About container */}
      <div className="">
        {/* TEXT CONTAINER */}
        <div className="">
          {/* BIOGRAPHY CONTAINER */}
          <div className=""></div>
          {/* SKILLS CONTAINER */}
          <div className=""></div>
          {/* EXPERIENCE CONTAINER */}
          <div className=""></div>
        </div>

        {/* SVG CONTAINER */}
        <div className="hidden"></div>
      </div>
    </motion.div>
  );
};

export default About;
