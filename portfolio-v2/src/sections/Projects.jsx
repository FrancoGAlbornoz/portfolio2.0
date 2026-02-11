import React from "react";
import "../styles/sections/projects.css";
import { FaGithub } from "react-icons/fa";

const PROFILE_URL = "https://github.com/FrancoGAlbornoz";

const projects = [
  {
    title: "Altos Tucumán Turismo",
    desc: "Sitio web para agencia de turismo en Tucumán, Argentina. Proyecto final de Desarrollo Web, aplicando buenas prácticas.",
    tags: ["React", "JavaScript", "MySQL", "Bootstrap"],
    repo: "https://github.com/FrancoGAlbornoz/TurismoTuc/",
    featured: true,
  },
  {
    title: "25HS Drugstore",
    desc: "Sitio web de drugstore con catálogo de productos, carrito de compras y sistema de pago. ",
    tags: ["HTML", "CSS", "JavaScript", "React"],
    repo: "https://github.com/FrancoGAlbornoz/Open25HS",
    featured: true,
  },
  {
    title: "Proyecto Veterinaria Patitas",
    desc: "Sitio web para veterinaria en Tucumán, Argentina. Proyecto de Desarrollo Web con HTML, CSS y JavaScript.",
    tags: ["HTML", "CSS", "JavaScript"],
    repo: "https://github.com/FrancoGAlbornoz/Veterinaria",
  },
  {
    title: "Portfolio-API",
    desc: "Portfolio API RESTful con Node.js, Express y MySQL. Permite gestionar proyectos, habilidades y experiencia laboral.",
    tags: ["JavaScript", "Node.js"],
    repo: "https://github.com/FrancoGAlbornoz/portfolio2.0",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <header className="projects-header">
          <h2>Proyectos</h2>
          <p>Algunos de mis trabajos recientes</p>
        </header>

        <div className="projects-grid">
          {projects.map((p) => (
            <article
              key={p.title}
              className={`project-card ${p.featured ? "is-featured" : ""}`}
            >
              <div className="project-top">
                <h3>{p.title}</h3>
                {p.featured && <span className="project-badge">Destacado</span>}
              </div>

              <p className="project-desc">{p.desc}</p>

              <div className="project-tags">
                {p.tags.map((t) => (
                  <span key={t} className="project-pill">{t}</span>
                ))}
              </div>

              <a className="project-link" href={p.repo} target="_blank" rel="noreferrer">
                <FaGithub />
                Ver en GitHub
              </a>
            </article>
          ))}
        </div>

        <div className="projects-footer">
          <a href={PROFILE_URL} target="_blank" rel="noreferrer" className="projects-more">
            Mirá mi portfolio completo →
          </a>
        </div>
      </div>
    </section>
  );
}
