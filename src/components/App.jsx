import React from 'react';
import { useGetContactQuery } from 'redux/contactsApi';
import { useState } from 'react';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import ContactFilter from './ContactFilter/ContactFilter';
import Loader from './Loder/Loader';

function App() {
  const [filter, setFilter] = useState('');
  const { data: contacts, isFetching } = useGetContactQuery();
  const changeFilter = evt => {
    setFilter(evt.currentTarget.value);
  };
  const filteredContacts = () => {
    if (!contacts) {
      return;
    }
    console.log(contacts);
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <div className="section">
      {isFetching && <Loader />}
      <h1>Phonebook</h1>
      <ContactForm contacts={contacts} />
      <h2>Contacts</h2>
      <ContactFilter onChange={changeFilter} />
      {contacts && <ContactList contacts={filteredContacts()} />}
    </div>
  );
}

export default App;
