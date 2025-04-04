import React from "react";

function ModelInfo() {
  return (
    <section className="section" id="model">
      <h2 style={{ fontSize: "1.8rem", fontWeight: "700", marginBottom: "1rem", color: "#0a192f" }}>
        Model Insights
      </h2>
      <p style={{ marginBottom: "1rem", lineHeight: "1.6" }}>
        DAIVERP utilizes a <strong>Random Forest Regressor</strong> to generate dynamic risk scores for software vulnerabilities.
        The model incorporates historical attack data, CVSS metrics, and system exposure to accurately assess risk.
      </p>

      <ul style={{ textAlign: "left", lineHeight: "1.8", paddingLeft: "1.25rem", color: "#1f2937" }}>
        <li><strong>Model:</strong> Random Forest Regressor</li>
        <li><strong>Training Accuracy (R²):</strong> ~0.91</li>
        <li><strong>MSE:</strong> ~0.02</li>
        <li><strong>Low Edge Score:</strong> ~<code>0.03</code> → <em>Very Low Risk</em></li>
        <li><strong>High Edge Score:</strong> ~<code>0.97</code> → <em>Critical Risk</em></li>
        <li><strong>Feature Importance:</strong> Dominated by <code>Historical_Attack_Data</code> and <code>Normalized_CVSS</code></li>
      </ul>

      <p style={{ marginTop: "1rem", fontStyle: "italic", color: "#1f2937" }}>
        These insights allow security teams to prioritize vulnerabilities that are more likely to be exploited in the real world.
      </p>
    </section>
  );
}

export default ModelInfo;
