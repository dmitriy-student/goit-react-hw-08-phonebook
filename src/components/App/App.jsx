import css from './App.module.css';
import { AppBar } from 'components/AppBar/AppBar';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from 'pages/Home/Home';
import { RegisterPage } from 'pages/Reguster/Register';
import { LogInPage } from 'pages/Login/Login';
import { ContactsPage } from 'pages/Contacts/Contacts';
import NotFoundPage from 'pages/NotFound/NotFound';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as authOperations from '../../redux/auth/authOperations';
import { PrivateRoute } from 'components/PrivateRoute';
import { getIsLoggedIn, getToken } from 'redux/auth/authSelectors';
// import { RestrictedRoute } from 'components/RestrictedRoute';

const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);
  const token = useSelector(getToken);

  useEffect(() => {
    if (!token || isLoggedIn) return;

    dispatch(authOperations.refreshUser());
  }, [dispatch, isLoggedIn, token]);

  return (
    <div className={css.container}>
      <header>
        <AppBar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login">
                <ContactsPage />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
