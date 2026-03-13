import React from 'react';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <img
        src="https://www.carumoreno.com.br/wp-content/uploads/2025/04/DSC04056-scaled.jpg"
        alt="Dermatologista"
        className="hero-image"
      />
      <div className="hero-overlay"></div>
      
      <div className="hero-content">
        <span className="hero-badge">A Dermalux</span>
        <h1 className="hero-title">
          <strong>Dermatologia</strong><br />
          de excelência para<br />
          sua pele
        </h1>
        <p className="hero-description">
          A Clínica Dermalux é uma clínica de referência nacional,<br />
          especializada em dermatologia clínica e estética, oferecendo<br />
          uma abordagem personalizada e de alto padrão para seus<br />
          pacientes.
        </p>
        <a 
          href="#contact" 
          className="btn-hero"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Agende sua consulta agora mesmo!
        </a>
      </div>
    </section>
  );
};

export default Hero;