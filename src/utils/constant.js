import React from "react";
import { SiMongodb, SiNodedotjs } from "react-icons/si";
import { FaGraduationCap } from "react-icons/fa6";

export const BASE_URL = "http://localhost:4000/api/v1";
// export const BASE_URL = "https://shumail-server.vercel.app/api/v1";
export const CLOUDINARY_URL =
  "https://res.cloudinary.com/dea2v7wzi/image/upload/v1731010537";

export const experienceData = [
  {
    title: "MERN Stack Developer",
    location: "Covered Logistics",
    description:
      "During my time at Covered Logistics, I played a crucial role in developing a full-fledged logistics web application from scratch using the MERN stack. I contributed extensively to both frontend development and API integration, ensuring a seamless user experience. The project was successfully deployed on a Hostinger VPS for live use, providing robust, real-time services. My work enhanced the application’s functionality and supported efficient logistics management for all users.",
    icon: React.createElement(SiMongodb),
    date: "Feb, 2024 - Sep, 2024",
  },
  {
    title: "Intern MERN Developer",
    location: "Craftooo",
    description:
      "As an Intern at Craftooo, I developed an e-commerce Watches website from scratch and contributed to the Transport Company project by resolving errors, handling charts, and adding features for improved user experience. I also learned how to connect PostgreSQL to Node.js with Sequelize, enhancing my back-end skills and focus on user-centered design.",
    icon: React.createElement(SiNodedotjs),
    date: "Aug, 2023 - Jan, 2024",
  },
  {
    title: "BS Computer Science",
    location: "Virtual University of Pakistan",
    description:
      "I'm pursuing a BS Computer Science from Virtual University of Pakistan, where I've gained a strong foundation in computer science principles and practical development skills. This education complements my work experience, enabling me to contribute effectively to various projects. My academic journey at VU strengthens my technical expertise and prepares me for impactful roles in software development.",
    icon: React.createElement(FaGraduationCap),
    date: "Oct, 2023",
  },
];
