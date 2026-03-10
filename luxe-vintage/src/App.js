import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthContext';
import { CarrinhoProvider } from './context/CarrinhoContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Produtos from './pages/Produtos';
import ProdutoDetalhe from './pages/ProdutoDetalhe';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import Carrinho from './pages/Carrinho';
import GuiaCuidados from './pages/GuiaCuidados';
import Termos from './pages/Termos'; // <-- ADICIONADO
import LoginModal from './components/LoginModal';
import './styles/global.css';

function AppContent() {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Abrir modal se tiver ?login=true na URL
    const params = new URLSearchParams(location.search);
    if (params.get('login') === 'true') {
      setLoginModalOpen(true);
    }
  }, [location]);

  return (
    <div className="App">
      <Navbar onLoginClick={() => setLoginModalOpen(true)} />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/produto/:id" element={<ProdutoDetalhe />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="/guia-cuidados" element={<GuiaCuidados />} />
          <Route path="/termos" element={<Termos />} /> {/* <-- ADICIONADO */}
        </Routes>
      </AnimatePresence>
      <Footer />
      <LoginModal isOpen={loginModalOpen} onClose={() => setLoginModalOpen(false)} />
      <Toaster 
        position="top-right"
        toastOptions={{
          style: {
            background: '#333',
            color: '#fff',
          },
          success: {
            style: {
              background: '#d4af37',
              color: '#000',
            },
          },
        }}
      />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <CarrinhoProvider>
          <AppContent />
        </CarrinhoProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;