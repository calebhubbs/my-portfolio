/*
 *   Copyright (c) 2024 
 *   All rights reserved.
 */
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./views/index";
import Sidebar from "./components/Sidebar";
import ProjectsPage from "./views/projects";
import AboutPage from "./views/about";
import ContactPage from "./views/contact";

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 bg-gray-100 dark:bg-slate-950 ">
          <Routes>
            <Route path="/" element={<HomePage />} exact />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;