import React from "react";
import Header from "./components/Header";
import Description from "./components/Description";
import Image from "./components/Image";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Description />
      <Image />
      <Footer />
    </div>
  );
}

export default App;
