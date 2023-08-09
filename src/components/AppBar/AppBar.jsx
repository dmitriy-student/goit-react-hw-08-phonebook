import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/auth/authSelectors';
import css from './AppBar.module.css';

export const AppBar = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <>
      <div className={css.header}>
        <Navigation />
        {!isLoggedIn ? <AuthNav /> : <UserMenu />}
      </div>
      <Outlet />
    </>
  );
};
