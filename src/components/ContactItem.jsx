import React, { useState } from 'react';

const ContactItem = ({ contact, updateContact, deleteContact }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(contact.name);
  const [email, setEmail] = useState(contact.email);

  const handleUpdate = () => {
    updateContact(contact.id, { ...contact, name, email });
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleUpdate}>Enregistrer</button>
        </>
      ) : (
        <>
          <span>{contact.name} - {contact.email}</span>
          <button onClick={() => setIsEditing(true)}>Modifier</button>
        </>
      )}
      <button onClick={() => deleteContact(contact.id)}>Supprimer</button>
    </li>
  );
};

export default ContactItem;
