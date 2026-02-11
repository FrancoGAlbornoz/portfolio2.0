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
          <a
            href="https://github.com/FrancoGAlbornoz"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-light"
          >
            GitHub
          </a>

          <a href="#contact" className="btn btn-outline-light">
            Contacto
          </a>
        </div>

        {/* Cards Bootstrap */}
        <div className="about-cards-wrap">
          <div className="container-lg">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center">
              <div className="col">
                <div className="about-card card h-100 text-center">
                  <div className="card-body">
                    <div className="icon-wrapper mb-3">
                      <FaCode />
                    </div>
                    <h4 className="card-title">Desarrollo</h4>
                    <p className="card-text">
                      Experiencia en desarrollo web con HTML, CSS, JavaScript y React.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="about-card card h-100 text-center">
                  <div className="card-body">
                    <div className="icon-wrapper mb-3">
                      <FaLightbulb />
                    </div>
                    <h4 className="card-title">Innovación</h4>
                    <p className="card-text">
                      Constante aprendizaje de nuevas tecnologías y mejores prácticas.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="about-card card h-100 text-center">
                  <div className="card-body">
                    <div className="icon-wrapper mb-3">
                      <FaBullseye />
                    </div>
                    <h4 className="card-title">Objetivos</h4>
                    <p className="card-text">
                      Enfocado en crear soluciones efectivas, escalables y sostenibles.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default AboutMe;
