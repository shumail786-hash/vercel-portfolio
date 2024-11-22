import React, { useEffect, useState } from "react";
import { getAllProjects } from "../../api/projects.api";
import { CLOUDINARY_URL } from "../../utils/constant";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import { motion } from "framer-motion";
import { SiGithub, SiVivawallet } from "react-icons/si";

const MyWork = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAllProjects = async () => {
      setLoading(true);
      try {
        const response = await getAllProjects();
        setProjects(
          response.data.data.sort((a, b) => b._id.localeCompare(a._id))
        );
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchAllProjects();
  }, []);

  return (
    <div id="projects">
      <ContentWrapper>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.2 }}
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
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-2 gap-y-3 mt-10">
          {loading ? (
            <p
              className="font-cyborg w-full col-span-3 text-center text-[3rem] tracking-widest"
              style={{
                textShadow:
                  "0px 0px 0 #10e956, -1px -1px 0 #10e956, 1px -1px 0 #10e956, -1px 1px 0 #10e956, 1px 1px 0 #10e956",
              }}
            >
              Fetching Projects 4 U!
            </p>
          ) : (
            projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false, amount: 0.2 }}
                className="h-full flex"
              >
                <div className="bg-neutral-900 py-3 px-3 rounded-md text-white flex flex-col justify-between h-full">
                  <div className="w-full overflow-hidden rounded-md">
                    <img
                      src={`${CLOUDINARY_URL}/${project.projectThumbnail}`}
                      alt={`${project.projectTitle}`}
                      className="duration-500 bg-center h-full w-full aspect-[10/9] lg:aspect-[13/9]"
                      loading="eager"
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
                    <div className="flex gap-x-3 text-lg gap-y-2 py-2 flex-wrap">
                      {project.github ? (
                        <motion.div
                          className="h-8 w-8 rounded-full bg-stone-700 flex items-center justify-center cursor-pointer"
                          whileInView={{ scale: [0.8, 1] }}
                          whileHover={{ scale: [1, 0.8] }}
                          transition={{
                            duration: 0.5,
                            ease: "easeInOut",
                          }}
                        >
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <SiGithub />
                          </a>
                        </motion.div>
                      ) : (
                        ""
                      )}
                      {project.view ? (
                        <motion.div
                          className="h-8 w-8 rounded-full bg-gray-700 flex items-center justify-center cursor-pointer"
                          whileInView={{ scale: [0.8, 1] }}
                          whileHover={{ scale: [1, 0.8] }}
                          transition={{
                            duration: 0.5,
                            ease: "easeInOut",
                          }}
                        >
                          <a
                            href={project.view}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              stroke-width="0"
                              viewBox="0 0 1024 1024"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M396 512a112 112 0 1 0 224 0 112 112 0 1 0-224 0zm546.2-25.8C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM508 688c-97.2 0-176-78.8-176-176s78.8-176 176-176 176 78.8 176 176-78.8 176-176 176z"></path>
                            </svg>
                          </a>
                        </motion.div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </ContentWrapper>
    </div>
  );
};

export default MyWork;
