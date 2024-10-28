import React, { useState } from "react";
import { motion } from "framer-motion";

const HomeLoader = ({ onAnimationComplete }) => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const text = "SHUMAIL".split(""); // Split by letters

  return (
    <div className="bg-bodyColor grid min-h-screen overflow-hidden">
      <motion.div
        className="place-self-center"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2, // Stagger each letter
              duration: 1, // Duration for the entire animation
            },
          },
        }}
        onAnimationComplete={() => {
          setAnimationComplete(true);
          onAnimationComplete(); // Call the parent callback
        }}
      >
        {text.map((el, i) => (
          <motion.span
            key={i}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="font-exo text-[4rem] sm:text-[8rem] md:text-[12rem] xl:text-[15rem]"
            style={{
              WebkitTextStroke: animationComplete ? "none" : "0.3vw #10e956", // Hide stroke after animation
              color: animationComplete ? "#10e956" : "transparent", // Set color after animation
            }}
          >
            {el}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

export default HomeLoader;
