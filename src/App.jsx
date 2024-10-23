import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Project from "./pages/Projects/pages/Project";
import Home from "./pages/Home/Home";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createProject" element={<Project />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
