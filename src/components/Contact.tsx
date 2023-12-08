// components/Contact.tsx

"use client"; // Agrega esta línea al principio del archivo
import React, { useState, ChangeEvent, FormEvent } from 'react';

type FormData = {
  fullName: string;
  cityCountry: string;
  phoneNumber: string;
  email: string;
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    cityCountry: '',
    phoneNumber: '',
    email: ''
  });

  // Estado para manejar la respuesta y errores del envío
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      // Debes reemplazar 'URL_DEL_ENDPOINT' con la URL a la que desees enviar los datos del formulario
      const response = await fetch('URL_DEL_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const result = await response.json();
      setMessage('¡Formulario enviado con éxito! Espera nuestro contacto.');
      setFormData({ fullName: '', cityCountry: '', phoneNumber: '', email: '' }); // Limpiar formulario
    } catch (error) {
      setMessage('Ocurrió un error al enviar el formulario. Inténtalo de nuevo.');
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact">
      <h2>Contacto</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Nombre completo"
          required
        />
        <input
          type="text"
          name="cityCountry"
          value={formData.cityCountry}
          onChange={handleChange}
          placeholder="Ciudad y país"
          required
        />
        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="Número de WhatsApp"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Enviando...' : 'Enviar'}
        </button>
      </form>
    </section>
  );
};

export default Contact;
