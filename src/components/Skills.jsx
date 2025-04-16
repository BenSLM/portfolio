import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHtml5, 
  faCss3Alt, 
  faJsSquare, 
  faBootstrap, 
  faNodeJs, 
  faReact, 
  faGitAlt 
} from '@fortawesome/free-brands-svg-icons';
import { faServer, faDatabase } from '@fortawesome/free-solid-svg-icons';
import '../styles/Skills.css';

const Skills = () => {
  const skills = [
    { name: 'HTML', icon: faHtml5, delay: 100 },
    { name: 'CSS', icon: faCss3Alt, delay: 200 },
    { name: 'JavaScript', icon: faJsSquare, delay: 300 },
    { name: 'Bootstrap', icon: faBootstrap, delay: 400 },
    { name: 'Node.js', icon: faNodeJs, delay: 500 },
    { name: 'Express', icon: faServer, delay: 600 },
    { name: 'MongoDB', icon: faDatabase, delay: 700 },
    { name: 'React', icon: faReact, delay: 800 },
    { name: 'SQL', icon: faDatabase, delay: 900 },
    { name: 'Git', icon: faGitAlt, delay: 1000 }
  ];

  return (
    <section id="skills" className="py-5 bg-dark">
      <div className="container">
        <h2 className="text-white text-center mb-5" data-aos="fade-down">Mis Habilidades</h2>
        <div className="row justify-content-center text-center g-4">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="col-lg-2 col-md-3 col-6" 
              data-aos="fade-up" 
              data-aos-delay={skill.delay}
            >
              <FontAwesomeIcon icon={skill.icon} className="fa-3x text-white mb-3" />
              <h4 className="text-white">{skill.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 