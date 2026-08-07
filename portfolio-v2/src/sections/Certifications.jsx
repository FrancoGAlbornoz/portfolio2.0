import React from "react";
import "../styles/sections/certifications.css";
import { FaGraduationCap, FaCertificate, FaShieldAlt, FaLaptop, FaAward, FaUserCheck } from "react-icons/fa";

const educationList = [
  {
    institution: "Universidad Tecnológica Nacional – FRT",
    degree: "Ingeniería en Sistemas de Información",
    status: "Cursando 4° Año",
    type: "Grado Universitario",
    icon: <FaGraduationCap />
  },
  {
    institution: "Universidad Tecnológica Nacional – FRT",
    degree: "Analista Universitario en Sistemas de Información",
    status: "Título Intermedio / Graduado",
    type: "Título Universitario",
    icon: <FaUserCheck />
  },
  {
    institution: "Universidad Tecnológica Nacional – FRT",
    degree: "Técnico Universitario en Programación",
    status: "Graduado",
    type: "Pregrado Universitario",
    icon: <FaGraduationCap />
  }
];

const certList = [
  {
    title: "Google Cybersecurity Professional Certificate",
    issuer: "Google",
    year: "2026",
    badge: "Oficial Google",
    icon: <FaShieldAlt className="cert-icon-cyan" />,
    desc: "Formación profesional en gestión de riesgos de seguridad, Python para ciberseguridad, SIEM, análisis de amenazas e infraestructura defensiva."
  },
  {
    title: "Google Support IT Professional Certificate",
    issuer: "Google",
    year: "2026",
    badge: "Oficial Google",
    icon: <FaLaptop className="cert-icon-blue" />,
    desc: "Certificación profesional en administración de sistemas, redes, automatización con scripts y asistencia técnica integral."
  },
  {
    title: "FullStack Developer",
    issuer: "CoderHouse",
    year: "2019",
    badge: "Desarrollo Web",
    icon: <FaAward className="cert-icon-purple" />,
    desc: "Formación intensiva en desarrollo web moderno, arquitectura cliente-servidor y bases de datos relacionales."
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="certifications-section">
      <div className="container">
        <header className="section-header text-center mb-5">
          <h2 className="section-title">Educación & Certificaciones</h2>
          <p className="section-subtitle">Formación universitaria y certificaciones profesionales internacionales</p>
        </header>

        {/* Educación Universitaria */}
        <div className="mb-5">
          <h3 className="subheading mb-4 text-center text-md-start d-flex align-items-center gap-2 justify-content-center justify-content-md-start">
            <FaGraduationCap className="text-cyan" /> Formación Académica (UTN FRT)
          </h3>
          <div className="row g-4">
            {educationList.map((edu, idx) => (
              <div className="col-md-4" key={idx}>
                <div className="edu-card glass-card h-100">
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <div className="edu-icon-circle">{edu.icon}</div>
                    <div>
                      <span className="edu-type-badge">{edu.type}</span>
                      <h4 className="edu-degree mb-0">{edu.degree}</h4>
                    </div>
                  </div>
                  <p className="edu-institution mb-2">{edu.institution}</p>
                  <span className={`edu-status-badge ${edu.status.includes("Graduado") ? "graduated" : "in-progress"}`}>
                    {edu.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certificaciones Internacionales */}
        <div>
          <h3 className="subheading mb-4 text-center text-md-start d-flex align-items-center gap-2 justify-content-center justify-content-md-start">
            <FaCertificate className="text-cyan" /> Certificaciones Profesionales
          </h3>
          <div className="row g-4">
            {certList.map((cert, idx) => (
              <div className="col-md-4" key={idx}>
                <div className="cert-card h-100">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <div className="cert-icon-bg">{cert.icon}</div>
                    <span className="cert-badge">{cert.badge}</span>
                  </div>
                  <h4 className="cert-title mb-2">{cert.title}</h4>
                  <div className="cert-issuer-row d-flex justify-content-between text-muted mb-3">
                    <span>{cert.issuer}</span>
                    <span>[{cert.year}]</span>
                  </div>
                  <p className="cert-desc mb-0">{cert.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
