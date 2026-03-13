import React from 'react';

const specialties = [
  {
    title: 'Dermatologia',
    image: 'https://clinicamaisvida.net.br/wp-content/uploads/2025/04/dermatologia-procedimento-estetico-rosto.jpg',
    alt: 'Dermatologia'
  },
  {
    title: 'Tricologia',
    image: 'https://brunaferraridermatologia.com.br/site/wp-content/uploads/2024/04/consultas-e-exames-tricologia-tricoscopia-diagnosticos-avaliacao-tricologica-cabelo-queda-capilar-alopecia-tratamento-cabelos-sp-sbc-dra-bruna-ferrari-2.jpg',
    alt: 'Tricologia'
  },
  {
    title: 'Cosmiatria',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop',
    alt: 'Cosmiatria'
  },
  {
    title: 'Cirurgia Plástica',
    image: 'https://www.unifisa.com.br/file/2024/06/Unifisa_32072_imagens_05-1024x579.png.webp',
    alt: 'Cirurgia Plástica'
  }
];

const Specialties = () => {
  return (
    <section className="specialties" id="specialties">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">ESPECIALIDADES DERMARLUX</span>
          <h2 className="section-title">Nossas Especialidades</h2>
        </div>
        
        <div className="specialties-grid">
          {specialties.map((item, index) => (
            <div key={index} className="specialty-card">
              <div className="specialty-image-wrapper">
                <img 
                  src={item.image} 
                  alt={item.alt}
                  className="specialty-image"
                />
                <div className="specialty-overlay">
                  <h3>{item.title}</h3>
                  <a href="#contact" className="specialty-link">Saiba mais</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;