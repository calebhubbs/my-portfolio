/*
 *   Copyright (c) 2024
 *   All rights reserved.
 */
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import HomePage from "./views/index";
import AboutPage from "./views/about";

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="bg-neutral-900 min-h-screen">
          <div className="p-4">
            <Routes>
              <Route path="/" element={<HomePage />} exact />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </div>
        </div>
      </Router>
      <Analytics />
      <SpeedInsights />
    </HelmetProvider>
  )
}
