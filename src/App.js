import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Business_loan from "./pages/Business_loan";
import Personal_loan from "./pages/Personal_loan";
import Navbar from "./pages/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
export default function App() {
  return (
    <div style={{ backgroundColor:"#1f89df"}} className="bg-sky-100 h-[200vh] overflow-hidden">
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
    </div>
  );
}
