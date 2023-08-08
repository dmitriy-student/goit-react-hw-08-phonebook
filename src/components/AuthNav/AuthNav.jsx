import { Link } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <ul>
      <li>
        <Link to={'/register'}>Регистрация</Link>
      </li>
      <li>
        <Link to={'/login'}>Логин</Link>
      </li>
    </ul>
  );
};
