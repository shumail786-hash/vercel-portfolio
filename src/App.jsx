import React, { useState, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Project from "./pages/Projects/pages/Project";
import Home from "./pages/Home/Home";
import HomeLoader from "./components/HomeLoader/HomeLoader";

const App = () => {
  const [loadingComplete, setLoadingComplete] = useState(false);

  const animateComplete = () => {
    setTimeout(() => {
      setLoadingComplete(true);
    }, 800);
  };
  return (
    <BrowserRouter>
      {/* Show HomeLoader while loading is not complete */}
      {!loadingComplete ? (
        <HomeLoader onAnimationComplete={animateComplete} />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/createProject" element={<Project />} />
          {/* You can remove this route if you don't need it */}
          <Route path="/shumail" element={<HomeLoader />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};

export default App;
