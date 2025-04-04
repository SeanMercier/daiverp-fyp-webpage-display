// App.js (Updated Structure with Workflow Section)
import React from "react";
import Header from "./components/Header";
import Description from "./components/Description";
import Workflow from "./components/Workflow";
import Image from "./components/Image";
// import Footer from "./components/Footer"; // no longer used
import Navbar from "./components/Navbar";
import Tools from "./components/Tools";
import ModelInfo from "./components/ModelInfo";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />

      <section id="about">
        <Description />
      </section>

      <section id="workflow">
        <Workflow />
      </section>

      <section id="model">
        <ModelInfo />
      </section>

      <section id="tools">
        <Tools />
      </section>

      <section id="demo">
        <Image />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
