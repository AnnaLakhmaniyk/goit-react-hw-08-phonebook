import PropTypes from 'prop-types';
import s from './ContactFilter.module.css';
function ContactFilter({ value, onChange }) {
  return (
    <label className={s.label}>
      Find contacts by name
      <input
        type="text"
        className={s.input}
        value={value}
        onChange={onChange}
      />
    </label>
  );
}
ContactFilter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default ContactFilter;
