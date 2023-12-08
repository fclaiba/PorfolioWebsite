// components/Testimonials.tsx

import React from 'react';

// Tipo para los props del testimonio individual
type TestimonialProps = {
  name: string;
  text: string;
  position?: string;
};

// Componente para un testimonio individual
const Testimonial: React.FC<TestimonialProps> = ({ name, text, position }) => {
  return (
    <div className="testimonial">
      <p className="testimonial-text">{text}</p>
      <p className="testimonial-author">{name}</p>
      {position && <p className="testimonial-position">{position}</p>}
    </div>
  );
};

// Componente para la sección de testimonios
const Testimonials: React.FC = () => {
  const testimonialsData = [
    {
      name: "Juan Pérez",
      text: "Este servicio fue increíble, superó mis expectativas.",
      position: "CEO de Empresa X"
    },
    // ... más testimonios
  ];

  return (
    <section id="testimonials">
      <h2>Testimonios</h2>
      <div className="testimonials-container">
        {testimonialsData.map((testimonial, index) => (
          <Testimonial
            key={index}
            name={testimonial.name}
            text={testimonial.text}
            position={testimonial.position}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
