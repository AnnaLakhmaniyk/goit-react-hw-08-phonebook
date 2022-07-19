import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './AppBar.module.css';
function ContactsAdd() {
  return (
    <nav>
      <NavLink
        to="/contacts"
        className={({ isActive }) => (isActive ? s.active : s.unactive)}
      >
        Contacts
      </NavLink>
    </nav>
  );
}

export default ContactsAdd;
