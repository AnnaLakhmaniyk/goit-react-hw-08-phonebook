import s from './ContactFilter.module.css';
import PropTypes from 'prop-types';

function ContactFilter({ onChange }) {
  return (
    <label className={s.label}>
      Find contacts by name
      <input type="text" className={s.input} onChange={onChange} />
    </label>
  );
}
ContactFilter.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default ContactFilter;
