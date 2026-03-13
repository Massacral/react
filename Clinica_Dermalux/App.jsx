import React from 'react';
import './style/global.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Institutional from './components/Institutional';
import Doctor from './components/Doctor';
import About from './components/About';
import Specialties from './components/Specialties';
import CentroCirurgico from './components/CentroCirurgico';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Footer from './pages/DepoimentosPage.jsx';
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Institutional />
        <Doctor />
        <About />
        <Specialties />
        <CentroCirurgico />
        <DepoimentosPage />
              <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;