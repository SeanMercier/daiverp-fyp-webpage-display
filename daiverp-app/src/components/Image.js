import React from "react";
import projectImage from "../assets/daiverpimageforwebsite.png"; 

function Image() {
  return (
    <section style={{ textAlign: "center", padding: "20px" }}>
      <h2>Project Image</h2>
      <img src={projectImage} alt="DAIVERP Overview" style={{ width: "80%", maxWidth: "600px", borderRadius: "10px" }} />
    </section>
  );
}

export default Image;
