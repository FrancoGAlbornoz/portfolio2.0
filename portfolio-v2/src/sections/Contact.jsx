import React, { useState } from "react";
import "../styles/sections/contact.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaCopy, FaCheck, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "francog.albornoz17@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <header className="section-header text-center mb-5">
          <h2 className="section-title">Contacto</h2>
          <p className="section-subtitle">¿Tienes un proyecto, propuesta laboral o consulta? ¡Hablemos!</p>
        </header>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="contact-card-glass text-center p-4 p-md-5">
              <div className="contact-avatar mb-4">
                <FaEnvelope className="avatar-icon" />
              </div>

              <h3 className="mb-3">Envíame un mensaje</h3>
              <p className="contact-text mb-4">
                Estoy disponible para nuevas oportunidades Full Stack, proyectos web, consultoría en IT y Ciberseguridad.
              </p>

              {/* Direct email box with copy button */}
              <div className="email-copy-box d-flex align-items-center justify-content-between mx-auto mb-4">
                <span className="email-address">{email}</span>
                <button 
                  className={`btn-copy-email ${copied ? "copied" : ""}`} 
                  onClick={handleCopyEmail}
                  title="Copiar correo electrónico"
                >
                  {copied ? <><FaCheck /> ¡Copiado!</> : <><FaCopy /> Copiar</>}
                </button>
              </div>

              <div className="row g-3 justify-content-center mb-4">
                <div className="col-auto">
                  <div className="info-chip">
                    <FaMapMarkerAlt className="text-cyan me-2" /> Yerba Buena, Tucumán, AR
                  </div>
                </div>
                <div className="col-auto">
                  <div className="info-chip">
                    <FaPhoneAlt className="text-cyan me-2" /> +54 3815889202
                  </div>
                </div>
              </div>

              <div className="contact-actions d-flex flex-wrap justify-content-center gap-3">
                <a
                  href={`mailto:${email}`}
                  className="btn-contact-primary"
                >
                  <FaEnvelope className="me-2" />
                  Enviar Email Directo
                </a>

                <a
                  href="https://linkedin.com/in/francogenaroalbornoz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-contact-secondary"
                >
                  <FaLinkedin className="me-2" />
                  LinkedIn
                </a>

                <a
                  href="https://github.com/FrancoGAlbornoz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-contact-secondary"
                >
                  <FaGithub className="me-2" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
