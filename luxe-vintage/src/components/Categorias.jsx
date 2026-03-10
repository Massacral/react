import React from 'react';
import { motion } from 'framer-motion';

const categorias = [
  { nome: 'Bolsas', imagem: "https://images.tcdn.com.br/img/img_prod/90552/bolsa_chanel_vintage_maxi_jumbo_6985_1_20220223104845.jpg" },
  { nome: 'Relógios', imagem: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3' },
  { nome: 'Vestidos', imagem: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956' },
  { nome: 'Sapatos', imagem: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2' },
  { nome: 'Joias', imagem: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338' },
  { nome: 'Acessórios', imagem: 'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93' }
];

const Categorias = () => {
  return (
    <section className="categorias">
      <div className="container">
        <h2 className="section-title">CATEGORIAS</h2>
        <div className="categorias-grid">
          {categorias.map((categoria, index) => (
            <motion.div
              key={index}
              className="categoria-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <img src={categoria.imagem} alt={categoria.nome} />
              <div className="categoria-overlay">
                <h3>{categoria.nome}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categorias;