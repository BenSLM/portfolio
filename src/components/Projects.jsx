import React from 'react';
import '../styles/Projects.css';

// Importar una imagen de placeholder para los proyectos
import placeholderImage from '../assets/proyecto1.jpg';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Proyecto Prueba 1',
      description: 'Descripción del proyecto de prueba. Este es un placeholder para mostrar el diseño de las cards.',
      image: placeholderImage,
      technologies: ['React', 'CSS', 'JavaScript'],
      demoLink: '#',
      delay: 100
    },
    {
      id: 2,
      title: 'Proyecto Prueba 2',
      description: 'Descripción del proyecto de prueba. Este es un placeholder para mostrar el diseño de las cards.',
      image: placeholderImage,
      technologies: ['HTML', 'CSS', 'JavaScript'],
      demoLink: '#',
      delay: 200
    },
    {
      id: 3,
      title: 'Proyecto Prueba 3',
      description: 'Descripción del proyecto de prueba. Este es un placeholder para mostrar el diseño de las cards.',
      image: placeholderImage,
      technologies: ['React', 'Node.js', 'MongoDB'],
      demoLink: '#',
      delay: 300
    },
    {
      id: 4,
      title: 'Proyecto Prueba 4',
      description: 'Descripción del proyecto de prueba. Este es un placeholder para mostrar el diseño de las cards.',
      image: placeholderImage,
      technologies: ['React', 'Bootstrap', 'Express'],
      demoLink: '#',
      delay: 400
    }
  ];

  return (
    <section id="projects" className="py-5" data-aos="fade-up">
      <div className="container">
        <h2 className="text-center mb-5" data-aos="fade-down">Mis Proyectos</h2>
        <div className="row g-4">
          {projects.map(project => (
            <div 
              key={project.id} 
              className="col-md-6 mb-4" 
              data-aos="fade-up" 
              data-aos-delay={project.delay}
            >
              <div className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <a href={project.demoLink} className="btn-demo">Ver Demo</a>
                  </div>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 