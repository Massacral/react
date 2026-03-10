import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mensagem enviada com sucesso!');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="contato-page"
    >
      <div className="page-header">
        <h1>CONTATO</h1>
      </div>
      <div className="container">
        <div className="contato-grid">
          <div className="contato-info">
            <h2>Informações de Contato</h2>
            <div className="info-item">
              <FiMapPin />
              <div>
                <h3>Endereço</h3>
                <p>Brasilia, Ceilândia</p>
                <p>Distrito Federal - DF, 72275-104</p>
              </div>
            </div>
            <div className="info-item">
              <FiPhone />
              <div>
                <h3>Telefone</h3>
                <p>+55 61 99999-9999</p>
                <p>+55 61 3333-3333</p>
              </div>
            </div>
            <div className="info-item">
              <FiMail />
              <div>
                <h3>Email</h3>
                <p>contato@luxevintage.com</p>
                <p>vendas@luxevintage.com</p>
              </div>
            </div>
            <div className="info-item">
              <FiClock />
              <div>
                <h3>Horário de Funcionamento</h3>
                <p>Segunda a Sexta: 10h às 19h</p>
                <p>Sábado: 10h às 16h</p>
              </div>
            </div>
          </div>
          <div className="contato-form">
            <h2>Envie uma Mensagem</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Nome</label>
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Mensagem</label>
                <textarea
                  name="mensagem"
                  rows="5"
                  value={formData.mensagem}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn-luxury">Enviar Mensagem</button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contato;