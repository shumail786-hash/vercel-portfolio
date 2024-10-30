import React from "react";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import { FaReact } from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiJavascript,
  SiGithub,
  SiNetlify,
  SiVercel,
  SiTailwindcss,
  SiBootstrap,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

// Array of skills with icons and names
const skills = [
  { name: "MongoDB", icon: SiMongodb },
  { name: "ExpressJS", icon: SiExpress },
  { name: "ReactJS", icon: FaReact },
  { name: "NodeJS", icon: SiNodedotjs },
  { name: "JavaScript", icon: SiJavascript },
  { name: "GitHub", icon: SiGithub },
  { name: "Netlify", icon: SiNetlify },
  { name: "Vercel", icon: SiVercel },
  { name: "TailwindCss", icon: SiTailwindcss },
  { name: "BootStrap", icon: SiBootstrap },
  { name: "HTML5", icon: SiHtml5 },
  { name: "Css3", icon: SiCss3 },
];

const Skills = () => {
  return (
    <div id="skills">
      <ContentWrapper>
        <div
          className="bg-neutral-900 mx-auto border rounded-xl border-backgroundColor w-fit px-5 md:py-6 md:px-10 
          "
          style={{
            boxShadow: "0px 0px 10px #10e956",
          }}
        >
          <p
            className="text-[2.21rem] sm:text-[3rem] tracking-[.234rem] font-cyborg"
            style={{
              textShadow:
                "0px 0px 0 #10e956, -1px -1px 0 #10e956, 1px -1px 0 #10e956, -1px 1px 0 #10e956, 1px 1px 0 #10e956",
            }}
          >
            SKILLS
          </p>
        </div>

        <div
          className="
          text-white bg-[#0c8c34] grid grid-cols-2 
          md:grid-cols-3 lg:grid-cols-4 p-4 md:p-6 xl:p-8 my-8
          sm:w-[80%] lg:w-[70%] sm:mx-auto rounded-3xl
        "
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="
              px-4 rounded-lg place-items-center mx-auto
              w-[95%] py-2 gap-x-3 
              bg-neutral-900 my-1
            "
            >
              <skill.icon className="text-backgroundColor text-2xl font-extrabold" />
              <p className="font-exo tracking-[1px] pt-1">{skill.name}</p>
            </div>
          ))}
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Skills;
