import React, { useState, useEffect } from "react";
import "../styles/sections/aboutme.css";
import { FaCode, FaServer, FaShieldAlt, FaGithub, FaLinkedin, FaEnvelope, FaTerminal, FaDatabase, FaReact, FaLock } from "react-icons/fa";
import { Link } from "react-scroll";
import ReactLogo from "../assets/react.svg";

const dynamicRoles = [
  "Full Stack Developer 💻",
  "Analista en Sistemas de Información 📊",
  "Ingeniería en Sistemas (UTN FRT - 4° año) 🎓",
  "Soporte IT & Ciberseguridad 🛡️",
  "React & Node.js Specialist 🚀"
];

function AboutMe() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % dynamicRoles.length);
        setFade(true);
      }, 300);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="hero-section position-relative overflow-hidden">
      {/* Floating Animated Background Tech Icons */}
      <div className="floating-shapes">
        <div className="floating-shape shape-1" title="React"><FaReact /></div>
        <div className="floating-shape shape-2" title="Backend & Terminal"><FaTerminal /></div>
        <div className="floating-shape shape-3" title="SQL Database"><FaDatabase /></div>
        <div className="floating-shape shape-4" title="Cybersecurity"><FaLock /></div>
      </div>

      <div className="hero-background-glow"></div>
      
      <div className="container position-relative z-1">
        <div className="row align-items-center min-vh-90 py-5">
          <div className="col-lg-9 mx-auto text-center">
            
            <div className="hero-badge mb-3 glow-pulse">
              <span className="badge-dot"></span> Disponible para nuevos desafíos Full Stack & IT
            </div>

            <h1 className="hero-name d-flex align-items-center justify-content-center gap-2 flex-wrap mb-3">
              <span>Franco G. <span className="text-gradient animated-gradient-text">Albornoz</span></span>
              <img 
                src={ReactLogo} 
                alt="React Logo" 
                className="react-logo-spin" 
                title="React.js"
              />
            </h1>

            {/* Dynamic Rotating Subtitle with smooth fade */}
            <div className="dynamic-role-wrapper mb-4">
              <span className={`dynamic-role ${fade ? "fade-in" : "fade-out"}`}>
                {dynamicRoles[roleIndex]}
              </span>
            </div>

            <p className="hero-description mx-auto mb-4">
              <strong>Analista en Sistemas de Información</strong>, estudiante de 4° año de <strong>Ingeniería en Sistemas de Información</strong> y 
              <strong> Técnico Universitario en Programación</strong> (UTN FRT). Especializado en crear aplicaciones web escalables con React, Node.js y SQL, enfocadas en rendimiento, arquitectura limpia y ciberseguridad.
            </p>

            {/* Quick stats / Highlights with hover lift */}
            <div className="row g-3 justify-content-center mb-5">
              <div className="col-6 col-md-3">
                <div className="stat-card stat-hover-glow">
                  <span className="stat-number">+5</span>
                  <span className="stat-label">Años en IT</span>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="stat-card stat-hover-glow">
                  <span className="stat-number">FullStack</span>
                  <span className="stat-label">React · Node · SQL</span>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="stat-card stat-hover-glow">
                  <span className="stat-number">Analista</span>
                  <span className="stat-label">Sistemas (UTN FRT)</span>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="stat-card stat-hover-glow">
                  <span className="stat-number">Google</span>
                  <span className="stat-label">Cybersecurity Cert</span>
                </div>
              </div>
            </div>

            <div className="hero-actions d-flex flex-wrap justify-content-center gap-3">
              <Link to="projects" smooth={true} duration={500} offset={-80} className="btn-primary-hero pulsing-btn">
                Ver Proyectos
              </Link>
              <Link to="contact" smooth={true} duration={500} offset={-80} className="btn-secondary-hero">
                <FaEnvelope /> Contactar
              </Link>
              <a 
                href="https://linkedin.com/in/francogenaroalbornoz" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-social-icon"
                title="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a 
                href="https://github.com/FrancoGAlbornoz" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-social-icon"
                title="GitHub"
              >
                <FaGithub />
              </a>
            </div>

          </div>
        </div>

        {/* 3 Pillar Cards with dynamic glow */}
        <div className="row g-4 mt-2">
          <div className="col-md-4">
            <div className="feature-card h-100 animated-card">
              <div className="feature-icon icon-cyan">
                <FaCode />
              </div>
              <h3>Desarrollo Web Full Stack</h3>
              <p>
                Diseño e implementación de SPAs y APIs RESTful escalables con React, Node.js, Express, TypeScript y PostgreSQL/MySQL.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="feature-card h-100 animated-card">
              <div className="feature-icon icon-blue">
                <FaServer />
              </div>
              <h3>Infraestructura & Soporte IT</h3>
              <p>
                Gestión de entornos Linux/Windows, automatización de scripts, monitoreo de redes y mantenimiento en entornos industriales.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="feature-card h-100 animated-card">
              <div className="feature-icon icon-purple">
                <FaShieldAlt />
              </div>
              <h3>Seguridad & Arquitectura</h3>
              <p>
                Aplicación de buenas prácticas de Ciberseguridad (Google Certificated), trazabilidad de datos y principios de Clean Architecture.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default AboutMe;
