// src/components/Header.jsx
import React, { useState, useEffect } from 'react';

const Header = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = document.querySelector('header').offsetHeight;
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // Mudar estilo do header quando rolar
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Detectar seção ativa
      const sections = ['home', 'servicos', 'contato'];
      const headerHeight = document.querySelector('header').offsetHeight;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= headerHeight + 100 && rect.bottom >= headerHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <div className="logo" onClick={() => scrollToSection('home')}>
        Dashboard<span>Serviços</span>
      </div>
      <nav>
        <ul>
          <li>
            <a 
              href="#home" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }}
              className={activeSection === 'home' ? 'active' : ''}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#servicos" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('servicos');
              }}
              className={activeSection === 'servicos' ? 'active' : ''}
            >
              Serviços
            </a>
          </li>
          <li>
            <a 
              href="#contato" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contato');
              }}
              className={activeSection === 'contato' ? 'active' : ''}
            >
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;