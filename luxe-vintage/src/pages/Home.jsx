import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import Destaques from '../components/Destaques';
import Categorias from '../components/Categorias';

const Home = () => {
  const navigate = useNavigate();

  const handleExplorarColecao = () => {
    navigate('/produtos');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="home-page"
    >
      <Hero />
      <Destaques />
      <Categorias />
      
      <section className="luxury-message">
        <div className="container">
          <h2>Elegância Atemporal</h2>
          <p>Cada peça do nosso acervo conta uma história única de sofisticação e estilo. Descubra o luxo em cada detalhe.</p>
          <button 
            className="btn-luxury"
            onClick={handleExplorarColecao}
          >
            Explorar Coleção
          </button>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;