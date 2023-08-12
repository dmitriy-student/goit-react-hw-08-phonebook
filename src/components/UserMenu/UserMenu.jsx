import { useDispatch, useSelector } from 'react-redux';
import { getIsLoggedIn, getUsername } from 'redux/auth/authSelectors';
import * as authOperations from '../../redux/auth/authOperations';
import css from './UserMenu.module.css';
import avatar from 'images/avatar.jpg';
import { Navigate } from 'react-router-dom';

export const UserMenu = () => {
  const name = useSelector(getUsername);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);

  const onLogout = () => {
    dispatch(authOperations.logOut());
    if (!isLoggedIn) return <Navigate to="/" />;
  };

  return (
    <div className={css.userMenu}>
      <img src={avatar} alt="Avatar" className={css.userImg} />
      <p>{name}</p>
      <button onClick={onLogout}>Выход</button>
    </div>
  );
};
