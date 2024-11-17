import React, { useEffect, useRef, useState } from "react";
import ContentWrapper from "../../../components/ContentWrapper/ContentWrapper";
import { motion, useInView } from "framer-motion";

const Header = () => {
  // References for sections
  const sectionRef = useRef(null);

  const [startAnimation, setStartAnimation] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setStartAnimation(true);
    }, 100);
  }, []);

  // Hook to detect when the section is in view
  const isInView = useInView(sectionRef, { threshold: 0.2 });

  // Animation Variants
  const leftContentVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const rightImageVariant = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1.2 } },
  };

  return (
    <div
      id="home"
      ref={sectionRef} // Attach the ref to track visibility
      className={
        startAnimation
          ? "lg:h-[100vh] xl:h-[90vh] bg-center bg-no-repeat"
          : "h-screen"
      }
      style={{
        backgroundImage:
          "linear-gradient(to right bottom, rgba(5, 8, 16, .5), rgba(5, 8, 16, .5)), url(/headerImage.webp)",
        backgroundSize: "cover",
      }}
    >
      <ContentWrapper className={"flex flex-wrap lg:flex-nowrap"}>
        {/* Left Content */}
        {startAnimation === true ? (
          <>
            <motion.div
              className="flex items-center justify-evenly flex-col md:items-start w-[100%]"
              variants={leftContentVariant}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <p
                className="font-sans tracking-[1.3px] my-5 bg-backgroundColor pl-2 pr-4 rounded-lg py-1 text-[.85rem] text-backgroundColor md:text-[1.2rem] font-exo"
                style={{
                  background: "rgba(20, 233, 88, .157)",
                  lineHeight: "2.4rem",
                }}
              >
                <motion.span
                  className="px-2 inline-block"
                  animate={{ rotate: [0, 25, -25, 0], scale: [1, 1.4, 1] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeIn",
                  }}
                >
                  ✌🏻
                </motion.span>
                Hi there! I'm Shumail
              </p>
              <p className="text-[2.21rem] md:text-[3rem] text-white font-semibold capitalize text-center md:text-start leading-tight my-2 font-exo">
                A{" "}
                <span className="text-backgroundColor tracking-widest font-cyborg">
                  MERN Stack Developer
                </span>{" "}
                . I help startups to{" "}
                <span className="text-backgroundColor font-cyborg tracking-widest">
                  launch
                </span>{" "}
                &{" "}
                <span className="text-backgroundColor font-cyborg tracking-widest">
                  grow
                </span>{" "}
                their products.
              </p>
              <p className="text-slate-100 leading-snug text-sm sm:text-base lg:text-lg font-exo tracking-[.75px] text-center md:text-start">
                My passion lies in mastering the complete{" "}
                <span className="font-cyborg text-backgroundColor text-xl">
                  MERN Stack
                </span>{" "}
                enabling me to build robust, scalable, and dynamic full-stack
                applications. I am driven to thrive in modern web development by
                seamlessly integrating frontend and backend technologies to
                deliver efficient and user-centric solutions.
              </p>
            </motion.div>

            {/* Right Image */}
            <motion.div
              className="flex items-center w-[100%] justify-center"
              variants={rightImageVariant}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <img src="/workingImage.webp" alt="Working" loading="eager" />
            </motion.div>
          </>
        ) : (
          <></>
        )}
      </ContentWrapper>
    </div>
  );
};

export default Header;
