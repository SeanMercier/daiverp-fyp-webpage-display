import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section className="section" id="contact" style={{ textAlign: "center" }}>
      <h2 style={{ fontSize: "1.8rem", fontWeight: "700", marginBottom: "1rem", color: "#0a192f" }}>
        Contact & Credits
      </h2>

      <p style={{ lineHeight: "1.6", marginBottom: "1rem" }}>
        <strong>Developer:</strong> Sean Mercier<br />
        <strong>Student Number:</strong> 20094677<br />
        <strong>Institution:</strong> South East Technological University (SETU)
      </p>

      <p style={{ lineHeight: "2", fontSize: "1rem" }}>
        <FaEnvelope style={{ marginRight: "8px", color: "#00ffc3" }} />
        <a href="mailto:20094677@mail.wit.ie" className="App-link">
          20094677@mail.wit.ie
        </a>
        <br />
        <FaLinkedin style={{ marginRight: "8px", color: "#00ffc3" }} />
        <a
          href="https://www.linkedin.com/in/sean-mercier/"
          target="_blank"
          rel="noopener noreferrer"
          className="App-link"
        >
          linkedin.com/in/sean-mercier
        </a>
        <br />
        <FaGithub style={{ marginRight: "8px", color: "#00ffc3" }} />
        <a
          href="https://github.com/SeanMercier/daiverp-front-and-backend-app"
          target="_blank"
          rel="noopener noreferrer"
          className="App-link"
        >
          GitHub Project Repository
        </a>
      </p>

      <p style={{ fontSize: "0.9rem", color: "#666", marginTop: "1.5rem" }}>
        Project submitted in partial fulfillment of the requirements for the BSc (Hons) in Computer Science.
      </p>
    </section>
  );
}

export default Contact;
