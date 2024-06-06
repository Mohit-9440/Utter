import React from "react";
import "./App.css";
import Home from "./screens/home/Home";
import About from "./screens/about/About";
import Story from "./screens/story/Story";
import Benefits from "./screens/benefits/Benefits";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="benefits">
        <Benefits />
      </div>
      <div id="story">
        <Story />
      </div>
      <Footer />
    </div>
  );
};

export default App;