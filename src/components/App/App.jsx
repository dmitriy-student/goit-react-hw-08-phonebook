import css from './App.module.css';
import { AppBar } from 'components/AppBar/AppBar';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from 'pages/Home/Home';
import { RegisterPage } from 'pages/Reguster/Register';
import { LogInPage } from 'pages/Login/Login';
import { ContactsPage } from 'pages/Contacts/Contacts';
import NotFoundPage from 'pages/NotFound/NotFound';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as authOperations from '../../redux/auth/authOperations';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.refreshUser);
  }, [dispatch]);

  return (
    <div className={css.container}>
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route index element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
