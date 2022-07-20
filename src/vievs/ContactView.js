import React from 'react';
import { useSelector } from 'react-redux';
import { getLoading } from 'redux/contacts/contacts-selectors';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import ContactFilter from 'components/ContactFilter/ContactFilter';
import Loader from 'components/Loder/Loader';

function ContactView() {
  const isLoadingTodos = useSelector(getLoading);
  return (
    <div className="section">
      {isLoadingTodos && <Loader />}
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
      </div>
      <div>
        <h2>Contacts</h2>
        <ContactFilter />
        <ContactList />
      </div>
    </div>
  );
}

export default ContactView;
