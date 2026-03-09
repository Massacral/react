// src/sections/Servicos.jsx
import React from 'react';

const Servicos = () => {
  const servicos = [
    {
      titulo: "Consultoria Estratégica",
      descricao: "Transformamos desafios em oportunidades com análises profundas e estratégias personalizadas para seu negócio.",
      beneficios: [
        "Análise de mercado detalhada",
        "Planejamento estratégico",
        "Otimização de processos",
        "Metodologias ágeis"
      ],
      destaque: true,
      icone: "📊",
      cor: "#2563eb"
    },
    {
      titulo: "Desenvolvimento Web",
      descricao: "Criamos experiências digitais excepcionais com as mais modernas tecnologias do mercado.",
      beneficios: [
        "Sites responsivos",
        "Aplicações progressivas",
        "SEO otimizado",
        "Alta performance"
      ],
      destaque: false,
      icone: "💻",
      cor: "#7c3aed"
    },
    {
      titulo: "Automação Inteligente",
      descricao: "Automatize processos repetitivos e foque no que realmente importa para seu negócio crescer.",
      beneficios: [
        "Redução de custos",
        "Aumento de produtividade",
        "Integração de sistemas",
        "Business Intelligence"
      ],
      destaque: false,
      icone: "⚡",
      cor: "#06b6d4"
    }
  ];

  const handleSaibaMais = (titulo) => {
    alert(`Você clicou em ${titulo}! Em breve mais informações.`);
  };

  return (
    <section id="servicos" className="servicos">
      <h2>Nossos Serviços</h2>
      <p className="subtitulo">Soluções personalizadas para impulsionar seu negócio ao próximo nível</p>
      
      <div className="grid-servicos">
        {servicos.map((servico, index) => (
          <div 
            key={index} 
            className={`card-servico ${servico.destaque ? 'destaque' : ''}`}
            style={{ '--card-cor': servico.cor }}
          >
            {servico.destaque && (
              <span className="badge">
                <span className="badge-icon">⭐</span>
                Mais Popular
              </span>
            )}
            
            <div className="card-icone" style={{ background: `linear-gradient(135deg, ${servico.cor}20, ${servico.cor}40)` }}>
              <span style={{ color: servico.cor }}>{servico.icone}</span>
            </div>
            
            <h3>{servico.titulo}</h3>
            <p className="card-descricao">{servico.descricao}</p>
            
            <ul className="card-beneficios">
              {servico.beneficios.map((beneficio, idx) => (
                <li key={idx}>
                  <span className="check-icon">✓</span>
                  {beneficio}
                </li>
              ))}
            </ul>
            
            <button 
              className="btn-saiba-mais"
              onClick={() => handleSaibaMais(servico.titulo)}
            >
              Saiba Mais
              <span className="btn-arrow">→</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Servicos;