import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="d-flex align-items-center justify-content-center vh-100">
      <div className="container text-center text-white" data-aos="fade-up">
        <h1 className="display-4 fw-bold">Hola, mi nombre es</h1>
        <h2 className="display-1 fw-bold mb-4" style={{ color: '#1abc9c' }}>Benjamin Dev</h2>
        <p className="lead mb-4" style={{ fontSize: '1.5rem' }}>
          Creo interfaces visualmente atractivas y funcionales para la web.
        </p>
        <p className="mb-4" style={{ maxWidth: '600px', margin: '0 auto' }}>
          Soy un apasionado desarrollador frontend con experiencia en la creación de aplicaciones web modernas utilizando tecnologías como HTML, CSS, JavaScript, Bootstrap y React. Me encanta transformar ideas en experiencias digitales increíbles.
        </p>
        <p className="text-muted" style={{ fontSize: '1rem' }}>
          Actualmente disponible para proyectos freelance.
        </p>
        <a href="#contact" className="btn btn-custom mt-3">Contáctame</a>
      </div>
    </section>
  );
};

export default About; 