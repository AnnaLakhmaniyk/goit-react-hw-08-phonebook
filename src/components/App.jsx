import React from 'react';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import ContactFilter from './ContactFilter/ContactFilter';

function App() {
  return (
    <div className="section">
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <ContactFilter />
      <ContactList />
    </div>
  );
}

export default App;
