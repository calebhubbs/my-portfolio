/*
 *   Copyright (c) 2024 
 *   All rights reserved.
 */
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./views/index";
import AboutPage from "./views/about";
import Navbar from "./components/NavBar";

export default function App() {
  return (
    <Router>
        <div className="bg-slate-950 min-h-screen flex justify-center">
            <div className="max-w-[1200px] w-full">
                <Navbar />

                {/* Main Content */}
                <div className="p-4">
                    <Routes>
                        <Route path="/" element={<HomePage />} exact />
                        <Route path="/about" element={<AboutPage />} />
                        {/*<Route path="/experience" element={<ExperiencePage />} />*/}
                        {/*<Route path="/blog" element={<BlogPage />} />*/}
                    </Routes>
                </div>
            </div>
        </div>
    </Router>
  )
}
