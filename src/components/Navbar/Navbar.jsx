import React, { useState } from "react";
import navLogo from "../../assets/sLogo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [navbarToggler, setNavbarToggler] = useState(false);

  return (
    <div className="sticky top-0">
      <nav className="flex justify-between items-center p-2 bg-backgroundColor">
        <div className="relative h-10 w-10 bg-bodyColor rounded-lg">
          <img src={navLogo} alt="navbar logo" loading="lazy" />
        </div>

        {/* Toggler Section Start */}
        <div className="h-8 w-8 flex items-center justify-center relative">
          {/* Open Icon */}
          <GiHamburgerMenu
            className={`absolute text-2xl cursor-pointer z-50
              ${
                navbarToggler
                  ? "rotate-260 opacity-0 scale-0"
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
            onClick={() => setNavbarToggler(false)}
            style={{ transition: "all 0.5s ease-in-out" }}
          />
        </div>
      </nav>
      {navbarToggler ? (
        <div
          className="w-full top-0 absolute h-[100vh] grid grid-rows-8"
          style={{ transition: "all 0.5s ease-in-out" }}
        >
          <div className="bg-[#1d1e20] row-span-4 flex justify-center items-center">
            <ul className="flex flex-col items-end relative font-cyborg gap-y-4 top-2  text-backgroundColor">
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/"}>
                  Project<sub>s</sub>
                </NavLink>
              </li>{" "}
              <li>
                <NavLink to={"/"}>
                  Skill<sub>s</sub>
                </NavLink>
              </li>{" "}
              <li>
                <NavLink to={"/"}>
                  About M<sub>e</sub>{" "}
                </NavLink>
              </li>{" "}
              <li>
                <NavLink to={"/"}>
                  Contact M<sub>e</sub>
                </NavLink>
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
                <p className="font-cyborg text-2xl">
                  {/* G<span className="font-sans">ithub</span> */}
                  Github
                </p>
              </div>
            </div>
          </a>

          <a
            className="bg-[#0077b5] text-neutral-300 grid"
            href="https://github.com/shumail786-hash"
          >
            <div className="place-self-center flex items-center w-[75%] justify-center gap-x-10">
              <div className="text-2xl text-end">
                <FaLinkedin />
              </div>
              <div>
                {/* <p className="font-cyborg text-2xl">
                  L<span className="font-sans">inked</span>I
                  <span className="font-sans">n</span>{" "}
                </p> */}
                <p className="font-cyborg text-2xl">LinkedIn</p>
              </div>
            </div>
          </a>

          <div className="border">
            {/*
             sm:row-span-2
            */}
            <p>4</p>
          </div>
          <div className="border">
            <p>5</p>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Navbar;
