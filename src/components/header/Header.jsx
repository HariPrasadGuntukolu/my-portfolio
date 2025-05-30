import React, { useState } from "react";
import "./header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header-section">
      <div className="container">
        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          role="button"
          tabIndex={0}
          onKeyPress={(e) => {
            if (e.key === "Enter" || e.key === " ") setMenuOpen(!menuOpen);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className={`navbar ${menuOpen ? "show" : ""}`}>
          <a href="#home-section" onClick={() => setMenuOpen(false)}>
            Home
          </a>
          <a href="#about-section" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a href="#skills-section" onClick={() => setMenuOpen(false)}>
            Skills
          </a>
          <a href="#project-section" onClick={() => setMenuOpen(false)}>
            Projects
          </a>
          <a href="#contact-section" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
