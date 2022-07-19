import AuthNav from './AuthNav';
import ContactsAdd from './ContactsAdd';
import s from './AppBar.module.css';

export default function AppBar() {
  return (
    <header className={s.header}>
      <AuthNav />
      <ContactsAdd />
    </header>
  );
}
