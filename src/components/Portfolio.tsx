// components/Portfolio.tsx

import React from 'react';

type ProjectProps = {
  title: string;
  description: string;
  // Agrega más propiedades según sea necesario
};

const Project: React.FC<ProjectProps> = ({ title, description }) => (
  <div className="project">
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const Portfolio: React.FC = () => {
  const projects = [
    { title: 'Proyecto 1', description: 'Descripción del Proyecto 1' },
    // Agrega más proyectos aquí
  ];

  return (
    <section id="portfolio">
      <h2>Portafolio</h2>
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </section>
  );
};

export default Portfolio;
