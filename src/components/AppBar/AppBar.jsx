import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Outlet } from 'react-router-dom';

export const AppBar = ({ children }) => {
  return (
    <>
      <div>
        <Navigation />
        <AuthNav />
        <UserMenu />
      </div>
      <Outlet />
    </>
  );
};
