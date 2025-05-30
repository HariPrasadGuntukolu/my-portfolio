import React, { useEffect } from "react";
import "./hero.css";

const Hero = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".animate-on-scroll");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="home-section" className="hero">
      <div className="container">
        <h3>Howdy! I’m</h3>
        <h2 className="hero-title animate-on-scroll">HARI PRASAD GUNTUKOLU</h2>
        <p className="hero-subtitle animate-on-scroll">
          Passionate <span>Front-End Developer,</span> Focused on Turning
          Concepts into Interactive Realities and Creating User-Centered Web
          Applications
        </p>

        <div className="button-container animate-on-scroll">
          <a
            href="./assets/My_Resume.pdf"
            download="My_Resume.pdf"
            className="custom-btn"
          >
            Download Resume
          </a>
          <a href="#contact-section" className="custom-btn">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
