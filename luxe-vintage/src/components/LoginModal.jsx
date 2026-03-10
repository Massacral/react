import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiMail, FiLock, FiUser } from 'react-icons/fi';
import { useAuth } from '../context/AuthContext';

const LoginModal = ({ isOpen, onClose }) => {
  const [modo, setModo] = useState('login'); // 'login' ou 'register'
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: ''
  });
  const [loading, setLoading] = useState(false);
  const { login, register } = useAuth();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    let result;
    if (modo === 'login') {
      result = await login(formData.email, formData.senha);
    } else {
      result = await register(formData.nome, formData.email, formData.senha);
    }

    setLoading(false);
    if (result.success) {
      onClose();
      setFormData({ nome: '', email: '', senha: '' });
    }
  };

  const toggleModo = () => {
    setModo(modo === 'login' ? 'register' : 'login');
    setFormData({ nome: '', email: '', senha: '' });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="modal-content"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={onClose}>
              <FiX />
            </button>

            <div className="modal-header">
              <h2>{modo === 'login' ? 'Bem-vindo de volta' : 'Criar conta'}</h2>
              <p>
                {modo === 'login' 
                  ? 'Faça login para acessar sua conta' 
                  : 'Registre-se para começar a comprar'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="modal-form">
              {modo === 'register' && (
                <div className="form-group">
                  <label htmlFor="nome">
                    <FiUser /> Nome
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    placeholder="Seu nome completo"
                  />
                </div>
              )}

              <div className="form-group">
                <label htmlFor="email">
                  <FiMail /> Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="seu@email.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="senha">
                  <FiLock /> Senha
                </label>
                <input
                  type="password"
                  id="senha"
                  name="senha"
                  value={formData.senha}
                  onChange={handleChange}
                  required
                  placeholder="••••••••"
                />
              </div>

              <button 
                type="submit" 
                className="btn-submit"
                disabled={loading}
              >
                {loading ? 'Carregando...' : (modo === 'login' ? 'Entrar' : 'Cadastrar')}
              </button>
            </form>

            <div className="modal-footer">
              <p>
                {modo === 'login' ? 'Não tem uma conta?' : 'Já tem uma conta?'}
                <button onClick={toggleModo} className="link-btn">
                  {modo === 'login' ? 'Cadastre-se' : 'Faça login'}
                </button>
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoginModal;