import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as authOperations from '../../redux/auth/authOperations';
import css from './RegisterForm.module.css';
import { getIsLoggedIn } from 'redux/auth/authSelectors';
import { Navigate } from 'react-router-dom';

export default function RegisterForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isLoggedIn = useSelector(getIsLoggedIn);

  if (isLoggedIn) return <Navigate to="/contacts" />;

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className={css.registerBox}>
      <h1>Sign Up</h1>
      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        className={css.registerForm}
      >
        <label className={css.registerLabel}>
          Name
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>
        <label className={css.registerLabel}>
          Email
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <label className={css.registerLabel}>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
