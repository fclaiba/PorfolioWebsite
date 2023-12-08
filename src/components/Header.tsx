// components/Header.tsx

import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <Link href="#portfolio">Portafolio</Link>
        <Link href="#about">Acerca de</Link>
        <Link href="#testimonials">Testimonios</Link>
        <Link href="#contact">Contacto</Link>
      </nav>
    </header>
  );
};

export default Header;
