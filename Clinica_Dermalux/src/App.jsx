import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './style/global.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Institutional from './components/Institutional';
import Doctor from './components/Doctor';
import About from './components/About';
import Specialties from './components/Specialties';
import CentroCirurgico from './components/CentroCirurgico';
import Publicacoes from './components/Publicacoes';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DepoimentosPage from './pages/DepoimentosPage'; 
function HomePage() {
  return (
    <>
      <Hero />
      <Institutional />
      <Doctor />
      <About />
      <Specialties />
      <CentroCirurgico />
      <Publicacoes />
      <Testimonials />
      <Blog />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/depoimentos" element={<DepoimentosPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;