import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [navbarToggler, setNavbarToggler] = useState(false);
  const [isClosing, setIsClosing] = useState(false); // Track closing state

  const handleClose = () => {
    setIsClosing(true); // Trigger exit animation
    setTimeout(() => {
      setNavbarToggler(false); // Close after animation completes
      setIsClosing(false); // Reset closing state
    }, 300); // Duration matches the CSS transition time (500ms)
  };

  return (
    <div className="sticky top-0">
      <nav className="flex justify-between items-center bg-backgroundColor px-10 py-2">
        <div className="relative h-10 w-10 bg-bodyColor rounded-lg">
          <p className="font-cyborg text-3xl text-backgroundColor text-center">
            S
          </p>
        </div>

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
          <MdClose
            className={`absolute text-[1.85rem] cursor-pointer z-50 text-backgroundColor
              ${
                navbarToggler
                  ? "rotate-0 opacity-100 scale-100"
                  : "-rotate-90 opacity-0 scale-0"
              }`}
            onClick={handleClose}
            style={{ transition: "all 0.5s ease-in-out" }}
          />
        </div>
      </nav>

      <div
        className={`w-full top-0 absolute h-[100vh] grid grid-rows-6 transition-all duration-500 ease-in-out 
          ${
            navbarToggler && !isClosing
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-full"
          }`}
      >
        <div className="bg-[#1d1e20] row-span-4 flex justify-center items-center">
          <ul className="flex flex-col items-end relative font-cyborg gap-y-4 top-3 text-backgroundColor text-xl">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/skills">Skills</NavLink>
            </li>
            <li>
              <NavLink to="/me">About Me</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact Me</NavLink>
            </li>
          </ul>
        </div>

        <a
          className="bg-[#424141] text-neutral-400 grid"
          href="https://github.com/shumail786-hash"
        >
          <div className="place-self-center flex items-center w-[75%] justify-center gap-x-10">
            <div className="text-2xl text-end">
              <FaGithub />
            </div>
            <div>
              <p className="font-cyborg text-2xl">Github</p>
            </div>
          </div>
        </a>

        <a
          className="bg-[#0077b5] text-neutral-300 grid"
          href="https://www.linkedin.com/in/shumail-dev/"
        >
          <div className="place-self-center flex items-center w-[75%] justify-center gap-x-10">
            <div className="text-3xl text-end">
              <FaLinkedin />
            </div>
            <div>
              <p className="font-cyborg text-2xl">LinkedIn</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
