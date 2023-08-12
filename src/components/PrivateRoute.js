import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/auth/authSelectors';

export const PrivateRoute = ({ children, redirectTo = '/' }) => {
  const authentificated = useSelector(getIsLoggedIn);

  return authentificated ? children : <Navigate to={redirectTo} />;
};
