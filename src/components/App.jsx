import React from 'react';
import { useState } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import ContactFilter from './ContactFilter/ContactFilter';
import useLocalStorage from 'hooks/useLocalStorage';

const contact = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', contact);
  const [filter, setFilter] = useState('');

  const changeFilter = evt => {
    setFilter(evt.currentTarget.value);
  };
  const filteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const deleteContact = contactId => {
    return setContacts(state =>
      state.filter(contact => contact.id !== contactId)
    );
  };
  const contactFormSubmit = contact => {
    contacts.forEach(arr => {
      if (arr.name.toLowerCase() === contact.name.toLowerCase()) {
        alert(`${contact.name} is already in contacts`);
        return;
      }
    });
    setContacts(state => [contact, ...state]);
  };

  return (
    <div className="section">
      <h1>Phonebook</h1>
      <ContactForm onSubmit={contactFormSubmit} />
      <h2>Contacts</h2>
      <ContactFilter value={filter} onChange={changeFilter} />
      <ContactList
        contactEl={filteredContacts()}
        onDeleteContact={deleteContact}
      />
    </div>
  );
}

export default App;
