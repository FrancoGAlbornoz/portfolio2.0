import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";
import { Link } from "react-scroll";
import "../styles/components/footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-custom">
      <div className="container">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
          
          <div className="footer-left text-center text-md-start">
            <span className="footer-brand">Franco G. Albornoz</span>
            <p className="footer-copy mb-0">
              © {currentYear} Franco Albornoz. Desarrollado con React & Vite.
            </p>
          </div>

          <div className="footer-socials d-flex align-items-center gap-3">
            <a 
              href="https://github.com/FrancoGAlbornoz" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >
              <FaGithub />
            </a>
            <a 
              href="https://linkedin.com/in/francogenaroalbornoz" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a 
              href="mailto:francog.albornoz17@gmail.com"
              aria-label="Email"
              title="Email"
            >
              <FaEnvelope />
            </a>
          </div>

          <Link
            to="about"
            smooth={true}
            duration={500}
            className="btn-back-to-top"
            aria-label="Volver arriba"
            title="Volver arriba"
          >
            <FaArrowUp />
          </Link>

        </div>
      </div>
    </footer>
  );
}
