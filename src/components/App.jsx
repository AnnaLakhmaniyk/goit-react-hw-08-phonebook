import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import ContactFilter from './ContactFilter/ContactFilter';
class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  contactFormSubmit = contact => {
    // console.log(contact);
    if (
      this.state.contacts.some(
        ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      alert(`${contact.name} is already in contacts`);
      return;
    }
    this.setState(({ contacts }) => ({ contacts: [...contacts, contact] }));
  };

  changeFilter = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  filteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    return (
      <div className="section">
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.contactFormSubmit} />
        <h2>Contacts</h2>
        <ContactFilter value={this.state.filter} onChange={this.changeFilter} />
        <ContactList
          contactEl={this.filteredContacts()}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
export default App;
