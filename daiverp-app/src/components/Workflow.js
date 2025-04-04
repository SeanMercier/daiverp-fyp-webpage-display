import React from "react";

function Workflow() {
  return (
    <section
      className="section"
      id="workflow"
      style={{ padding: "40px 20px", maxWidth: "900px", margin: "auto", textAlign: "center" }}
    >
      <h2 style={{ fontSize: "1.8rem", fontWeight: "700", marginBottom: "1.5rem", color: "#0a192f" }}>
        System Workflow Overview
      </h2>

      <p style={{ marginBottom: "1rem", lineHeight: "1.7" }}>
        DAIVERP integrates a full-stack pipeline combining a React frontend, Flask backend, and an AI prediction engine to assess vulnerability risk.
        The process begins when a user uploads a <strong>system architecture log file</strong> via the dashboard.
      </p>

      <p style={{ marginBottom: "1rem", lineHeight: "1.7" }}>
        On the backend, this log is parsed to identify systems, products, and software versions in use. DAIVERP then matches these products against a 
        large CVE database containing over 10,000 vulnerabilities. Each CVE entry is matched to systems based on real-world affected product names 
        (e.g., Apache, Microsoft Windows, OpenSSL), allowing for precise vulnerability-to-system mapping.
      </p>

      <p style={{ marginBottom: "1rem", lineHeight: "1.7" }}>
        For each matched CVE, the backend uses a trained <strong>Random Forest Regressor</strong> to compute a <strong>DAIVERP Risk Score</strong> from 0 to 1.
        This score is dynamically calculated using features such as:
      </p>

      <ul style={{ textAlign: "left", margin: "0 auto 1.5rem", maxWidth: "700px", lineHeight: "1.6", color: "#1f2937" }}>
        <li><strong>Normalized CVSS Score</strong> (emphasized via non-linear scaling)</li>
        <li><strong>Historical Attack Frequency</strong> (power-scaled to highlight severity)</li>
        <li><strong>Criticality Weight</strong> based on system role</li>
        <li><strong>Network Accessibility</strong> (public vs. private exposure)</li>
      </ul>

      <p style={{ marginBottom: "1rem", lineHeight: "1.7" }}>
        The prediction results are then returned to the frontend, where users can explore CVE risk levels in a live dashboard, filter by product, 
        and download prediction logs. All predictions include metadata such as model version, processing time, and system ID.
      </p>

      <p style={{ fontWeight: "600", color: "#10b981", marginTop: "2rem" }}>
        This end-to-end workflow allows DAIVERP to deliver fast, explainable, and real-time risk assessment for complex infrastructures.
      </p>
    </section>
  );
}

export default Workflow;
