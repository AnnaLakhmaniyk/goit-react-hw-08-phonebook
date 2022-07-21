import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLoading } from 'redux/contacts/contacts-selectors';
import { getContact } from 'redux/contacts/contacts-operation';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import ContactFilter from 'components/ContactFilter/ContactFilter';
import Loader from 'components/Loder/Loader';

function ContactView() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContact());
  }, [dispatch]);

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
