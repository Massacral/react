import React from 'react';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <span className="section-subtitle">SOBRE NÓS</span>
            <h2 className="about-title">
              <strong>A Dermalux</strong><br />
              Dermatologia
            </h2>
            <p className="about-text">
              A Clínica Dermalux é uma clínica de referência nacional, especializada em dermatologia clínica e estética, oferecendo uma abordagem personalizada e de alto padrão para seus pacientes.
            </p>
            <p className="about-text">
              Nossos protocolos são baseados nas mais recentes evidências científicas, proporcionando segurança, eficácia e resultados naturais.
            </p>
            <p className="about-text">
              Nosso compromisso é com a sofisticação, tecnologia e bem-estar, garantindo um atendimento exclusivo e diferenciado, em um ambiente moderno e acolhedor.
            </p>
          </div>
          <div className="about-image">
            <img 
              src="https://www.carumoreno.com.br/wp-content/uploads/2025/04/dermatologista-3.jpg" 
              alt="Clínica Dermalux" 
            />
            <div className="image-frame"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;