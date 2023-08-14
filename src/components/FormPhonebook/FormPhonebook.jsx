import { useState } from 'react';
import css from './FormPhonebook.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/contactsSelectors';
import { addContact } from 'redux/contacts/contactsOperations';

export default function FormPhonebook({ formSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleInput = e => {
    const { name, value } = e.currentTarget;
    if (name === 'name') {
      return setName(value);
    }
    if (name === 'number') {
      return setNumber(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return alert(`${name} is already in contacts.`);
    }
    dispatch(addContact({ name, number }));
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={css.form_container} onSubmit={handleSubmit}>
      <label className={css.form_label}>
        Name
        <input
          className={css.form_input}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я\s]+$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={handleInput}
          required
        />
      </label>
      <label className={css.form_label}>
        Number
        <input
          className={css.form_input}
          type="tel"
          name="number"
          value={number}
          pattern="\+?[0-9\s\-\(\)]+"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={handleInput}
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
}
