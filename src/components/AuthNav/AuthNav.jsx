import { Link } from 'react-router-dom';
import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <ul className={css.authList}>
      <li className={css.authItem}>
        <Link to={'/register'}>Register</Link>
      </li>
      <li className={css.authItem}>
        <Link to={'/login'}>Log In</Link>
      </li>
    </ul>
  );
};
