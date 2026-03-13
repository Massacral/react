import React from 'react';

const Institutional = () => {
  return (
    <section className="institutional-section" id="institutional">
      <div className="container">
        <h2 className="institutional-title">Grupo Dermalux</h2>
        <p className="institutional-text">
          Nossos protocolos são baseados nas mais recentes evidências científicas, 
          proporcionando segurança, eficácia e resultados naturais.
        </p>
        <p className="institutional-text">
          Nosso compromisso é com a sofisticação, tecnologia e bem-estar, garantindo 
          um atendimento exclusivo e diferenciado, em um ambiente moderno e acolhedor.
        </p>
        <a 
          href="#contact" 
          className="btn-institutional"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Fale com um especialista!
        </a>
      </div>
    </section>
  );
};

export default Institutional;