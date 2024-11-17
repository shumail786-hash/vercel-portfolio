import React from "react";
import { SiMongodb, SiNodedotjs } from "react-icons/si";
import { FaGraduationCap } from "react-icons/fa6";

// export const BASE_URL = "http://localhost:4000/api/v1";
export const BASE_URL = "https://shumail-server.vercel.app/api/v1";
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
    date: "Oct, 2023 - Present",
  },
];

export const quotes = [
  {
    name: "Prophet Muhammad (صلى الله عليه وآله وسلم)",
    quote:
      "The best of people are those that bring the most benefit to the rest of mankind.",
  },

  {
    name: "Steve Jobs",
    quote: "The only way to do great work is to love what you do.",
  },
  {
    name: "Winston Churchill",
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  },
  {
    name: "Theodore Roosevelt",
    quote: "Do what you can, with what you have, where you are.",
  },
  {
    name: "Tim Notke",
    quote: "Hard work beats talent when talent doesn’t work hard.",
  },
  {
    name: "Nelson Mandela",
    quote: "It always seems impossible until it’s done.",
  },
  {
    name: "Sam Levenson",
    quote: "Don't watch the clock; do what it does. Keep going.",
  },
  {
    name: "Chris Grosser",
    quote: "Opportunities don't happen. You create them.",
  },
  {
    name: "Henry David Thoreau",
    quote:
      "Success usually comes to those who are too busy to be looking for it.",
  },
  {
    name: "Albert Einstein",
    quote: "Strive not to be a success, but rather to be of value.",
  },
  {
    name: "Mahatma Gandhi",
    quote: "Be the change that you wish to see in the world.",
  },
  {
    name: "Confucius",
    quote: "It does not matter how slowly you go as long as you do not stop.",
  },
  {
    name: "Mark Twain",
    quote: "The secret of getting ahead is getting started.",
  },
  {
    name: "Thomas Edison",
    quote:
      "Genius is one percent inspiration and ninety-nine percent perspiration.",
  },
  {
    name: "Vince Lombardi",
    quote:
      "Perfection is not attainable, but if we chase perfection, we can catch excellence.",
  },
  { name: "Imam Ali (AS)", quote: "Knowledge enlivens the soul." },
  {
    name: "Ibn Khaldun",
    quote: "He who has a why to live can bear almost any how.",
  },
  {
    name: "Al-Ghazali",
    quote:
      "Desires make slaves out of kings and patience makes kings out of slaves.",
  },
  {
    name: "Jalal ad-Din Rumi",
    quote:
      "Don't be satisfied with stories, how things have gone with others. Unfold your own myth.",
  },
  {
    name: "Eleanor Roosevelt",
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
  },
];
