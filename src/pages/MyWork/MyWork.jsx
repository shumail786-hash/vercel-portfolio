import React, { useEffect, useState, useRef } from "react";
import { getAllProjects } from "../../api/projects.api";
import { CLOUDINARY_URL } from "../../utils/constant";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import { motion, useInView } from "framer-motion";

const MyWork = () => {
  const [projects, setProjects] = useState([]);
  // usign ref
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { threshold: 0.2 });

  useEffect(() => {
    const fetchAllProjects = async () => {
      try {
        const response = await getAllProjects();
        setProjects(response.data.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    setTimeout(() => {
      fetchAllProjects();
    }, 1000);
  }, []);

  return (
    <div id="projects">
      <ContentWrapper>
        <div
          className="bg-zinc-950 mx-auto border rounded-xl border-backgroundColor w-fit px-5 md:py-6 md:px-10 hover:shadow-none hover:cursor-pointer hover:bg-neutral-900 duration-300"
          style={{ boxShadow: "0px 0px 10px #10e956" }}
        >
          <p
            className="text-[2.21rem] sm:text-[3rem] tracking-[.234rem] font-cyborg"
            style={{
              textShadow:
                "0px 0px 0 #10e956, -1px -1px 0 #10e956, 1px -1px 0 #10e956, -1px 1px 0 #10e956, 1px 1px 0 #10e956",
            }}
          >
            PROJECTS
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-x-2 gap-y-3 mt-10">
          {projects &&
            projects.map((project, index) => (
              <span key={index}>
                <div className="bg-neutral-900 py-3 px-3 rounded-md text-white">
                  <div className="h-[15rem] sm:h-[30rem] w-full overflow-hidden rounded-md">
                    <img
                      src={`${CLOUDINARY_URL}/${project.projectThumbnail}`}
                      alt="headerImage"
                      className="hover:scale-125 duration-300 bg-center h-full w-full"
                    />
                  </div>
                  <div className="p-2">
                    <p className="mt-3 font-exo tracking-[2px] text-3xl font-bold">
                      {project.projectTitle}
                    </p>
                    <p className="py-2 font-exo tracking-[1.1px] text-gray-300 text-base">
                      {project.projectDescription}
                    </p>

                    <div className="flex gap-x-2 gap-y-2 py-2 flex-wrap">
                      {project.tags.map((elem, index) => (
                        <span
                          className="text-sm bg-backgroundColor text-bodyColor rounded-md px-3 py-1 font-sans"
                          key={index}
                        >
                          {elem.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </span>
            ))}
        </div>
      </ContentWrapper>
    </div>
  );
};

export default MyWork;
