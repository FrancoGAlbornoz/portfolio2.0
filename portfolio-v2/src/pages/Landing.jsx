// src/pages/Landing.jsx
import React from "react";
import AboutMe from "../sections/AboutMe";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";

function Landing() {
  return (
    <main>
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}

export default Landing;
