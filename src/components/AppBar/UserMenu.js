import { useDispatch, useSelector } from 'react-redux';
import { getUsername } from 'redux/auth/auth-selectors';
import { logOut } from 'redux/auth/auth-operations';
import s from './AppBar.module.css';

function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUsername);

  return (
    <div className={s.user}>
      <span className={s.span}>Wellcome,{name}</span>
      <button
        type="button"
        onClick={() => dispatch(logOut())}
        className={s.button}
      >
        exit
      </button>
    </div>
  );
}
export default UserMenu;
