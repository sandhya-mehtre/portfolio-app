import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import { useState } from "react";
import "./App.scss";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Skills from "./pages/Skills/Skills";
import Experience from "./pages/Experience/Experience";
import Contact from "./pages/Contact/Contact";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <div className="logo">My Portfolio</div>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
          <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
            {["Home", "About", "Projects", "Skills", "Experience", "Contact"].map((page, index) => (
              <li key={index}>
                <NavLink to={page==="Home"?"/":page.toLowerCase()} onClick={() => setMenuOpen(false)}>
                  {page}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        <footer className="footer">© 2025 My Portfolio | All Rights Reserved</footer>
      </div>
    </Router>
  );
};

export default App;
