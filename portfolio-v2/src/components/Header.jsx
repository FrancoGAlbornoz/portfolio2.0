import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-scroll";
import "../styles/components/header.css";

function Header() {
  return (
    <Navbar bg="dark" variant="white" expand="lg" fixed="top" className="nav-centered">
      <Container className="justify-content-center">
        {/* Botón hamburguesa visible en móvil */}
        <Navbar.Toggle aria-controls="navbar-nav" className="border-0" />
        {/* Contenedor de links */}
        <Navbar.Collapse id="navbar-nav" className="justify-content-center">
          <Nav>
            <Nav.Link as={Link} to="about" smooth={true} duration={500} offset={-70} className="nav-link-custom"> Sobre mí </Nav.Link>
            <Nav.Link as={Link} to="skills" smooth={true} duration={500} offset={-70} className="nav-link-custom"> Habilidades </Nav.Link>
            <Nav.Link as={Link} to="experience" smooth={true} duration={500} offset={-70} className="nav-link-custom"> Experiencia </Nav.Link>
            <Nav.Link as={Link} to="projects" smooth={true} duration={500} offset={-70} className="nav-link-custom"> Proyectos </Nav.Link>
            <Nav.Link as={Link} to="contact" smooth={true} duration={500} offset={-70} className="nav-link-custom"> Contacto </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
