// components/Testimonials.tsx

import React from 'react';

type TestimonialProps = {
  author: string;
  text: string;
  // Agrega más propiedades según sea necesario
};

const Testimonial: React.FC<TestimonialProps> = ({ author, text }) => (
  <div className="testimonial">
    <blockquote>{text}</blockquote>
    <p>- {author}</p>
  </div>
);

const Testimonials: React.FC = () => {
  const testimonials = [
    { author: 'Cliente 1', text: 'Comentario del Cliente 1' },
    // Agrega más testimonios aquí
  ];

  return (
    <section id="testimonials">
      <h2>Testimonios</h2>
      {testimonials.map((testimonial, index) => (
        <Testimonial key={index} {...testimonial} />
      ))}
    </section>
  );
};

export default Testimonials;
