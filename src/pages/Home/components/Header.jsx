import React from "react";
import ContentWrapper from "../../../components/ContentWrapper/ContentWrapper";
import { motion } from "framer-motion";
const Header = () => {
  return (
    <div id="home" className="lg:h-[100vh] xl:h-[90vh] flex">
      <ContentWrapper className={"flex flex-wrap md:flex-nowrap"}>
        <div className="flex items-center justify-evenly flex-col md:items-start w-[100%]">
          <p
            className="font-sans tracking-[1.3px] my-5 bg-backgroundColor pl-2 pr-4 rounded-lg py-1 text-[.85rem] text-backgroundColor md:text-[1.2rem] font-exo"
            style={{
              background: "rgba(20, 233, 88, .157)",
              lineHeight: "2.4rem",
            }}
          >
            {" "}
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
            &
            <span className="text-backgroundColor font-cyborg tracking-widest">
              {" "}
              grow{" "}
            </span>
            Their products.
          </p>
          <p className="text-slate-100 leading-snug text-sm sm:text-base lg:text-lg font-exo tracking-[.75px] text-center md:text-start">
            My passion lies in mastering the complete{" "}
            <span className="font-cyborg text-backgroundColor text-xl">
              MERN Stack{" "}
            </span>{" "}
            enabling me to build robust, scalable, and dynamic full-stack
            applications. I am driven to thrive in modern web development by
            seamlessly integrating frontend and backend technologies to deliver
            efficient and user-centric solutions.
          </p>
        </div>

        {/* right */}
        <div className="flex items-center w-[100%] justify-center">
          <img
            src="/workingImage.png"
            alt="Working"
            loading="lazy"
            className="md:h-[60%] lg:h-auto"
          />
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Header;
