// components/Footer.tsx

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      <p>Contacto: tuemail@example.com</p>
      <div className="social-media-links">
        {/* Enlaces a redes sociales */}
        <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
      <p>&copy; {new Date().getFullYear()} Tu Nombre. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
