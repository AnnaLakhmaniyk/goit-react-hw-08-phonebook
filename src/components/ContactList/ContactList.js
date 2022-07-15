import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts-actions';
import { getFilteredContacts } from 'redux/contacts/contacts-selectors';
import s from './ContactList.module.css';

function ContactList() {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  const onDeleteContact = id => {
    return dispatch(deleteContact(id));
  };
  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.item}>
          <p className={s.text}>
            {name}:{number}
          </p>
          <button
            type="button"
            className={s.button}
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
