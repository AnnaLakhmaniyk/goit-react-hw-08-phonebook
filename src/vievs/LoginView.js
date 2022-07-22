import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetError } from 'redux/auth/auh-actions';
import { useNavigate } from 'react-router-dom';
import { logIn } from 'redux/auth/auth-operations';
import { getError } from 'redux/auth/auth-selectors';
import { toast } from 'react-toastify';

import s from './Vievs.module.css';

export default function LoginView() {
  const dispatch = useDispatch();
  const erorSel = useSelector(getError);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (erorSel) {
      toast.error(`user not found`);
      navigate('/register');
      dispatch(resetError());
    }
  });

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div className={s.wrap}>
      <h1>Authorization</h1>

      <form onSubmit={handleSubmit} autoComplete="off" className={s.form}>
        <label className={s.label}>
          Email
          <input
            className={s.input}
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
        </label>

        <label className={s.label}>
          Password
          <input
            className={s.input}
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit" className={s.button}>
          Log in
        </button>
      </form>
    </div>
  );
}
