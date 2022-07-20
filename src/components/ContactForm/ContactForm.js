import { useState } from 'react';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import { FaPhoneAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { createContact } from 'redux/contacts/contacts-operation';

// import { getContacts } from 'redux/contacts/contacts-selectors';

import s from './ContactForm.module.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contact.items);
  const keyEl = nanoid();

  const handleChange = evt => {
    const { name, value } = evt.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };
  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const contactEl = { name, number };
    if (contacts?.some(contact => contact.name === contactEl.name)) {
      toast.error(`${contactEl.name} is already in contacts`);
      reset();
      return;
    }

    dispatch(createContact(contactEl));

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
        value={number}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button type="submit" className={s.button}>
        <FaPhoneAlt size="15" fill="rgb(25, 22, 22)" /> Add contact
      </button>
    </form>
  );
};

export default ContactForm;
