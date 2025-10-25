import React from "react";
// Secciones (mover desde tus pages actuales a /sections)
import AboutMe from "../sections/AboutMe";
import Skills from "../sections/Skills";
import Experience from "../sections/Experience";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";


function Landing() {
  return (
    <>
      <main>
        <section id="about"><AboutMe /></section>
        <section id="skills"><Skills /></section>
        <section id="experience"><Experience /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
      </main>
    </>
  );
}

export default Landing;