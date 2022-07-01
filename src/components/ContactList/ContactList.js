import PropTypes from 'prop-types';
import s from './ContactList.module.css';

function ContactList({ contactEl, onDeleteContact }) {
  return (
    <ul className={s.list}>
      {contactEl.map(({ id, name, number }) => (
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
ContactList.propTypes = {
  contactEl: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
export default ContactList;
