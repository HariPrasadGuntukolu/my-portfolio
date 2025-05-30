import React, { useEffect } from "react";
import "./project.css";

const projects = [
  {
    title: "UpSkill",
    link: "https://upskill-academy-xi.vercel.app",
    technologies: ["MongoDB", "Express.js", "React", "Node.js"],
  },
];

const Project = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".animate-on-scroll");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="project-section" id="project-section">
      <h2 className="section-title animate-on-scroll">My Projects</h2>
      <p className="project-description animate-on-scroll">
        Explore some of the projects I’ve built using the MERN stack. These
        projects showcase my ability to develop robust, responsive, and
        user-friendly applications.
      </p>

      {projects.map((project, index) => (
        <div className="project-wrapper animate-on-scroll" key={index}>
          <div className="project-left">
            <h3 className="project-title">{project.title}</h3>
          </div>

          <div className="project-center">
            <div className="project-demo-wrapper">
              <iframe
                src={project.link}
                title={project.title}
                className="project-demo"
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <div className="project-right">
            <ul className="tech-stack-vertical">
              {project.technologies.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
            <a
              href={project.link}
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Project;
