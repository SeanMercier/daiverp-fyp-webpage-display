import React from "react";

function Description() {
  return (
    <section style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      <h2>Project Overview</h2>
      <p>
        DAIVERP is an AI-powered cybersecurity tool designed to help organizations
        identify and prioritize software vulnerabilities before attackers can exploit them.
      </p>
      <p>
        Traditional vulnerability scoring methods, like CVSS, are static and often outdated.
        DAIVERP changes the game by using real-time threat intelligence, historical attack data,
        and AI-driven risk scoring to dynamically update vulnerability risk levels.
      </p>
      <p>
        With an interactive dashboard, security teams can quickly see which vulnerabilities need
        immediate attention, allowing them to act before attackers do. The system continuously
        analyzes data to highlight the most urgent threats, providing a smarter, more proactive
        approach to cybersecurity.
      </p>
    </section>
  );
}

export default Description;
