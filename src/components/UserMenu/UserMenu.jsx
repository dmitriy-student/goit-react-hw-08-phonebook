import { useDispatch, useSelector } from 'react-redux';
import { getUsername } from 'redux/auth/authSelectors';
import * as authOperations from '../../redux/auth/authOperations';
import css from './UserMenu.module.css';
import avatar from 'images/avatar.jpg';

export const UserMenu = () => {
  const name = useSelector(getUsername);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(authOperations.logOut());
  };

  return (
    <div className={css.userMenu}>
      <img src={avatar} alt="Avatar" className={css.userImg} />
      <p>{name}</p>
      <button onClick={onLogout}>Выход</button>
    </div>
  );
};
