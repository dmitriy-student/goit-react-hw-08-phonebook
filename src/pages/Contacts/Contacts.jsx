import Contacts from 'components/Contacts/Contacts';
import { Filter } from 'components/Filter/Filter';
import FormPhonebook from 'components/FormPhonebook/FormPhonebook';
import { Section } from 'components/Section/Section';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { selectContacts, selectError } from 'redux/contacts/contactsSelectors';
// import { getIsLoggedIn } from '../../redux/auth/authSelectors';

export const ContactsPage = () => {
  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);

  // const isLoggedIn = useSelector(getIsLoggedIn);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <h1>Phonebook</h1>
      <Section>
        <FormPhonebook />
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
    </>
  );
};
