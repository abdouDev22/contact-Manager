import React, { useState } from 'react';

const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact({ id: Date.now(), name, email });
    setName('');
    setEmail('');
  };

  return (
    <div className="contact-form">
      <span className="circle one"></span>
          <span className="circle two"></span>
          <h1 className='title'>Gestion de Contacts</h1>
    <form onSubmit={handleSubmit}>
    <div className="input-container">
      <input
       className="input"
        type="text"
        placeholder="Nom"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      </div>
      <div className="input-container">
      <input
       className="input"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      </div>
      <button className="btn" type="submit">Ajouter</button>
    </form>
    </div>
  );
};

export default ContactForm;
