import React, { useState, useRef } from "react";
import ContentWrapper from "../../../../components/ContentWrapper/ContentWrapper";
import { uploadProjects } from "../../../../api/admin.api";

const ProjectSchema = ({ token }) => {
  const [inputValues, setInputValues] = useState({
    projectTitle: "",
    projectDescription: "",
    projectCategory: "",
    projectThumbnail: null,
  });

  const inputRef = useRef();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const maxSizeInBytes = 1 * 1024 * 1024; // 1MB

    if (file && file.size > maxSizeInBytes) {
      alert("File size must be less than or equal to 1MB.");
      event.target.value = ""; // Reset the file input
      setInputValues({ ...inputValues, projectThumbnail: null });
    } else {
      setInputValues({ ...inputValues, projectThumbnail: file });
    }
  };

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const handleFormData = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    // Add all input values to the FormData object
    formData.append("projectTitle", inputValues.projectTitle);
    formData.append("projectCategory", inputValues.projectCategory);
    formData.append("projectDescription", inputValues.projectDescription);

    // Add the file if it exists
    if (inputValues.projectThumbnail) {
      formData.append("projectThumbnail", inputValues.projectThumbnail);
    }

    try {
      await uploadProjects(token, formData);
      alert("Project Uploaded Successfully");
    } catch (error) {
      console.error("Error uploading project:", error);
    }
  };

  return (
    <>
      <p className="text-center w-full py-1 text-3xl text-slate-200">
        Project Schema
      </p>
      <ContentWrapper className="text-center">
        <p className="text-xl text-slate-200">Form Fields</p>
        <form
          className="flex flex-col items-center"
          onSubmit={handleFormData}
          encType="multipart/form-data"
        >
          <input
            type="text"
            name="projectTitle"
            className="border my-2 w-1/2 bg-transparent text-slate-200 px-2 font-normal outline-none rounded-md"
            placeholder="Project Title"
            value={inputValues.projectTitle}
            onChange={handleFormChange}
          />
          <input
            type="text"
            name="projectCategory"
            className="border my-2 w-1/2 bg-transparent text-slate-200 px-2 font-normal outline-none rounded-md"
            placeholder="Project Category"
            value={inputValues.projectCategory}
            onChange={handleFormChange}
          />
          <input
            type="text"
            name="projectDescription"
            className="border my-2 w-1/2 bg-transparent text-slate-200 px-2 font-normal outline-none rounded-md"
            placeholder="Project Description"
            value={inputValues.projectDescription}
            onChange={handleFormChange}
          />
          <input
            type="file"
            name="projectThumbnail"
            ref={inputRef}
            onChange={handleFileChange}
            accept=".png,.jpg,.jpeg"
            className="my-2 w-1/2 bg-transparent text-slate-200 p-2 border rounded-md"
          />
          <button
            type="submit"
            className="my-2 border p-2 rounded text-base bg-blue-500 border-blue-400 text-slate-200"
          >
            Upload Project
          </button>
        </form>
      </ContentWrapper>
    </>
  );
};

export default ProjectSchema;
