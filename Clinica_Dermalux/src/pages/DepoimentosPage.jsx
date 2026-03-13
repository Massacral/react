import React from 'react';
import './DepoimentosPage.css';

const depoimentos = [
  {
    id: 1,
    nome: 'Ana Paula Silva',
    idade: 34,
    cidade: 'São Paulo, SP',
    tratamento: 'Tratamento para Melasma',
    depoimento: 'Excelente atendimento! A Dra. Sofia Mendes é muito atenciosa e os resultados do tratamento superaram minhas expectativas. Já havia tentado outros tratamentos sem sucesso, mas na Dermalux encontrei a solução definitiva para o melasma. Ambiente acolhedor e profissionais qualificados. Recomendo de olhos fechados!',
    rating: 5,
    data: 'Março 2024',
    imagem: 'https://randomuser.me/api/portraits/women/44.jpg',
    video: false
  },
  {
    id: 2,
    nome: 'Carlos Eduardo Santos',
    idade: 28,
    cidade: 'Rio de Janeiro, RJ',
    tratamento: 'Tratamento para Acne',
    depoimento: 'Fiz um tratamento para acne e o resultado foi incrível! Em apenas 3 meses minha pele mudou completamente. Equipe muito profissional e estrutura moderna. O Dr. Lucas foi super atencioso e me explicou todo o processo. Recomendo a todos que sofrem com acne!',
    rating: 5,
    data: 'Fevereiro 2024',
    imagem: 'https://randomuser.me/api/portraits/men/32.jpg',
    video: false
  },
  {
    id: 3,
    nome: 'Mariana Costa Oliveira',
    idade: 42,
    cidade: 'Brasília, DF',
    tratamento: 'Rejuvenescimento Facial',
    depoimento: 'A Clínica Dermalux é simplesmente fantástica! Fiz um procedimento de rejuvenescimento facial e o resultado ficou super natural, exatamente como eu queria. Atendimento personalizado e resultados visíveis desde as primeiras sessões. A Dra. Camila é uma profissional incrível!',
    rating: 5,
    data: 'Janeiro 2024',
    imagem: 'https://randomuser.me/api/portraits/women/68.jpg',
    video: false
  },
  {
    id: 4,
    nome: 'Roberto Alves Mendes',
    idade: 55,
    cidade: 'Belo Horizonte, MG',
    tratamento: 'Cirurgia Dermatológica',
    depoimento: 'Profissionais altamente capacitados e muito atenciosos. Passei por uma cirurgia dermatológica e fui muito bem assistido em todas as etapas. O cuidado com o paciente é impressionante. Estrutura de primeiro mundo e equipe maravilhosa. Nota 10!',
    rating: 5,
    data: 'Dezembro 2023',
    imagem: 'https://randomuser.me/api/portraits/men/75.jpg',
    video: false
  },
  {
    id: 5,
    nome: 'Fernanda Lima Souza',
    idade: 31,
    cidade: 'Curitiba, PR',
    tratamento: 'Tricologia',
    depoimento: 'Dra. Sofia é uma profissional incrível! Explica tudo detalhadamente e passa muita confiança. Fiz um tratamento para queda capilar e os resultados são surpreendentes. A clínica tem uma estrutura maravilhosa e todos os funcionários são muito educados.',
    rating: 5,
    data: 'Novembro 2023',
    imagem: 'https://randomuser.me/api/portraits/women/63.jpg',
    video: false
  },
  {
    id: 6,
    nome: 'Ricardo Gomes',
    idade: 47,
    cidade: 'Porto Alegre, RS',
    tratamento: 'Laserterapia',
    depoimento: 'Estrutura moderna, atendimento de primeira e profissionais extremamente capacitados. Fiz um tratamento a laser para remoção de manchas e o resultado superou todas as expectativas. Recomendo de olhos fechados!',
    rating: 5,
    data: 'Outubro 2023',
    imagem: 'https://randomuser.me/api/portraits/men/52.jpg',
    video: false
  },
  {
    id: 7,
    nome: 'Patrícia Oliveira',
    idade: 39,
    cidade: 'Salvador, BA',
    tratamento: 'Preenchimento Facial',
    depoimento: 'Fiz preenchimento facial com a Dra. Sofia e o resultado ficou maravilhoso! Super natural, ninguém percebe que fiz procedimento, só elogiam como estou bonita. Amei a experiência na Dermalux, com certeza voltarei para mais procedimentos.',
    rating: 5,
    data: 'Setembro 2023',
    imagem: 'https://randomuser.me/api/portraits/women/90.jpg',
    video: false
  },
  {
    id: 8,
    nome: 'João Paulo Ferreira',
    idade: 62,
    cidade: 'Fortaleza, CE',
    tratamento: 'Cirurgia Plástica',
    depoimento: 'Excelente profissionalismo e cuidado. Fiz uma cirurgia plástica e fui muito bem assistido. O Dr. Lucas é extremamente competente e sua equipe é maravilhosa. Recomendo a todos!',
    rating: 5,
    data: 'Agosto 2023',
    imagem: 'https://randomuser.me/api/portraits/men/62.jpg',
    video: false
  },
  {
    id: 9,
    nome: 'Juliana Mendes',
    idade: 29,
    cidade: 'Recife, PE',
    tratamento: 'Limpeza de Pele',
    depoimento: 'A melhor clínica de dermatologia que já fui! Fiz uma limpeza de pele profunda e minha pele ficou radiante. A equipe é super atenciosa e o ambiente é muito agradável. Super recomendo!',
    rating: 5,
    data: 'Julho 2023',
    imagem: 'https://randomuser.me/api/portraits/women/45.jpg',
    video: false
  }
];

