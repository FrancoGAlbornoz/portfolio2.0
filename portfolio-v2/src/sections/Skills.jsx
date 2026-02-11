import React from "react";
import "../styles/sections/skills.css";

const Skills = () => {
  // Definición de las habilidades y tecnologías
  const skills = {
    Frontend: ["HTML5", "CSS3", "JavaScript", "React", "Bootstrap", "Tailwind CSS"],
    Backend: ["Node.js", "Express", "Next.js", "MongoDB", "MySQL"],
    Herramientas: ["Git", "GitHub", "Vite", "Trello", "Figma"],
    Otros: ["Responsive Design", "Comunicación", "Trabajo en equipo", "Resolución de problemas", "Ciberseguridad básica"],
  };

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <header className="skills-header">
          <h2>Habilidades</h2>
          <p>Tecnologías con las que trabajo</p>
        </header>

        <div className="skills-grid">
          {Object.entries(skills).map(([title, items]) => (
            <div className="skills-block" key={title}>
              <h3>{title}</h3>
              <div className="skills-tags">
                {items.map((t) => (
                  <span className="skill-pill" key={t}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
