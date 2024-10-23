import React, { useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import AdminSideBar from "../components/SideBar/AdminSideBar";
import ProjectSchema from "../components/ProjectSchema/ProjectSchema";
const Project = () => {
  const navigate = useNavigate();
  const cookieValue = Cookies.get("_adm_2v");
  const data = JSON.parse(cookieValue);
  const token = data.accessToken;
  const user = data.user;

  useEffect(() => {
    if (!cookieValue) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Upload Projects</title>
      </Helmet>
      <div className="grid grid-cols-3 md:grid-cols-4 bg-gray-700">
        <div className="h-screen">
          <AdminSideBar />
        </div>
        <div className="col-span-2 md:col-span-3">
          <ProjectSchema token={token} user={user} />
        </div>
      </div>
    </>
  );
};

export default Project;
