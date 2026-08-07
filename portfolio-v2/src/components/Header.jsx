import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-scroll";
import { FaSun, FaMoon, FaFileDownload, FaCode } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import "../styles/components/header.css";

function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Navbar expand="lg" fixed="top" className="custom-navbar glass-panel">
      <Container>
        <Navbar.Brand href="#about" className="navbar-brand-custom">
          <span className="brand-code"><FaCode /></span> Franco<span>Albornoz</span>
        </Navbar.Brand>

        <div className="d-flex align-items-center gap-2 d-lg-none">
          <button 
            className="theme-toggle-btn" 
            onClick={toggleTheme} 
            aria-label="Cambiar Tema"
            title={theme === "dark" ? "Cambiar a Modo Claro" : "Cambiar a Modo Oscuro"}
          >
            {theme === "dark" ? <FaSun className="icon-sun" /> : <FaMoon className="icon-moon" />}
          </button>
          <Navbar.Toggle aria-controls="navbar-nav" className="custom-toggler" />
        </div>

        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav className="align-items-center gap-lg-1">
            <Nav.Link as={Link} to="about" smooth={true} duration={500} offset={-80} className="nav-link-custom">
              Sobre mí
            </Nav.Link>
            <Nav.Link as={Link} to="experience" smooth={true} duration={500} offset={-80} className="nav-link-custom">
              Experiencia
            </Nav.Link>
            <Nav.Link as={Link} to="projects" smooth={true} duration={500} offset={-80} className="nav-link-custom">
              Proyectos
            </Nav.Link>
            <Nav.Link as={Link} to="skills" smooth={true} duration={500} offset={-80} className="nav-link-custom">
              Habilidades
            </Nav.Link>
            <Nav.Link as={Link} to="certifications" smooth={true} duration={500} offset={-80} className="nav-link-custom">
              Certificaciones
            </Nav.Link>
            <Nav.Link as={Link} to="contact" smooth={true} duration={500} offset={-80} className="nav-link-custom">
              Contacto
            </Nav.Link>

            <button 
              className="theme-toggle-btn d-none d-lg-flex" 
              onClick={toggleTheme} 
              aria-label="Cambiar Tema"
              title={theme === "dark" ? "Cambiar a Modo Claro" : "Cambiar a Modo Oscuro"}
            >
              {theme === "dark" ? <FaSun className="icon-sun" /> : <FaMoon className="icon-moon" />}
            </button>

            <a 
              href="https://github.com/FrancoGAlbornoz" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-cv-download ms-lg-2 mt-3 mt-lg-0"
            >
              <FaFileDownload /> CV / Perfil
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
