// src/sections/Home.jsx
import React from 'react';

const Home = () => {
  const scrollToServicos = () => {
    document.getElementById('servicos').scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContato = () => {
    document.getElementById('contato').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="home">
      <div className="home-content">
        <h1>Dashboard Serviços</h1>
        <p>Sua plataforma completa para gestão e automação de serviços profissionais</p>
        <div className="home-buttons">
          <button className="btn-primary" onClick={scrollToServicos}>
            Conheça nossos serviços
          </button>
          <button className="btn-secondary" onClick={scrollToContato}>
            Fale conosco
          </button>
        </div>
      </div>
      
      <div className="home-stats">
        <div className="stat-item">
          <span className="stat-number">500+</span>
          <span className="stat-label">Clientes Atendidos</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">1000+</span>
          <span className="stat-label">Projetos Entregues</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">98%</span>
          <span className="stat-label">Satisfação</span>
        </div>
      </div>
    </section>
  );
};

export default Home;