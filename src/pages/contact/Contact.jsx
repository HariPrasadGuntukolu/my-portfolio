import React, { useEffect } from "react";
import "./contact.css";

const Contact = () => {
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
    <section id="contact-section">
      <div className="contact-container animate-on-scroll">
        <h1 className="animate-on-scroll">Get in Touch</h1>
        <form
          id="contact-form"
          action="https://api.web3forms.com/submit"
          method="POST"
          className="animate-on-scroll"
        >
          <input
            type="hidden"
            name="access_key"
            value="e460d72a-44e1-468b-b561-d16bf0dcbcb8"
          />
          <input type="text" name="honeypot" style={{ display: "none" }} />
          <div className="input-group">
            <input
              type="text"
              id="name"
              name="name"
              placeholder=" Enter Your Name"
              required
            />
          </div>
          <div className="input-group">
            <input
              type="email"
              id="email"
              name="email"
              placeholder=" Enter Your Email"
              required
            />
          </div>
          <div className="input-group">
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder=" Enter Your Message"
              required
            ></textarea>
          </div>
          <button type="submit">
            <i className="ri-send-plane-fill"></i> Send Message
          </button>
          <p id="form-status"></p>
        </form>
      </div>
    </section>
  );
};

export default Contact;
