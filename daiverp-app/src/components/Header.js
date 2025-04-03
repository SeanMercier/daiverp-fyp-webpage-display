import React from "react";
import DAIVERPLogo from "../assets/DAIVERPLogo.png";

function Header() {
  return (
    <header className="App-header">
      <img src={DAIVERPLogo} alt="DAIVERP Logo" className="App-logo" />
      <h1>DAIVERP</h1>
      <h3>Dynamic AI Vulnerability Exploitation Risk Predictor</h3>
      <p><strong>Academic Title:</strong> AI-powered Vulnerability Exploitation Risk Predictor (VERP)</p>
      <p><strong>Name:</strong> Sean Mercier</p>
      <p><strong>Student Number:</strong> 20094677</p>
    </header>
  );
}

export default Header;
