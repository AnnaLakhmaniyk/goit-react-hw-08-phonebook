import React from 'react';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import ContactFilter from './ContactFilter/ContactFilter';

function App() {
  // const [contacts, setContacts] = useLocalStorage('contacts', contact);
  // const [filter, setFilter] = useState('');

  // const changeFilter = evt => {
  //   setFilter(evt.currentTarget.value);
  // };

  // const contactFormSubmit = contact => {
  //   contacts.forEach(arr => {
  //     if (arr.name.toLowerCase() === contact.name.toLowerCase()) {
  //       alert(`${contact.name} is already in contacts`);
  //       return;
  //     }
  //   });
  //   dispatch(addContact(contact));
  // };

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
