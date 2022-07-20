import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContact, deleteContact } from 'redux/contacts/contacts-operation';
// import { getVisibleContact } from 'redux/contacts/contacts-selectors';
import { FaTrashAlt } from 'react-icons/fa';
import s from './ContactList.module.css';

function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contact.items);
  // console.log(contacts);
  const onDeleteTodo = id => dispatch(deleteContact(id));

  useEffect(() => {
    dispatch(getContact());
  }, [dispatch]);

  return (
    <>
      {contacts ? (
        <ul className={s.list}>
          {contacts.map(({ id, name, number }) => (
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
