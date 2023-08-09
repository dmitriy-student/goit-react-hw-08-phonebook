import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/auth/authSelectors';
import css from './Navigation.module.css';

export const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <nav className={css.nav}>
      <Link to={'/'} className={css.navItem}>
        Home
      </Link>
      {isLoggedIn && (
        <Link to={'/contacts'} className={css.navItem}>
          Phonebook
        </Link>
      )}
    </nav>
  );
};
