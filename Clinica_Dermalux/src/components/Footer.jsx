import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h4>Clínica Dermalux</h4>
            <p>Excelência em dermatologia há mais de 15 anos</p>
            <p>Dra. Ingrid Carolina - CRM 12345/DF</p>
          </div>
          <div className="footer-col">
            <h4>Central de Atendimento</h4>
            <p>(61) 3051-4600</p>
            <p>(61) 3051-4601</p>
            <p>Seg a Sex: 8h às 18h</p>
          </div>
          <div className="footer-col">
            <h4>Endereço</h4>
            <p>Ceilândia, DF</p>
            <p>Brasilia - DF</p>
            <p>CEP: 72275-104</p>
          </div>
          <div className="footer-col">
            <h4>Redes Sociais</h4>
            <p><a href="#facebook">Facebook</a></p>
            <p><a href="#instagram">Instagram</a></p>
            <p><a href="#youtube">YouTube</a></p>
            <p><a href="#linkedin">LinkedIn</a></p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {currentYear} Clínica Dermalux. Todos os direitos reservados. Desenvolvido por Tiago Martins de Oliveira</p>
          <p>Dra. Ingrid Carolina - 7940/DF</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;