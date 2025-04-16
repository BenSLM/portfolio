import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí se añadiría la lógica para enviar el formulario
    console.log(formData);
    // Resetear el formulario
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    alert('Mensaje enviado con éxito!');
  };

  return (
    <section id="contact" className="py-5 bg-dark" data-aos="fade-up">
      <div className="container">
        <h2 className="text-center">Contacto</h2>
        <div className="contact-form-container">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input 
                type="text" 
                className="form-control" 
                placeholder="Nombre" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="mb-3">
              <input 
                type="email" 
                className="form-control" 
                placeholder="Correo electrónico" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="mb-3">
              <textarea 
                className="form-control" 
                rows="5" 
                placeholder="Mensaje" 
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-custom">Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact; 