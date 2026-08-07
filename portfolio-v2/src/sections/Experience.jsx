import React from "react";
import "../styles/sections/experience.css";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";

const experiences = [
  {
    company: "Ministerio de Desarrollo Productivo",
    location: "Tucumán, AR",
    role: "Fullstack Developer & Soporte IT",
    period: "Nov 2025 – Actualidad",
    badge: "Actual",
    description: "Desarrollo de aplicaciones web escalables para plataformas institucionales de back-office con foco en arquitectura, seguridad y rendimiento.",
    tasks: [
      "Diseño y mantenimiento de aplicaciones web escalables con JavaScript, React, TypeScript, Node.js y Express bajo Scrum/Kanban.",
      "Desarrollo e integración de APIs RESTful para sistemas internos y gestión eficiente de datos.",
      "Configuración de conexiones seguras a bases de datos SQL en MySQL y SQL Server, priorizando protección de datos sensibles.",
      "Implementación de prácticas orientadas a la seguridad de la información y elaboración de documentación técnica detallada.",
      "Colaboración activa en la administración de infraestructura IT aportando una perspectiva Full Stack."
    ],
    techs: ["React", "TypeScript", "Node.js", "Express", "MySQL", "SQL Server", "APIs REST", "Scrum"]
  },
  {
    company: "San Miguel GLOBAL",
    location: "Tucumán, AR",
    role: "Técnico de Soporte IT",
    period: "Jun 2019 – Actualidad",
    badge: "Actual",
    description: "Referente técnico del área IT en entorno industrial, gestionando infraestructura, sistemas y automatización de procesos.",
    tasks: [
      "Automatización de tareas de mantenimiento y monitoreo de red mediante scripts, reduciendo tiempos de respuesta ante incidencias.",
      "Administración y mantenimiento de infraestructura IT en entorno industrial, asegurando la continuidad operativa de sistemas en planta.",
      "Configuración y soporte de sistemas operativos Windows y Linux brindando asistencia multinivel.",
      "Implementación proactiva de parches de seguridad y actualizaciones para mitigar vulnerabilidades en producción.",
      "Gestión integral de activos tecnológicos, diagnóstico de fallas críticas e implementación de infraestructura de red."
    ],
    techs: ["Linux", "Windows Server", "Redes & Protocolos", "Scripting", "Ciberseguridad", "Mantenimiento IT"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <header className="section-header text-center mb-5">
          <h2 className="section-title">Experiencia Laboral</h2>
          <p className="section-subtitle">Trayectoria profesional en desarrollo de software e infraestructura IT</p>
        </header>

        <div className="timeline-container position-relative">
          <div className="timeline-line"></div>
          {experiences.map((exp, idx) => (
            <div className="timeline-item position-relative mb-5" key={idx}>
              <div className="timeline-dot">
                <FaBriefcase />
              </div>

              <div className="timeline-content glass-card">
                <div className="d-flex flex-wrap justify-content-between align-items-center mb-3">
                  <div>
                    <h3 className="exp-role">{exp.role}</h3>
                    <h4 className="exp-company">{exp.company}</h4>
                  </div>
                  <div className="exp-meta text-end">
                    <span className="badge-period me-2">
                      <FaCalendarAlt className="me-1" /> {exp.period}
                    </span>
                    <span className="badge-location">
                      <FaMapMarkerAlt className="me-1" /> {exp.location}
                    </span>
                  </div>
                </div>

                <p className="exp-desc mb-3">{exp.description}</p>

                <ul className="exp-tasks list-unstyled mb-4">
                  {exp.tasks.map((task, tIdx) => (
                    <li key={tIdx} className="d-flex align-items-start mb-2">
                      <FaCheckCircle className="task-icon me-2 mt-1" />
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>

                <div className="exp-techs d-flex flex-wrap gap-2">
                  {exp.techs.map((tech, techIdx) => (
                    <span key={techIdx} className="tech-tag">
                      {tech}
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
