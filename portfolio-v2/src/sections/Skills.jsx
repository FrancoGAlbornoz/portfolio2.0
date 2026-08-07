import React from "react";
import "../styles/sections/skills.css";
import { FaLaptopCode, FaServer, FaDatabase, FaShieldAlt, FaTools, FaLanguage } from "react-icons/fa";

const skillCategories = [
  {
    title: "Frontend",
    icon: <FaLaptopCode className="cat-icon text-cyan" />,
    items: ["React", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"]
  },
  {
    title: "Backend",
    icon: <FaServer className="cat-icon text-blue" />,
    items: ["Node.js", "Express", "C#", ".NET", "APIs RESTful", "Clean Architecture"]
  },
  {
    title: "Bases de Datos",
    icon: <FaDatabase className="cat-icon text-purple" />,
    items: ["MySQL", "SQL Server", "PostgreSQL", "Diseño & Optimización SQL"]
  },
  {
    title: "Infraestructura & Seguridad",
    icon: <FaShieldAlt className="cat-icon text-emerald" />,
    items: ["Sistemas Linux / Windows", "Protocolos de Red", "Seguridad de Aplicaciones", "Docker", "Firebase Storage"]
  },
  {
    title: "Herramientas & Metodologías",
    icon: <FaTools className="cat-icon text-amber" />,
    items: ["Git & GitHub", "Metodologías Ágiles (Scrum/Kanban)", "JIRA", "Trello", "Vite"]
  },
  {
    title: "Idiomas & Intereses",
    icon: <FaLanguage className="cat-icon text-rose" />,
    items: ["Español (Nativo)", "Inglés (B1 Intermedio)", "Italiano (B1 Intermedio)", "Ciberseguridad", "Modelado 3D"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <header className="section-header text-center mb-5">
          <h2 className="section-title">Habilidades Técnicas</h2>
          <p className="section-subtitle">Tecnologías, herramientas y lenguajes que domino</p>
        </header>

        <div className="row g-4">
          {skillCategories.map((cat, idx) => (
            <div className="col-md-6 col-lg-4" key={idx}>
              <div className="skill-card h-100">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="skill-icon-wrapper">{cat.icon}</div>
                  <h3 className="skill-category-title mb-0">{cat.title}</h3>
                </div>

                <div className="skill-pills-wrap d-flex flex-wrap gap-2">
                  {cat.items.map((item, itemIdx) => (
                    <span className="skill-pill-item" key={itemIdx}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
