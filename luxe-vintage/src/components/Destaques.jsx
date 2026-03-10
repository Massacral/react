import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const produtos = [
  {
    id: 1,
    nome: "Bolsa Chanel Vintage",
    preco: "R$ 8.500",
    imagem: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=500&auto=format",
    designer: "Chanel"
  },
  {
    id: 2,
    nome: "Relógio Rolex Datejust",
    preco: "R$ 32.000",
    imagem: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=500&auto=format",
    designer: "Rolex"
  },
  {
    id: 3,
    nome: "Vestido Dior Couture",
    preco: "R$ 12.900",
    imagem: "https://images.unsplash.com/photo-1550639525-c97d455acf70?w=500&auto=format",
    designer: "Dior"
  },
  {
    id: 4,
    nome: "Sapatos Louboutin",
    preco: "R$ 4.200",
    imagem: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&auto=format",
    designer: "Christian Louboutin"
  }
];

const Destaques = () => {
  const navigate = useNavigate();

  const handleVerDetalhes = (id) => {
    navigate(`/produto/${id}`);
  };

  return (
    <section className="destaques">
      <div className="container">
        <h2 className="section-title">DESTAQUES DA SEMANA</h2>
        <div className="produtos-grid">
          {produtos.map((produto, index) => (
            <motion.div 
              key={produto.id}
              className="produto-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="produto-imagem">
                <img src={produto.imagem} alt={produto.nome} />
                <div className="produto-overlay">
                  <button 
                    className="btn-view"
                    onClick={() => handleVerDetalhes(produto.id)}
                  >
                    Ver Detalhes
                  </button>
                </div>
              </div>
              <div className="produto-info">
                <h3>{produto.nome}</h3>
                <p className="designer">{produto.designer}</p>
                <p className="preco">{produto.preco}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destaques;