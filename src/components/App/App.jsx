import css from './App.module.css';
import { Section } from 'components/Section/Section';
import FormPhonebook from 'components/FormPhonebook/FormPhonebook';
import Contacts from 'components/Contacts/Contacts';
import { Filter } from 'components/Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { selectContacts, selectError } from 'redux/selectors';

const App = () => {
  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <Section>
        <FormPhonebook></FormPhonebook>
      </Section>
      {error !== 'null' ? (
        <Section title="Contacts">
          <Filter />
          {contacts.length > 0 ? (
            <Contacts />
          ) : (
            <p>Your phonebook is empty. Please add contact.</p>
          )}
        </Section>
      ) : (
        <p>Oooops... ERROR</p>
      )}
    </div>
  );
};

export default App;
