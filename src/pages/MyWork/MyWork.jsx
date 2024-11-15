import React, { useEffect, useState } from "react";
import { getAllProjects } from "../../api/projects.api";
import { CLOUDINARY_URL } from "../../utils/constant";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import { motion } from "framer-motion";

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

        <div className="grid grid-cols-1 lg:grid-cols-2 justify-center gap-x-2 gap-y-3 mt-10">
          {loading ? (
            <p
              className="font-cyborg w-full col-span-3 text-center text-[3rem] tracking-widest"
              style={{
                textShadow:
                  "0px 0px 0 #10e956, -1px -1px 0 #10e956, 1px -1px 0 #10e956, -1px 1px 0 #10e956, 1px 1px 0 #10e956",
              }}
            >
              Polishing My Genius...
            </p>
          ) : (
            projects &&
            projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false, amount: 0.2 }}
              >
                <div className="bg-neutral-900 py-3 px-3 rounded-md text-white ">
                  <div className="h-[15rem] sm:h-[30rem] w-full overflow-hidden rounded-md">
                    <img
                      src={`${CLOUDINARY_URL}/${project.projectThumbnail}`}
                      alt={`${project.projectTitle}`}
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
              </motion.div>
            ))
          )}
        </div>
      </ContentWrapper>
    </div>
  );
};

export default MyWork;
