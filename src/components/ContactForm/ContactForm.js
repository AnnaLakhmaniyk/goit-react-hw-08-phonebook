import { useState } from 'react';
import { useCreateContactMutation } from 'redux/contactsApi';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import { FaPhoneAlt } from 'react-icons/fa';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';

const ContactForm = ({ contacts }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [createContact, { isLoading }] = useCreateContactMutation();
  const keyEl = nanoid();

  const handleChange = evt => {
    const { name, value } = evt.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setPhone(value);
        break;
      default:
        break;
    }
  };
  const reset = () => {
    setName('');
    setPhone('');
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const contactEl = { name, phone };
    if (contacts.some(contact => contact.name === contactEl.name)) {
      toast.error(`${contactEl.name} is already in contacts`);
      reset();
      return;
    }
    createContact(contactEl);

    reset();
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <label htmlFor={keyEl} className={s.label}>
        Name
      </label>
      <input
        className={s.input}
        onChange={handleChange}
        id={keyEl}
        type="text"
        name="name"
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label htmlFor={keyEl} className={s.label}>
        Number
      </label>
      <input
        className={s.input}
        onChange={handleChange}
        id={keyEl}
        type="tel"
        name="number"
        value={phone}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button type="submit" className={s.button} disabled={isLoading}>
        <FaPhoneAlt size="15" fill="rgb(25, 22, 22)" /> Add contact
      </button>
    </form>
  );
};
ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
};
export default ContactForm;
