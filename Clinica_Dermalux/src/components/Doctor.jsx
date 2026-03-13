import React from 'react';

const Doctor = () => {
  return (
    <section className="doctor-section" id="doctor">
      <div className="container">
        <div className="doctor-grid">
          <div className="doctor-content">
            <span className="section-subtitle">NOSSA FUNDADORA</span>
            <h2 className="doctor-title">
              <strong>Dra. Ingrid Carolina</strong>
            </h2>
            
            <div className="doctor-description">
              <p className="doctor-text">
                A Dra. Ingrid Carolina, fundadora e diretora da Clínica Dermalux, é uma das mais renomadas especialistas do país. Com mais de duas décadas de experiência, é graduada pela Universidade de Brasília (UnB) e mestre pela Universidade de Harvard. Ela já presidiu a Sociedade Brasileira de Dermatologia (SBD) e foi presidente do Congresso Brasileiro de Dermatologia em Brasília, em 2019. Além de atuar no atendimento clínico, é mentora de diversos profissionais da área, transmitindo conhecimento e experiência.
              </p>
              <p className="doctor-text">
                Sua abordagem une conhecimento profundo, tecnologia e um olhar humanizado, proporcionando uma experiência exclusiva e diferenciada a cada paciente.
              </p>
            </div>

            <a 
              href="#contact" 
              className="btn-doctor"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Agende uma consulta com Dra. Ingrid Carolina
            </a>
          </div>
          
          <div className="doctor-image-wrapper">
            <div className="doctor-image-frame">
              <img 
                src="https://www.carumoreno.com.br/wp-content/uploads/2025/04/dermatologista-Barra.png" 
                alt="Dra. Ingrid Carolina - Dermatologista"
                className="doctor-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Doctor;