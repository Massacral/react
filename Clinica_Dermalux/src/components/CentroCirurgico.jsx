import React from 'react';

const CentroCirurgico = () => {
  return (
    <section className="centro-cirurgico" id="centro-cirurgico">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">ESTRUTURA</span>
          <h2 className="section-title">Centro Cirúrgico</h2>
        </div>
        <div className="cirurgico-content">
          <div className="cirurgico-text">
            <p className="about-text">
              Dispomos de um centro cirúrgico moderno e totalmente equipado para procedimentos dermatológicos e cirurgias plásticas. Nossa estrutura conta com tecnologia de ponta e equipe especializada para garantir segurança e conforto aos pacientes.
            </p>
            <ul className="cirurgico-list">
              <li>✓ Salas cirúrgicas com padrão internacional</li>
              <li>✓ Equipamentos de última geração</li>
              <li>✓ Equipe multidisciplinar</li>
              <li>✓ Recuperação pós-anestésica</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CentroCirurgico;