import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/contacts/contacts-actions';
// import { getContacts } from 'redux/contacts/contacts-selectors';
import s from './ContactFilter.module.css';

function ContactFilter() {
  // const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const onChange = evt => {
    // console.log(evt.target.value);
    const input = evt.target.value;
    dispatch(changeFilter(input));
  };
  return (
    <label className={s.label}>
      Find contacts by name
      <input type="text" className={s.input} onChange={onChange} />
    </label>
  );
}

export default ContactFilter;
