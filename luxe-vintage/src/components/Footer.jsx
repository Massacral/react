import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>LUXE VINTAGE</h3>
          <p>O requinte do passado com a elegância do presente</p>
        </div>
        <div className="footer-section">
          <h4>Links Rápidos</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/produtos">Coleção</a></li>
            <li><a href="/sobre">Sobre</a></li>
            <li><a href="/contato">Contato</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contato</h4>
          <p>contato@luxevintage.com</p>
          <p>+55 61 99999-9999</p>
          <p>Brasilia - DF</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Luxe Vintage - Brechó de Luxo. Todos os direitos reservados. Desenvolvido por Tiago Martins </p>
      </div>
    </footer>
  );
};

export default Footer;