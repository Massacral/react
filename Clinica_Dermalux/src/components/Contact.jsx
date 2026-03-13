import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: ''
  });

  const [isRobot, setIsRobot] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isRobot) {
      alert('Por favor, confirme que você não é um robô');
      return;
    }
    console.log('Form submitted:', formData);
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setFormData({ nome: '', email: '', telefone: '', mensagem: '' });
    setIsRobot(false);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="contact-header">
          <span className="contact-subtitle">FALE CONOSCO</span>
          <h2 className="contact-title">Envie sua mensagem</h2>
        </div>

        <div className="contact-grid">
          {/* Coluna da Esquerda - Informações de Contato */}
          <div className="contact-info-left">
            <h3>Entre em contato</h3>
            
            <div className="contact-info-item">
              <span className="info-icon">✉️</span>
              <a href="mailto:contato@clinicadermalux.com.br" className="info-text">
                contato@clinicadermalux.com.br
              </a>
            </div>

            <div className="contact-info-item">
              <span className="info-icon">📞</span>
              <div className="info-text">
                <p>(61) 2132-7303 | 99458-4504</p>
              </div>
            </div>

            <div className="contact-info-item address">
              <span className="info-icon">📍</span>
              <div className="info-text">
                <p>Av. Ceilândia Centro</p>
                <p>Dimension Office Park, Bloco Lagoa 1, Sala 162,</p>
                <p> - Ceilândia / DF</p>
              </div>
            </div>

            {/* Botão WhatsApp */}
            <a 
              href="https://wa.me/5561994584504" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="whatsapp-button"
            >
              <span className="whatsapp-icon">📱</span>
              Fale conosco no WhatsApp
            </a>
          </div>

          {/* Coluna da Direita - Formulário */}
          <div className="contact-form-right">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>NOME</label>
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  placeholder="Seu nome completo"
                />
              </div>

              <div className="form-row">
                <div className="form-group half">
                  <label>E-MAIL</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="seu@email.com"
                  />
                </div>

                <div className="form-group half">
                  <label>TELEFONE</label>
                  <input
                    type="tel"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    required
                    placeholder="(61) 99999-9999"
                  />
                </div>
              </div>

              <div className="form-group">
                <label>MENSAGEM</label>
                <textarea
                  name="mensagem"
                  rows="5"
                  value={formData.mensagem}
                  onChange={handleChange}
                  required
                  placeholder="Digite sua mensagem..."
                ></textarea>
              </div>

              {/* reCAPTCHA Simulado */}
              <div className="recaptcha-box">
                <div className="recaptcha-checkbox">
                  <input 
                    type="checkbox" 
                    id="robot-check" 
                    checked={isRobot}
                    onChange={(e) => setIsRobot(e.target.checked)}
                  />
                  <label htmlFor="robot-check">Não sou um robô</label>
                </div>
                <div className="recaptcha-info">
                  <span className="recaptcha-logo">reCAPTCHA</span>
                  <div className="recaptcha-links">
                    <a href="#privacidade">Privacidade</a>
                    <span> - </span>
                    <a href="#termos">Termos</a>
                  </div>
                </div>
              </div>

              <button type="submit" className="btn-submit">
                Enviar mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;