import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts-operation';
import { getContacts, getFilter } from 'redux/contacts/contacts-selectors';
import { FaTrashAlt } from 'react-icons/fa';
import s from './ContactList.module.css';

function ContactList({ contactsEl }) {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  // console.log(contacts);

  const filterContacts = () => {
    const normalizedString = filter?.toLowerCase();

    return filter
      ? contacts?.filter(contact =>
          contact.name.toLowerCase().includes(normalizedString)
        )
      : contacts;
  };

  const onDeleteTodo = id => dispatch(deleteContact(id));
  const contactOnFilter = filterContacts();

  return (
    <>
      {contactOnFilter ? (
        <ul className={s.list}>
          {contactOnFilter.map(({ id, name, number }) => (
            <li key={id} className={s.item}>
              <p className={s.text}>
                {name}:{number}
              </p>
              <button
                type="button"
                className={s.button}
                onClick={() => onDeleteTodo(id)}
              >
                Delete <FaTrashAlt size="15" fill="rgb(25, 22, 22)" />
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <h2>Add contact,please</h2>
      )}
    </>
  );
}

export default ContactList;
