// src/sections/Contato.jsx
import React, { useState } from 'react';

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    empresa: '',
    mensagem: ''
  });

  const [formStatus, setFormStatus] = useState({
    enviado: false,
    carregando: false,
    erro: null
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ enviado: false, carregando: true, erro: null });

    // Simulação de envio (substitua por sua lógica real)
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setFormStatus({ enviado: true, carregando: false, erro: null });
      setFormData({ nome: '', email: '', telefone: '', empresa: '', mensagem: '' });
      
      setTimeout(() => {
        setFormStatus(prev => ({ ...prev, enviado: false }));
      }, 5000);
    } catch (error) {
      setFormStatus({ enviado: false, carregando: false, erro: 'Erro ao enviar. Tente novamente.' });
    }
  };

  const infoContato = [
    { icone: "📍", titulo: "Endereço", conteudo: "Av. Tecnologia, 1000 - São Paulo, SP", detalhe: "CEP: 01234-567" },
    { icone: "📞", titulo: "Telefone", conteudo: "(11) 99999-9999", detalhe: "WhatsApp disponível" },
    { icone: "✉️", titulo: "Email", conteudo: "contato@dashboardservicos.com", detalhe: "Resposta em até 24h" },
    { icone: "🕒", titulo: "Horário", conteudo: "Segunda a Sexta: 9h às 18h", detalhe: "Atendimento personalizado" }
  ];

  return (
    <section id="contato" className="contato">
      <h2>Entre em Contato</h2>
      <p className="subtitulo">Estamos prontos para atender suas necessidades e tirar suas dúvidas</p>
      
      <div className="contato-container">
        <div className="contato-info">
          {infoContato.map((item, index) => (
            <div key={index} className="info-item">
              <span className="info-icone">{item.icone}</span>
              <div className="info-conteudo">
                <h3>{item.titulo}</h3>
                <p className="info-principal">{item.conteudo}</p>
                <p className="info-detalhe">{item.detalhe}</p>
              </div>
            </div>
          ))}

          <div className="info-social">
            <h4>Siga-nos nas redes sociais</h4>
            <div className="social-icons">
              <a href="#" className="social-icon">📘</a>
              <a href="#" className="social-icon">🐦</a>
              <a href="#" className="social-icon">📷</a>
              <a href="#" className="social-icon">🔗</a>
            </div>
          </div>
        </div>
        
        <form className="contato-form" onSubmit={handleSubmit}>
          <h3>Envie uma mensagem</h3>
          
          {formStatus.enviado && (
            <div className="form-sucesso">
              ✓ Mensagem enviada com sucesso! Entraremos em contato em breve.
            </div>
          )}
          
          {formStatus.erro && (
            <div className="form-erro">
              ✗ {formStatus.erro}
            </div>
          )}
          
          <div className="form-row">
            <div className="form-group">
              <input
                type="text"
                name="nome"
                placeholder="Seu nome completo *"
                value={formData.nome}
                onChange={handleChange}
                required
                disabled={formStatus.carregando}
              />
            </div>
            
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Seu email *"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={formStatus.carregando}
              />
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <input
                type="tel"
                name="telefone"
                placeholder="Seu telefone"
                value={formData.telefone}
                onChange={handleChange}
                disabled={formStatus.carregando}
              />
            </div>
            
            <div className="form-group">
              <input
                type="text"
                name="empresa"
                placeholder="Nome da empresa"
                value={formData.empresa}
                onChange={handleChange}
                disabled={formStatus.carregando}
              />
            </div>
          </div>
          
          <div className="form-group">
            <textarea
              name="mensagem"
              placeholder="Sua mensagem *"
              rows="5"
              value={formData.mensagem}
              onChange={handleChange}
              required
              disabled={formStatus.carregando}
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            className="btn-enviar"
            disabled={formStatus.carregando}
          >
            {formStatus.carregando ? 'Enviando...' : 'Enviar Mensagem'}
            {!formStatus.carregando && <span className="btn-arrow">→</span>}
          </button>
          
          <p className="form-nota">* Campos obrigatórios</p>
        </form>
      </div>
    </section>
  );
};

export default Contato;