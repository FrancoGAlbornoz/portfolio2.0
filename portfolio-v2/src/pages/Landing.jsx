import React from "react";
import AboutMe from "../sections/AboutMe";
import Experience from "../sections/Experience";
import Projects from "../sections/Projects";
import Skills from "../sections/Skills";
import Certifications from "../sections/Certifications";
import Contact from "../sections/Contact";

function Landing() {
  return (
    <main>
      <AboutMe />
      <Experience />
      <Projects />
      <Skills />
      <Certifications />
      <Contact />
    </main>
  );
}

export default Landing;
