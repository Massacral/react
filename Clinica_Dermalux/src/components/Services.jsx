import React from 'react';


const services = [
  {
    id: 1,
    icon: '🔬',
    title: 'Dermatologia Clínica',
    description: 'Consultas e acompanhamento para condições dermatológicas como acne, psoríase, dermatites e mais.'
  },
  {
    id: 2,
    icon: '✨',
    title: 'Dermatologia Estética',
    description: 'Procedimentos estéticos não invasivos como toxina botulínica, preenchimentos e bioestimuladores.'
  },
  {
    id: 3,
    icon: '🔍',
    title: 'Prevenção do Câncer de Pele',
    description: 'Exames de mapeamento corporal e dermatoscopia para diagnóstico precoce do câncer de pele.'
  },
  {
    id: 4,
    icon: '💫',
    title: 'Laserterapia',
    description: 'Tratamentos a laser para remoção de manchas, rejuvenescimento e depilação definitiva.'
  },
  {
    id: 5,
    icon: '🌿',
    title: 'Tratamentos Corporais',
    description: 'Procedimentos para flacidez, gordura localizada e estrias com tecnologia avançada.'
  },
  {
    id: 6,
    icon: '🧴',
    title: 'Dermatologia Pediátrica',
    description: 'Cuidados especializados para a pele dos pequenos, desde recém-nascidos a adolescentes.'
  }
];

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="container">
        <h2>Nossos Serviços</h2>
        <div className="services-grid">
          {services.map(service => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;