// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Business_loan from "./pages/Business_loan";
import Personal_loan from "./pages/Personal_loan";
import Navbar from "./pages/Navbar";
import { LogoProvider } from "./pages/LogoContext";
import "./App.css";

export default function App() {
  return (
    <div className="h-[200vh] relative">
      <LogoProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Personal_loan />} />
            <Route path="/Business_loan" element={<Business_loan />} />
            <Route path="/About" element={<About />} />
            <Route path="/Blogs" element={<Blogs />} />
            <Route path="/Navbar" element={<Navbar />} />
          </Routes>
        </Router>
      </LogoProvider>
    </div>
  );
}
