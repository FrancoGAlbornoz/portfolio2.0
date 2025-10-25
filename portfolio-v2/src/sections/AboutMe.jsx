import React from "react";
import "../styles/sections/aboutme.css";
import { FaCode, FaLightbulb, FaBullseye } from "react-icons/fa";
import ReactLogo from "../assets/react.svg";

function AboutMe() {
  return (
    <section id="about" className="hero-section">
      <div className="hero-content text-center text-light">
        <h1 className="hero-title">
          Franco G. Albornoz{" "}
          <img src={ReactLogo} alt="React Logo" className="react-logo" />
        </h1>
        <h3>Ingeniero en Sistemas de la Información</h3>
        <p>
          ¡Hola! Soy Franco, un apasionado por la ingeniería en sistemas de la
          información. Me encanta transformar ideas en código y crear
          experiencias digitales únicas.
        </p>

        <div className="hero-buttons mt-4">
          <a href="https://github.com/FrancoGAlbornoz" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light mx-2"> GitHub </a>
          <a href="#contact" className="btn btn-outline-light mx-2"> Contacto </a>
        </div>
        
        {/* 🔹 Nueva sección de cards */}
        <div className="about-cards-container">
          <div className="about-card">
            <div className="icon-wrapper">
              <FaCode />
            </div>
            <h4>Desarrollo</h4>
            <p>
              Experiencia en desarrollo web con HTML, CSS, JavaScript y React.
            </p>
          </div>

          <div className="about-card">
            <div className="icon-wrapper">
              <FaLightbulb />
            </div>
            <h4>Innovación</h4>
            <p>
              Constante aprendizaje de nuevas tecnologías y mejores prácticas.
            </p>
          </div>

          <div className="about-card">
            <div className="icon-wrapper">
              <FaBullseye />
            </div>
            <h4>Objetivos</h4>
            <p>
              Enfocado en crear soluciones efectivas, escalables y sostenibles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
