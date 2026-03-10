import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiCheckCircle, FiXCircle, FiInfo } from 'react-icons/fi';

const Termos = () => {
  const [termosAceitos, setTermosAceitos] = useState(false);
  const navigate = useNavigate();

  const handleAceitar = () => {
    if (termosAceitos) {
      // Salvar no localStorage que o usuário aceitou os termos
      localStorage.setItem('@LuxeVintage:termosAceitos', 'true');
      navigate('/carrinho');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="termos-page"
    >
      <div className="container">
        <Link to="/carrinho" className="voltar-link">
          <FiArrowLeft /> Voltar para o Carrinho
        </Link>

        <div className="termos-header">
          <h1>Termos e Condições de Compra</h1>
          <p>Por favor, leia atentamente os termos antes de finalizar sua compra</p>
        </div>

        <div className="termos-content">
          <section className="termos-section">
            <h2>1. Informações Gerais</h2>
            <p>
              A Luxe Vintage é um brechó de luxo especializado em peças exclusivas e de alta qualidade. 
              Todas as nossas peças passam por rigorosa curadoria e são 100% autênticas.
            </p>
          </section>

          <section className="termos-section">
            <h2>2. Autenticidade</h2>
            <p>
              Garantimos a autenticidade de todas as peças comercializadas em nossa plataforma. 
              Cada produto é verificado por especialistas e acompanha certificado de autenticidade.
            </p>
          </section>

          <section className="termos-section">
            <h2>3. Condição das Peças</h2>
            <p>
              Todas as peças são descritas com precisão quanto ao seu estado de conservação:
            </p>
            <ul>
              <li><strong>Excelente:</strong> Peça sem sinais de uso, como nova</li>
              <li><strong>Ótima:</strong> Peça com leves sinais de uso, mas impecável</li>
              <li><strong>Boa:</strong> Peça com sinais visíveis de uso, mas em perfeito estado</li>
            </ul>
          </section>

          <section className="termos-section">
            <h2>4. Formas de Pagamento</h2>
            <p>Aceitamos as seguintes formas de pagamento:</p>
            <ul>
              <li><strong>PIX:</strong> 5% de desconto, pagamento instantâneo</li>
              <li><strong>Cartão de Crédito:</strong> Parcelamento em até 10x sem juros</li>
            </ul>
          </section>

          <section className="termos-section">
            <h2>5. Política de Entrega</h2>
            <p>
              O frete é gratuito para todo o território nacional. O prazo de entrega varia de 
              3 a 15 dias úteis, dependendo da localização.
            </p>
          </section>

          <section className="termos-section">
            <h2>6. Política de Troca e Devolução</h2>
            <p>
              Você tem até 7 dias após o recebimento para solicitar troca ou devolução, 
              conforme o Código de Defesa do Consumidor. O produto deve estar em sua embalagem original.
            </p>
          </section>

          <section className="termos-section">
            <h2>7. Garantia</h2>
            <p>
              Todas as peças têm garantia de 90 dias contra defeitos de fabricação. 
              Danos causados por mau uso não estão cobertos.
            </p>
          </section>

          <section className="termos-section">
            <h2>8. Privacidade</h2>
            <p>
              Seus dados são tratados com total segurança e não serão compartilhados com 
              terceiros sem sua autorização.
            </p>
          </section>
        </div>

        <div className="termos-aceite">
          <label className="termos-checkbox-large">
            <input
              type="checkbox"
              checked={termosAceitos}
              onChange={(e) => setTermosAceitos(e.target.checked)}
            />
            <span>
              Li e aceito todos os <strong>termos e condições</strong> de compra
            </span>
          </label>

          <div className="termos-buttons">
            <button 
              onClick={() => navigate('/carrinho')}
              className="btn-voltar"
            >
              Voltar
            </button>
            <button 
              onClick={handleAceitar}
              disabled={!termosAceitos}
              className={`btn-aceitar ${!termosAceitos ? 'disabled' : ''}`}
            >
              Aceitar e Continuar
            </button>
          </div>
        </div>

        <div className="termos-ajuda">
          <FiInfo />
          <p>
            Em caso de dúvidas, entre em contato com nosso <Link to="/contato">atendimento</Link>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Termos;