import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Header from "./components/Header";
import Skills from "../Skills/Skills";
const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-bodyColor">
        <Header />
        <Skills />
      </div>
    </div>
  );
};

export default Home;
