// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { authOperations } from '../redux/auth';
import s from './Vievs.module.css';

export default function LoginView() {
  //   const dispatch = useDispatch();
  //   const [email, setEmail] = useState('');
  //   const [password, setPassword] = useState('');

  //   const handleChange = ({ target: { name, value } }) => {
  //     switch (name) {
  //       case 'email':
  //         return setEmail(value);
  //       case 'password':
  //         return setPassword(value);
  //       default:
  //         return;
  //     }
  //   };

  //   const handleSubmit = e => {
  //     e.preventDefault();
  //     dispatch(authOperations.logIn({ email, password }));
  //     setEmail('');
  //     setPassword('');
  //   };

  return (
    <div className={s.wrap}>
      <h1>Authorization</h1>

      <form autoComplete="off" className={s.form}>
        <label className={s.label}>
          Email
          <input
            className={s.input}
            type="email"
            name="email"
            // value={email}
            // onChange={handleChange}
          />
        </label>

        <label className={s.label}>
          Password
          <input
            className={s.input}
            type="password"
            name="password"
            // value={password}
            // onChange={handleChange}
          />
        </label>

        <button type="submit" className={s.button}>
          Log in
        </button>
      </form>
    </div>
  );
}
