import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { ImCross } from "react-icons/im";
import ContentWrapper from "../ContentWrapper/ContentWrapper";

const Navbar = () => {
  const [navbarToggler, setNavbarToggler] = useState(false);
  const [isClosing, setIsClosing] = useState(false); // Track closing state

  const handleClose = () => {
    setIsClosing(true); // Trigger exit animation
    setTimeout(() => {
      setNavbarToggler(false); // Close after animation completes
      setIsClosing(false); // Reset closing state
    }, 300); // Duration matches the CSS transition time (300ms)
  };

  return (
    <div className="sticky top-0 z-50">
      <nav className=" bg-backgroundColor">
        <ContentWrapper className={"flex justify-between items-center"}>
          <NavLink to={"/"} className={"border-none outline-none"}>
            <div className="h-10 w-10 bg-bodyColor rounded-md">
              <p className="text-center text-backgroundColor text-3xl font-cyborg pt-[2.5px]">
                S
              </p>
            </div>
          </NavLink>

          {/* Toggler Section Start */}
          <div className="h-8 w-8 flex items-center justify-center relative">
            {/* Open Icon */}
            <GiHamburgerMenu
              className={`absolute text-3xl cursor-pointer z-50
              ${
                navbarToggler
                  ? "rotate-180 opacity-0 scale-0"
                  : "rotate-0 opacity-100 scale-100"
              }`}
              onClick={() => setNavbarToggler(true)}
              style={{ transition: "all 0.5s ease-in-out" }}
            />

            {/* Close Icon */}
            <ImCross
              className={`absolute text-2xl cursor-pointer z-50 text-backgroundColor
              ${
                navbarToggler
                  ? "rotate-0 opacity-100 scale-100"
                  : "-rotate-90 opacity-0 scale-0"
              }`}
              onClick={handleClose}
              style={{ transition: "all 0.5s ease-in-out" }}
            />
          </div>
        </ContentWrapper>
      </nav>

      <div
        className={`w-full top-0 absolute h-[100vh] grid grid-rows-6 transition-all duration-500 ease-in-out 
          ${
            navbarToggler && !isClosing
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-full"
          }`}
      >
        <div className="bg-[#1d1e20] row-span-4 flex justify-center items-center">
          <ul
            className="flex flex-col items-end relative font-cyborg gap-y-1 top-3 text-backgroundColor 
          text-[1.85rem] sm:text-[2.76rem] tracking-[.234rem]
          "
          >
            <li onClick={handleClose}>
              <a href="#home">Home</a>
            </li>
            <li onClick={handleClose}>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/me">About Me</NavLink>
            </li>
            <li onClick={handleClose}>
              <a href="#contact">Contact Me</a>
            </li>
          </ul>
        </div>

        <a
          className="bg-[#424141] text-neutral-400 grid hover:bg-[#2d2c2c] duration-300"
          href="https://github.com/shumail786-hash"
        >
          <div className="m-auto place-items-center flex justify-center items-center gap-x-9">
            <FaGithub className="text-[1.85rem] sm:text-[3rem] tracking-[.234rem]" />
            <p className="font-exo font-exo text-[1.85rem] sm:text-[3rem] tracking-[.234rem] font-bold">
              GitHub
            </p>
          </div>
        </a>

        <a
          className="bg-[#0077b5] text-neutral-300 grid hover:bg-[#006da5] duration-300"
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
    </div>
  );
};

export default Navbar;
