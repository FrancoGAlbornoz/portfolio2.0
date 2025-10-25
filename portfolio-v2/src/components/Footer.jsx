import { Container } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "../styles/components/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <Container className="footer-container">
        <p className="mb-0">
          © {new Date().getFullYear()} <strong>Franco Albornoz</strong>. Todos los derechos reservados.
        </p>

        <div className="social-links">
          <a href="https://github.com/FrancoAlbornoz" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com/in/francoalbornoz" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="mailto:tuemail@example.com"><FaEnvelope /></a>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
