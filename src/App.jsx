import React, { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import './App.css';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (savedContacts) {
      setContacts(savedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  const updateContact = (id, updatedContact) => {
    setContacts(contacts.map(contact => contact.id === id ? updatedContact : contact));
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    < >
      <span className="big-circle"></span>
      <img src="../assets/shape.png" className="square" alt="" />

      <div className="form">
        <div className="contact-info">
        <input
          type="text"
          
          placeholder="Filtrer les contacts"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
          <ContactList

            contacts={filteredContacts}
            updateContact={updateContact}
            deleteContact={deleteContact}
          />
        </div>

        
          
      
          <ContactForm addContact={addContact} />

        </div>  
      
      
    </>
  );
};

export default App;
