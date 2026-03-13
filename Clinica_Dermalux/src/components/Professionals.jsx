import React from 'react';

const professionals = [
  {
    id: 1,
    name: 'Dra. Sofia Mendes',
    specialty: 'Dermatologista Clínica',
    description: 'Especialista em dermatologia clínica e oncológica com mais de 12 anos de experiência.',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    name: 'Dr. Lucas Andrade',
    specialty: 'Dermatologista Estético',
    description: 'Referência em procedimentos estéticos avançados e harmonização facial.',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    name: 'Dra. Camila Santos',
    specialty: 'Dermatologista Pediátrica',
    description: 'Dedicada ao cuidado da pele infantil e doenças dermatológicas em crianças.',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
];

const Professionals = () => {
  return (
    <section className="professionals" id="professionals">
      <div className="container">
        <h2>Nossa Equipe</h2>
        <div className="professionals-grid">
          {professionals.map(prof => (
            <div key={prof.id} className="professional-card">
              <div className="professional-image">
                <img src={prof.image} alt={prof.name} />
              </div>
              <div className="professional-info">
                <h3>{prof.name}</h3>
                <p className="specialty">{prof.specialty}</p>
                <p className="description">{prof.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Professionals;