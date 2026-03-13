// components/About.js
import React from 'react';


const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2>Sobre Nós</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-description">
              A Clínica Dermalux nasceu da paixão por cuidar da saúde e beleza da pele. 
              Com mais de 15 anos de experiência no mercado dermatológico, somos referência 
              em tratamentos inovadores e humanizados.
            </p>
            <div className="mission-vision">
              <div className="mission-card">
                <h3>Missão</h3>
                <p>Proporcionar saúde e bem-estar através de tratamentos dermatológicos de excelência, 
                aliando tecnologia de ponta ao cuidado humanizado.</p>
              </div>
              <div className="vision-card">
                <h3>Visão</h3>
                <p>Ser referência nacional em dermatologia, reconhecida pela inovação, 
                qualidade dos serviços e satisfação dos pacientes.</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <img 
              src="https://images.unsplash.com/photo-1581595220892-b4dc6b9d1fb4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Clínica Dermalux" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;