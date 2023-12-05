import React from "react";
import Navbar from "./components/navbar";
import Intro from "./components/intro";
import About from "./components/about"
import Projects from "./components/projects"
import Skills from "./components/skills";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
