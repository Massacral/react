import React from 'react';
import { motion } from 'framer-motion';

const Sobre = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="sobre-page"
    >
      <div className="page-header">
        <h1>SOBRE NÓS</h1>
      </div>
      <div className="container">
        <div className="sobre-content">
          <div className="sobre-texto">
            <h2>LUXE VINTAGE</h2>
            <p>Fundada em 2020, a Luxe Vintage nasceu da paixão por peças únicas e atemporais. Especializados em brechó de luxo, selecionamos cuidadosamente cada item do nosso acervo, garantindo autenticidade e qualidade excepcionais.</p>
            <p>Nossa missão é conectar pessoas a peças com história, oferecendo uma experiência de compra sofisticada e sustentável. Cada produto em nosso catálogo passa por uma rigorosa curadoria, assegurando que apenas o melhor da moda vintage chegue até você.</p>
            <p>Acreditamos que a verdadeira elegância transcende o tempo. Por isso, buscamos peças de grifes renomadas como Chanel, Hermès, Louis Vuitton, Rolex e muitas outras, todas em excelente estado de conservação.</p>
          </div>
          <div className="sobre-stats">
            <div className="stat-item">
              <h3>200+</h3>
              <p>Peças Vendidas</p>
            </div>
            <div className="stat-item">
              <h3>50+</h3>
              <p>Griffes</p>
            </div>
            <div className="stat-item">
              <h3>100%</h3>
              <p>Autêntico</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Sobre;