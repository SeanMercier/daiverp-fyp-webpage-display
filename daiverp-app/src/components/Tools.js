import React from "react";
import "./Tools.css"; 
import pythonLogo from "../assets/python.png";
import reactLogo from "../assets/react.png";
import flaskLogo from "../assets/Flask.jpg";
import awsLogo from "../assets/aws.png";
import nginxLogo from "../assets/nginx.png";

function Tools() {
  return (
    <section className="section" id="tools">
      <h2 style={{ fontSize: "1.8rem", fontWeight: "700", marginBottom: "1.5rem", color: "#0a192f", textAlign: "center" }}>
        Tools & Technologies
      </h2>
      <div className="tools-grid">
        <div className="tool">
          <img src={pythonLogo} alt="Python" />
          <p>Python</p>
        </div>
        <div className="tool">
          <img src={reactLogo} alt="React" />
          <p>React</p>
        </div>
        <div className="tool">
          <img src={flaskLogo} alt="Flask" />
          <p>Flask</p>
        </div>
        <div className="tool">
          <img src={awsLogo} alt="AWS" />
          <p>AWS</p>
        </div>
        <div className="tool">
          <img src={nginxLogo} alt="NGINX" />
          <p>NGINX</p>
        </div>
      </div>
    </section>
  );
}

export default Tools;
