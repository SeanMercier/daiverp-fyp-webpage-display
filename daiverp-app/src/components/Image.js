import React from "react";
import dashboardImage from "../assets/daiverp-dashboard-screenshot.png"; // your main dashboard screenshot
import predictionImage from "../assets/daiverp-historyandchart.png"; // your chart + download screenshot

function Image() {
  return (
    <section className="section" id="demo" style={{ textAlign: "center" }}>
      <h2 style={{ fontSize: "1.8rem", fontWeight: "700", marginBottom: "1.5rem", color: "#0a192f" }}>
        Project Demo
      </h2>

      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "2rem"
      }}>
        <img
          src={dashboardImage}
          alt="DAIVERP Web Dashboard"
          style={{
            width: "100%",
            maxWidth: "440px",
            borderRadius: "12px",
            boxShadow: "0 4px 16px rgba(0, 0, 0, 0.15)"
          }}
        />
        <img
          src={predictionImage}
          alt="DAIVERP Chart and History"
          style={{
            width: "100%",
            maxWidth: "440px",
            borderRadius: "12px",
            boxShadow: "0 4px 16px rgba(0, 0, 0, 0.15)"
          }}
        />
      </div>
    </section>
  );
}

export default Image;
