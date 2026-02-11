import { FaGithub, FaEnvelope } from "react-icons/fa";
import "../styles/sections/contact.css";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2>Contacto</h2>
        <p className="contact-subtitle">
          ¿Tienes un proyecto en mente? ¡Hablemos!
        </p>

        <div className="contact-card">
          <p className="contact-text">
            Estoy disponible para nuevos proyectos y colaboraciones.
            No dudes en contactarme.
          </p>

          <div className="contact-actions">
            <a
              href="https://github.com/FrancoGAlbornoz"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <FaGithub />
              GitHub
            </a>

            <a
              href="mailto:francog.albornoz17@gmail.com"
              className="btn-outline"
            >
              <FaEnvelope />
              Email
            </a>
          </div>

          <small className="contact-note">
            Actualiza el email con tu dirección real
          </small>
        </div>
      </div>
    </section>
  );
}

export default Contact;