// Depoimentos em vídeo
const videosDepoimentos = [
  {
    id: 101,
    nome: 'Carla Rodrigues',
    idade: 38,
    cidade: 'São Paulo, SP',
    tratamento: 'Tratamento para Melasma',
    depoimento: 'Compartilho minha experiência com o tratamento de melasma na Clínica Dermalux. Resultados incríveis!',
    rating: 5,
    data: 'Abril 2024',
    imagem: 'https://randomuser.me/api/portraits/women/56.jpg',
    video: true,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  }
];

const DepoimentosPage = () => {
  // Calcular estatísticas
  const totalDepoimentos = depoimentos.length + videosDepoimentos.length;
  const mediaRating = (depoimentos.reduce((acc, d) => acc + d.rating, 0) / depoimentos.length).toFixed(1);

  return (
    <div className="depoimentos-page">
      {/* Header da página */}
      <section className="depoimentos-header">
        <div className="container">
          <h1>Depoimentos de Pacientes</h1>
          <p className="header-subtitle">Veja o que nossos pacientes falam sobre a Clínica Dermalux</p>
          
          <div className="estatisticas">
            <div className="estatistica-item">
              <span className="estatistica-numero">{totalDepoimentos}+</span>
              <span className="estatistica-label">DEPOIMENTOS</span>
            </div>
            <div className="estatistica-item">
              <span className="estatistica-numero">{mediaRating}</span>
              <span className="estatistica-label">AVALIAÇÃO MÉDIA</span>
            </div>
            <div className="estatistica-item">
              <span className="estatistica-numero">100%</span>
              <span className="estatistica-label">RECOMENDAM</span>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos em Vídeo */}
      {videosDepoimentos.length > 0 && (
        <section className="videos-depoimentos">
          <div className="container">
            <h2>Depoimentos em Vídeo</h2>
            <div className="videos-grid">
              {videosDepoimentos.map((video) => (
                <div key={video.id} className="video-card">
                  <div className="video-wrapper">
                    <iframe
                      src={video.videoUrl}
                      title={`Depoimento de ${video.nome}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="video-info">
                    <h3>{video.nome}</h3>
                    <p>{video.idade} anos • {video.cidade}</p>
                    <p className="tratamento">{video.tratamento}</p>
                    <div className="rating">
                      {[...Array(video.rating)].map((_, i) => (
                        <span key={i} className="star">★</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Lista de Depoimentos */}
      <section className="todos-depoimentos">
        <div className="container">
          <h2>Depoimentos de Pacientes</h2>
          
          <div className="filtros">
            <button className="filtro-btn active">Todos</button>
            <button className="filtro-btn">Mais Recentes</button>
            <button className="filtro-btn">Melhor Avaliados</button>
            <select className="filtro-select">
              <option>Filtrar por tratamento</option>
              <option>Dermatologia Clínica</option>
              <option>Dermatologia Estética</option>
              <option>Tricologia</option>
              <option>Cirurgia</option>
            </select>
          </div>

          <div className="depoimentos-lista">
            {depoimentos.map((dep) => (
              <div key={dep.id} className="depoimento-item">
                <div className="depoimento-imagem">
                  <img src={dep.imagem} alt={dep.nome} />
                </div>
                <div className="depoimento-conteudo">
                  <div className="depoimento-cabecalho">
                    <h3>{dep.nome}</h3>
                    <span className="depoimento-data">{dep.data}</span>
                  </div>
                  <p className="depoimento-info">{dep.idade} anos • {dep.cidade}</p>
                  <p className="depoimento-tratamento">Tratamento: <strong>{dep.tratamento}</strong></p>
                  <div className="depoimento-rating">
                    {[...Array(dep.rating)].map((_, i) => (
                      <span key={i} className="star">★</span>
                    ))}
                  </div>
                  <p className="depoimento-texto">"{dep.depoimento}"</p>
                </div>
              </div>
            ))}
          </div>

          {/* Paginação */}
          <div className="paginacao">
            <button className="page-btn" disabled>Anterior</button>
            <button className="page-btn active">1</button>
            <button className="page-btn">2</button>
            <button className="page-btn">3</button>
            <button className="page-btn">Próxima</button>
          </div>
        </div>
      </section>

      {/* CTA para deixar depoimento */}
      <section className="cta-depoimento">
        <div className="container">
          <h2>Compartilhe sua experiência</h2>
          <p>Se você já foi nosso paciente, deixe seu depoimento e ajude outras pessoas</p>
          <button className="btn-cta" onClick={() => alert('Formulário para deixar depoimento em breve!')}>
            Deixar Depoimento
          </button>
        </div>
      </section>
    </div>
  );
};

export default DepoimentosPage;