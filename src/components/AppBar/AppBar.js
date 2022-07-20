import { useSelector } from 'react-redux';
import AuthNav from './AuthNav';
import ContactsAdd from './ContactsAdd';
import UserMenu from './UserMenu';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';
import s from './AppBar.module.css';

export default function AppBar() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <header className={s.header}>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
      <ContactsAdd />
    </header>
  );
}
