import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as authOperations from '../../redux/auth/authOperations';
import css from './LogInForm.module.css';

export default function LogInForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div className={css.loginBox}>
      <h1>Log In</h1>
      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        className={css.loginForm}
      >
        <label className={css.loginLabel}>
          Email
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <label className={css.loginLabel}>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
