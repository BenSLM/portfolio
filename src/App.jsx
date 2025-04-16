import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import SocialSidebar from './components/SocialSidebar';

import './App.css';

function App() {
  // Inicializar AOS (Animate On Scroll)
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 0,
      easing: 'ease-out-cubic',
      delay: 0,
      anchorPlacement: 'top-bottom'
    });
  }, []);

  return (
    <div className="app-container">
      <Navbar />
      <SocialSidebar />
      <div className="container-custom">
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
