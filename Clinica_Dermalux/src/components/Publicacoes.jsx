import React from 'react';

const publications = [
  {
    id: 1,
    title: 'Dermatologia Clínica Avançada',
    author: 'Dra. Ingrid Carolina',
    date: '2024',
    description: 'Estudo sobre as mais recentes técnicas em dermatologia clínica e tratamentos inovadores para doenças de pele.'
  },
  {
    id: 2,
    title: 'Tratamentos Inovadores para Melasma',
    author: 'Dr. Lucas Andrade',
    date: '2023',
    description: 'Pesquisa sobre novos protocolos e abordagens no tratamento do melasma com resultados duradouros.'
  },
  {
    id: 3,
    title: 'Protocolos em Dermatologia Estética',
    author: 'Dra. Camila Santos',
    date: '2023',
    description: 'Análise comparativa de diferentes protocolos estéticos e suas eficácias em procedimentos não invasivos.'
  }
];

const Publicacoes = () => {
  return (
    <section className="publicacoes" id="publicacoes">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">PRODUÇÃO CIENTÍFICA</span>
          <h2 className="section-title">Publicações</h2>
        </div>
        
        <div className="publicacoes-grid">
          {publications.map((pub) => (
            <div key={pub.id} className="publicacao-card">
              <h3>{pub.title}</h3>
              <p className="publicacao-meta">{pub.author} · {pub.date}</p>
              <p className="publicacao-description">{pub.description}</p>
              <a 
                href="#publicacoes" 
                className="publicacao-link"
                onClick={(e) => {
                  e.preventDefault();
                  alert(`Mais informações sobre "${pub.title}" em breve!`);
                }}
              >
                Leia mais →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publicacoes;