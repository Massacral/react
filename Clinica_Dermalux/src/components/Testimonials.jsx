import React from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Ana Paula Silva',
    text: 'Excelente atendimento! A Dra. Ingrid Carolina é muito atenciosa e os resultados do tratamento superaram minhas expectativas. Ambiente acolhedor e profissionais qualificados.',
    rating: 5,
    date: '2024',
    image: 'https://img.freepik.com/fotos-gratis/foto-na-cabeca-de-uma-bela-mulher-mestica-encaracolada-com-um-sorriso-e-um-sueter-listrado_273609-8839.jpg?semt=ais_hybrid&w=740&q=80'
  },
  {
    id: 2,
    name: 'Carlos Eduardo Santos',
    text: 'Fiz um tratamento para acne e o resultado foi incrível! Em apenas 3 meses minha pele mudou completamente. Equipe muito profissional e estrutura moderna.',
    rating: 5,
    date: '2023',
    image: 'https://img.freepik.com/fotos-gratis/retrato-de-homem-branco-isolado_53876-40306.jpg?semt=ais_hybrid&w=740&q=80'
  },
  {
    id: 3,
    name: 'Mariana Costa Oliveira',
    text: 'A Clínica Dermalux é simplesmente fantástica! Atendimento personalizado e resultados visíveis desde as primeiras sessões. Super recomendo!',
    rating: 5,
    date: '2023',
    image: 'https://img.freepik.com/fotos-gratis/close-up-de-uma-simpatica-e-bonita-mulher-afro-americana-de-oculos-transparentes-e-camiseta-marrom-sorrindo-com-um-sorriso-alegre-e-agradavel-estando-satisfeita-com-a-forma-como-as-coisas-estao-passando-por-cima-da-parede-cinza_176420-23315.jpg?t=st=1773426877~exp=1773430477~hmac=1dcda61b1a3253367015f656a6da3ebff76be51eb03a71663b07852857af2f02&w=1060'
  },
  {
    id: 4,
    name: 'Roberto Alves Mendes',
    text: 'Profissionais altamente capacitados e muito atenciosos. O cuidado com o paciente é impressionante. Estrutura de primeiro mundo e equipe maravilhosa.',
    rating: 5,
    date: '2023',
    image: 'https://img.freepik.com/fotos-gratis/jovem-homem-posando-isolado-contra-a-parede-em-branco-do-estudio_273609-12356.jpg?semt=ais_hybrid&w=740&q=80'
  },
  {
    id: 5,
    name: 'Fernanda Lima Souza',
    text: 'Dra. Ingrid Carolina é uma profissional incrível! Explica tudo detalhadamente e passa muita confiança. Fiz um tratamento para queda capilar e os resultados são surpreendentes.',
    rating: 5,
    date: '2024',
    image: 'https://img.freepik.com/fotos-gratis/jovem-sorridente-e-bonita-caucasiana-isolada-na-parede-roxa-com-espaco-de-copia_141793-112372.jpg?semt=ais_hybrid&w=740&q=80'
  },
  {
    id: 6,
    name: 'Ricardo Gomes',
    text: 'Estrutura moderna, atendimento de primeira e profissionais extremamente capacitados. Fiz um tratamento a laser para remoção de manchas e o resultado superou todas as expectativas.',
    rating: 5,
    date: '2023',
    image: 'https://img.freepik.com/fotos-gratis/homem-retrato-rindo_23-2148859448.jpg?semt=ais_hybrid&w=740&q=80'
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">DEPOIMENTOS</span>
          <h2 className="section-title">O que nossos pacientes dizem</h2>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-image-wrapper">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="testimonial-image"
                  loading="lazy"
                />
              </div>
              <div className="testimonial-content">
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="star">★</span>
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-footer">
                  <h3>{testimonial.name}</h3>
                  <span className="testimonial-date">{testimonial.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonials-cta">
          <a href="/depoimentos" className="btn-testimonials">
            Ver todos os depoimentos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;