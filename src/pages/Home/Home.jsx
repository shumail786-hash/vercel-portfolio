import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Header from "./components/Header";
const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-bodyColor">
        <Header />
      </div>
    </div>
  );
};

export default Home;
