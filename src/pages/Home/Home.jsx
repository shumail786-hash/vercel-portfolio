import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Header from "./components/Header";
import Skills from "../Skills/Skills";
import Footer from "../Footer/Footer";
import MyWork from "../MyWork/MyWork";
import About from "../About/About";
const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-bodyColor">
        <Header />
        <Skills />
        <MyWork />
        <About />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
