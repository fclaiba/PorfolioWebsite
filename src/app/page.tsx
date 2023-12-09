import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Portfolio from '../components/Portfolio';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '../components/Footer';
import '../styles/page.css';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Tu Portafolio</title>
        <meta name="description" content="Portafolio personal de [Tu Nombre]" />
        {/* Otros elementos de Head como favicon, etc. */}
      </Head>
      
      <Header />
      <main>
        <Portfolio />
        <About />
        <Testimonials />

        {/* Uso de React.Suspense para el componente Contact */}
        <React.Suspense fallback={<div>Cargando...</div>}>
          <Contact />
        </React.Suspense>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
