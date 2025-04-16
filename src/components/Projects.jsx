import React from 'react';
import '../styles/Projects.css';

// Importar una imagen de placeholder para los proyectos
import placeholderImage from '../assets/proyecto1.jpg';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Proyecto 1',
      description: 'Descripción breve del proyecto.',
      image: placeholderImage,
      delay: 100
    },
    {
      id: 2,
      title: 'Proyecto 2',
      description: 'Descripción breve del proyecto.',
      image: placeholderImage,
      delay: 200
    },
    {
      id: 3,
      title: 'Proyecto 3',
      description: 'Descripción breve del proyecto.',
      image: placeholderImage,
      delay: 300
    }
  ];

  return (
    <section id="projects" className="py-5" data-aos="fade-up">
      <div className="container">
        <h2 className="text-white text-center mb-5" data-aos="fade-down">Proyectos</h2>
        <div className="row">
          {projects.map(project => (
            <div 
              key={project.id} 
              className="col-md-4 mb-4" 
              data-aos="fade-up" 
              data-aos-delay={project.delay}
            >
              <div className="card bg-dark text-white">
                <img src={project.image} className="card-img-top" alt={project.title} />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <a href="#" className="btn btn-custom">Ver más</a>
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