import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TbMailFast } from "react-icons/tb";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="pt-5" id="contact">
      <p
        className="font-cyborg text-[2.21rem] sm:text-[3rem] tracking-[.234rem] text-center skew-y-6"
        style={{
          textShadow:
            "0px 0px 0 #10e956, -1px -1px 0 #10e956, 1px -1px 0 #10e956, -1px 1px 0 #10e956, 1px 1px 0 #10e956",
        }}
      >
        Connect With Me
      </p>
      <div className="mt-8 grid grid-cols-1 text-white md:grid-cols-2">
        <a
          className="bg-[#424141] text-neutral-400 grid p-10 hover:bg-[#2d2c2c] duration-300"
          href="https://github.com/shumail786-hash"
        >
          <div className="m-auto flex justify-center items-center gap-x-9">
            <FaGithub className=" text-[1.85rem] sm:text-[3rem] tracking-[.234rem]" />
            <p className="font-exo  text-[1.85rem] sm:text-[3rem] tracking-[.234rem]">
              GitHub
            </p>
          </div>
        </a>
        <a
          className="bg-[#0077b5] text-neutral-300 grid p-10 hover:bg-[#006da5] duration-300"
          href="https://www.linkedin.com/in/shumail-dev/"
        >
          <div className="m-auto flex justify-center items-center gap-x-4">
            <FaLinkedin className="text-[1.85rem] sm:text-[3rem] tracking-[.234rem]" />
            <p className="font-exo text-[1.85rem] sm:text-[3rem] tracking-[.234rem] font-bold">
              LinkedIn
            </p>
          </div>
        </a>
      </div>
      <div className="bg-secondaryColor">
        <a
          href="mailto:muhammadshumailmushtaq@gmail.com"
          className="flex justify-center items-center font-cyborg text-center pt-1 text-[1.45rem]
          sm:text-[2rem] sm:tracking-[.234rem] uppercase text-neutral-200
          hover:bg-[#18742d] duration-300"
        >
          <p className="-skew-x-6">Shoot me a mail </p>
          <p className="rotate-3">
            <TbMailFast />
          </p>
        </a>
      </div>
      <div className="text-center">
        <p
          className="text-[1.85rem] sm:text-[3rem] tracking-[.184rem] pt-1 font-exo"
          style={{
            textShadow:
              "0px 0px 0 #10e956, -1px -1px 0 #10e956, 1px -1px 0 #10e956, -1px 1px 0 #10e956, 1px 1px 0 #10e956",
          }}
        >
          Muhammad Shumail Mushtaq
        </p>
        <p className="text-backgroundColor pb-2 font-light text-sm md:text-base w-[90%] mx-auto">
          Built from scratch with{" "}
          <span className="animate-pulse text-3xl">💚.</span>{" "}
          <span className="font-exo">© </span>Copyright {year}. All Rights
          Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
