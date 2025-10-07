import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section className="relative w-full h-auto sm:h-screen mx-auto overflow-hidden">
      <div
        className={`max-w-7xl mx-auto ${styles.paddingX} 
        flex flex-col sm:flex-row sm:items-start gap-5
        sm:absolute sm:inset-0 sm:top-[120px] sm:z-10 sm:mb-0`}
      >
        <div className="flex flex-row sm:flex-col justify-start items-center sm:items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="hidden sm:block w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="mt-6 sm:mt-0">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I am <span className="text-[#915EFF]">Elijah</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I do{" "}
            <Typewriter
              options={{
                strings: ["Web Development", "Mobile App Development"],
                autoStart: true,
                loop: true,
                loopCount: Infinity,
                deleteSpeed: "natural",
                pauseFor: 1000,
              }}
            />
          </p>
        </div>
      </div>

      <div className="relative w-full h-full flex justify-center items-center mb-6 sm:mb-0">
        <ComputersCanvas />
      </div>

      <div className="hidden sm:flex absolute bottom-10 w-full justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
