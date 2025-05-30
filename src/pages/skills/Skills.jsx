import React, { useEffect } from "react";
import "./skills.css";
import htmlIcon from "../../assets/icons8-html-5-48.png";
import cssIcon from "../../assets/icons8-css3-64.png";
import jsIcon from "../../assets/icons8-javascript-48.png";
import reactIcon from "../../assets/icons8-react-60.png";

const skills = [
  { name: "HTML", icon: htmlIcon },
  { name: "CSS", icon: cssIcon },
  { name: "JavaScript", icon: jsIcon },
  { name: "React JS", icon: reactIcon },
];

const interests = [
  { name: "Web Designing", icon: "ri-layout-masonry-line", color: "#e361ff" },
  { name: "Web Development", icon: "ri-terminal-box-line", color: "#5578ff" },
  { name: "UI/UX Design", icon: "ri-pencil-ruler-2-line", color: "#e80368" },
  {
    name: "Frontend Development",
    icon: "ri-code-s-slash-line",
    color: "#ffa76e",
  },
  { name: "Digital Marketing", icon: "ri-megaphone-line", color: "#47aeff" },
  { name: "App Development", icon: "ri-apps-2-line", color: "#11dbcf" },
  { name: "Graphic Design", icon: "ri-palette-line", color: "#4233ff" },
];

const Skills = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".animate-on-scroll");
    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observerInstance.unobserve(entry.target);
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
    <section className="skills-section" id="skills-section">
      <h2 className="section-heading animate-on-scroll">SKILLS</h2>
      <p className="section-description animate-on-scroll">
        Explore The Tools And Technologies I Use To Create Websites That Look
        Great And Perform Seamlessly Across All Devices.
      </p>

      <div className="info-grid animate-on-scroll">
        <div className="left-title">Tech Stack</div>
        <div className="content-grid">
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-card" key={index}>
                <div className="skill-info">
                  <img src={skill.icon} alt={skill.name} />
                  <span>{skill.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="info-grid animate-on-scroll">
        <div className="left-title">Interests</div>
        <div className="content-grid">
          <div className="interests-grid">
            {interests.map((interest, index) => (
              <div className="interest-card" key={index}>
                <i
                  className={interest.icon}
                  style={{ color: interest.color }}
                ></i>
                <h3>{interest.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
