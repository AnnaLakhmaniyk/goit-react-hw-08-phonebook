import React from 'react';
import Section from './Section/Section';
import ContactForm from './ContactForm/ContactForm';
class App extends React.Component {
  state = {
    contacts: [],
  };
  contactFormSubmit = contact => {
    console.log(contact);
    this.setState(({ contacts }) => ({ contacts: [...contacts, contact] }));
  };

  render() {
    return (
      <Section>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.contactFormSubmit} />
      </Section>
    );
  }
}
export default App;
