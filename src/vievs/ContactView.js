import React from 'react';
import { useGetContactQuery } from 'redux/contactsApi';
import { useState } from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import ContactFilter from 'components/ContactFilter/ContactFilter';
import Loader from 'components/Loder/Loader';

function ContactView() {
  const [filter, setFilter] = useState('');
  const { data: contacts, isFetching } = useGetContactQuery();
  const changeFilter = evt => {
    setFilter(evt.currentTarget.value);
  };
  const filteredContacts = () => {
    if (!contacts) {
      return;
    }
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <div className="section">
      {isFetching && <Loader />}
      <div>
        <h1>Phonebook</h1>
        <ContactForm contacts={contacts} />
      </div>
      <div>
        <h2>Contacts</h2>
        <ContactFilter onChange={changeFilter} />
        {contacts && <ContactList contacts={filteredContacts()} />}
      </div>
    </div>
  );
}

export default ContactView;
