import React, { useState } from "react";
import "../styles/sections/projects.css";
import { FaGithub, FaStar, FaImage } from "react-icons/fa";

const PROFILE_URL = "https://github.com/FrancoGAlbornoz";

const allProjects = [
  {
    id: "sigedoc",
    title: "SIGEDOC - Sistema de Gestión Documental",
    category: "Full Stack",
    desc: "Aplicación web y API RESTful para la trazabilidad y seguimiento de expedientes institucionales. Incluye gestión de roles jerárquicos (editor, admin, consultor), almacenamiento en Firebase Storage, notificaciones automatizadas con Nodemailer y reportes PDF/DOCX.",
    tags: ["React", "Node.js", "Express", "PostgreSQL", "Docker", "Firebase", "Clean Arch"],
    repo: "https://github.com/FrancoGAlbornoz/portfolio2.0",
    image: "/projects/sigedoc.png",
    featured: true,
  },
  {
    id: "turismo",
    title: "Altos del Tucumán Turismo",
    category: "Full Stack",
    desc: "Plataforma web de reservas para agencia de turismo en Tucumán. Cuenta con sistema de autenticación (turistas/administradores), carrito de compras, gestión de disponibilidad, reseñas y personalización de excursiones.",
    tags: ["React", "Node.js", "Express", "MySQL", "APIs REST", "Bootstrap"],
    repo: "https://github.com/FrancoGAlbornoz/TurismoTuc/",
    image: "/projects/turismo.png",
    featured: true,
  },
  {
    id: "libreria-lela",
    title: "Librería Lela",
    category: "Full Stack",
    desc: "Plataforma web interactiva para e-commerce y personalización de artículos de librería. Permite a los clientes diseñar agendas personalizadas y crear imanes fotográficos únicos con sus fotos favoritas.",
    tags: ["React", "JavaScript", "HTML5", "CSS3", "E-commerce"],
    repo: "https://github.com/FrancoGAlbornoz",
    image: "/projects/lela.png",
    featured: true,
  },
  {
    id: "open25hs",
    title: "25HS Drugstore",
    category: "Frontend",
    desc: "Sitio web de drugstore con catálogo de productos, carrito de compras y sistema de checkout.",
    tags: ["HTML5", "CSS3", "JavaScript", "React"],
    repo: "https://github.com/FrancoGAlbornoz/Open25HS",
    featured: false,
  },
  {
    id: "veterinaria",
    title: "Veterinaria Patitas",
    category: "Frontend",
    desc: "Sitio web institucional para clínica veterinaria en Tucumán con consulta de servicios y turnos.",
    tags: ["HTML5", "CSS3", "JavaScript"],
    repo: "https://github.com/FrancoGAlbornoz/Veterinaria",
    featured: false,
  },
  {
    id: "portfolio-api",
    title: "Portfolio RESTful API",
    category: "Backend",
    desc: "API RESTful backend estructurada con Node.js, Express y MySQL para gestionar proyectos, habilidades y experiencia laboral.",
    tags: ["Node.js", "Express", "MySQL", "APIs REST"],
    repo: "https://github.com/FrancoGAlbornoz/portfolio2.0",
    featured: false,
  },
];

const categories = ["Todos", "Full Stack", "Backend", "Frontend"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [imgErrors, setImgErrors] = useState({});

  const handleImageError = (id) => {
    setImgErrors((prev) => ({ ...prev, [id]: true }));
  };

  const filteredProjects = activeCategory === "Todos"
    ? allProjects
    : allProjects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <header className="section-header text-center mb-5">
          <h2 className="section-title">Proyectos Destacados</h2>
          <p className="section-subtitle">Sistemas y aplicaciones web desarrollados en entornos productivos y profesionales</p>
          
          {/* Category Filter Tabs */}
          <div className="d-flex flex-wrap justify-content-center gap-2 mt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </header>

        <div className="row g-4">
          {filteredProjects.map((p) => (
            <div className="col-md-6 col-lg-4" key={p.id}>
              <article className={`project-card-modern h-100 ${p.featured ? "is-featured" : ""}`}>
                
                {/* Visual Screenshot Container solo para proyectos destacados */}
                {p.featured && (
                  <div className="project-image-container mb-3">
                    {p.image && !imgErrors[p.id] ? (
                      <img 
                        src={p.image} 
                        alt={`Captura de ${p.title}`} 
                        className="project-img-preview"
                        onError={() => handleImageError(p.id)}
                      />
                    ) : (
                      <div className="project-img-placeholder">
                        <FaImage className="placeholder-icon" />
                        <span>Captura de pantalla ({p.title})</span>
                      </div>
                    )}
                  </div>
                )}

                <div className="project-card-header d-flex justify-content-between align-items-start mb-2">
                  <span className="category-badge">{p.category}</span>
                  {p.featured && (
                    <span className="featured-badge">
                      <FaStar className="me-1" /> Destacado
                    </span>
                  )}
                </div>

                <h3 className="project-title mb-2">{p.title}</h3>
                <p className="project-desc mb-4">{p.desc}</p>

                <div className="project-tags d-flex flex-wrap gap-2 mb-4 mt-auto">
                  {p.tags.map((t) => (
                    <span key={t} className="project-pill">{t}</span>
                  ))}
                </div>

                <div className="project-footer pt-3 border-top border-secondary-subtle d-flex justify-content-between align-items-center">
                  <a
                    className="btn-github-link"
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub className="me-2" />
                    Código en GitHub
                  </a>
                </div>
              </article>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <a href={PROFILE_URL} target="_blank" rel="noreferrer" className="btn-more-projects">
            Explorar más repositorios en GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}
