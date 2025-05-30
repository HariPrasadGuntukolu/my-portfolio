import React, { useEffect } from "react";
import "./about.css";

const educationData = [
  {
    degree:
      "Bachelor of Technology in Electronics and Communication Engineering",
    details:
      "Annamacharya Institute of Technology and Sciences, Tirupati -- 2022",
  },
  {
    degree: "Diploma in Electronics and Communication Engineering",
    details: "Sree Vidyanikethan Engineering College, Tirupati -- 2019",
  },
];

const sections = [
  {
    title: "Education",
    content: educationData.map((edu, index) => (
      <div key={index}>
        <h3>{edu.degree}</h3>
        <p>{edu.details}</p>
      </div>
    )),
  },
  {
    title: "Internship",
    content: (
      <>
        <h3>Sri Venkateswara Bhakti Channel (SVBC), Tirupati</h3>
        <p>
          I Had The Privilege Of Completing A Six-Month Technical Internship At
          Sri Venkateswara Bhakti Channel (SVBC), The Official News And
          Devotional Channel Of Tirumala Tirupati Devasthanam (TTD).
          <br />
          <br /> During This Period, I Gained Valuable Experience Across Various
          Technical Departments Involved In Broadcasting.
          <br />
          <br /> I Led A Team Of 8 Members In Researching And Executing The
          Digital Satellite News Gathering (DSNG) Project, Which Plays A Crucial
          Role In Live News Coverage. I Successfully Guided The Team To Complete
          All Project-Related Tasks Within The Deadline.
        </p>
      </>
    ),
  },
  {
    title: "Professional Experience",
    content: (
      <>
        <h3>
          Associate Software Engineer , Mphasis – Pune (June 2022 – Feb 2024)
        </h3>
        <p>
          I Contributed to Developing Individual UI Components Using React,
          Ensuring They Were Responsive and User-Friendly.
          <br />
          <br />
          I Worked Under the Mentorship of Senior Developers, Followed Best
          Coding Practices, And Improved My Skills Through Their Guidance and
          Regular Feedback.
          <br />
          <br />I Used Git and GitHub for Version Control and Practiced
          Collaborating as Part of a Team to Keep the Project Organized and
          Efficient.
        </p>
      </>
    ),
  },
  {
    title: "Project Highlight",
    content: (
      <>
        <h3>UpSkill – E-Learning Application</h3>
        <p>
          The UpSkill Web Application Includes Secure User Management and
          Authentication, Providing Sign Up and Log In Functionality for Both
          Users and Admins. It Features Role-Based Access Control to Manage
          Permissions Based on User Type (Admin/User), Along with Password Reset
          and Secure Authentication Using JSON Web Tokens (JWT).
          <br />
          <br />
          Admins can create courses, upload course lectures, update course
          details, and delete courses, While Users Can Browse and Access Courses
          After Successful Payment. Learning Progress Is Tracked with a Visual
          Progress Bar to Enhance the User Experience.
          <br />
          <br />
          Upskill Integrates Razor Pay for Secure Payments with Instant Course
          Access. The Platform Also Features a Modern Dark Mode UI and a Fully
          Responsive Design for Seamless Use Across All Devices.
          <br />
          <br />
          🔗{" "}
          <a
            href="https://upskill-academy-xi.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit UpSkill Application
          </a>
        </p>
      </>
    ),
  },
  {
    title: "Skills",
    content: (
      <p>
        <strong>Front-End Development:</strong> HTML, CSS, JavaScript, React.js
        <br />
        <strong>Database Technologies:</strong> Structured Query Language
        <br />
        <strong>Tools:</strong> Visual Studio Code, Eclipse
        <br />
        <strong>Version Control Systems:</strong> Git, GitHub
      </p>
    ),
  },
];

const About = () => {
  useEffect(() => {
    const animatedElements = document.querySelectorAll(".animate-on-scroll");

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

    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="about" id="about-section">
      <div className="about-container">
        <h1 className="about-title animate-on-scroll">About Me</h1>

        <p className="about-intro animate-on-scroll">
          Hello! I'm <strong>Hari Prasad Guntukolu</strong>, a passionate
          Front-End Developer with <strong>1 year and 9 months</strong> of
          experience building responsive and user-friendly web applications. My
          mission is to transform creative ideas into interactive realities
          using clean and efficient code. I specialize in crafting interactive
          interfaces and am always ready to learn new technologies to stay
          updated with industry trends.
        </p>

        {sections.map((section, index) => (
          <div className="about-flex-section animate-on-scroll" key={index}>
            <h2 className="about-subtitle left-heading">{section.title}</h2>
            <div className="about-card">{section.content}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
