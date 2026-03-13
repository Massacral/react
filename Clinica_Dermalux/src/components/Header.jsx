import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Removido Link que não estava sendo usado

const Header = () => {
  const [activeLink, setActiveLink] = useState('HOME');
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: 'HOME', id: 'home', path: '/' },
    { name: 'SOBRE', id: 'about', path: '/' },
    { name: 'ESPECIALIDADE', id: 'specialties', path: '/' },
    { name: 'CENTRO CIRURGICO', id: 'centro-cirurgico', path: '/' },
    { name: 'PUBLICACOES', id: 'publicacoes', path: '/' },
    { name: 'BLOG', id: 'blog', path: '/' },
    { name: 'DEPOIMENTOS', id: 'depoimentos', path: '/depoimentos' },
    { name: 'FALE CONOSCO', id: 'contact', path: '/' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Atualizar activeLink baseado na rota atual
  useEffect(() => {
    if (location.pathname === '/depoimentos') {
      setActiveLink('DEPOIMENTOS');
    } else {
      setActiveLink('HOME');
    }
  }, [location.pathname]); // Dependência específica

  const scrollToSection = (sectionId, linkName) => {
    setActiveLink(linkName);
    
    // Se não estiver na home, navegue para home primeiro
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 120;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  // Efeito para scroll quando voltar para home com state
  useEffect(() => {
    if (location.pathname === '/' && location.state?.scrollTo) {
      setTimeout(() => {
        const sectionId = location.state.scrollTo;
        const element = document.getElementById(sectionId);
        if (element) {
          const offset = 120;
          const elementPosition = element.offsetTop - offset;
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          });
        }
        // Limpar o state
        navigate('/', { replace: true, state: {} });
      }, 100);
    }
  }, [location.pathname, location.state, navigate]); // Dependências adicionadas

  const handleNavClick = (item, e) => {
    e.preventDefault();
    
    if (item.path === '/depoimentos') {
      // Navegar para página de depoimentos
      navigate('/depoimentos');
    } else {
      // Scroll para seção na home
      scrollToSection(item.id, item.name);
    }
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    navigate('/');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <>
      <div className={`top-bar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="clinic-name">
          <a href="/" onClick={handleLogoClick} style={{ color: 'inherit', textDecoration: 'none' }}>
            Clínica <span>Dermalux</span>
          </a>
        </div>
        <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">FACEBOOK</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">INSTAGRAM</a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YOUTUBE</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
        </div>
      </div>

      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <nav className="nav-menu">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.path === '/depoimentos' ? '/depoimentos' : `/#${item.id}`}
                  className={`nav-link ${activeLink === item.name ? 'active' : ''}`}
                  onClick={(e) => handleNavClick(item, e)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <a 
        href="#exames" 
        className="exames-btn"
        onClick={(e) => {
          e.preventDefault();
          if (location.pathname !== '/') {
            navigate('/', { state: { scrollTo: 'exames' } });
          } else {
            scrollToSection('exames', 'EXAMES');
          }
        }}
      >
        EXAMES
      </a>
    </>
  );
};

export default Header;