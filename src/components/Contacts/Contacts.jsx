import { useDispatch, useSelector } from 'react-redux';
import css from './Contacts.module.css';
import { selectFiltredContacts, selectIsLoading } from 'redux/selectors';
import { removeContact } from 'redux/operations';
import { Loader } from '../Loader/Loader';

export default function Contacts() {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const filtredNumbers = useSelector(selectFiltredContacts);

  return (
    <ul className={css.contacts_list}>
      {isLoading && <Loader />}
      {filtredNumbers.map(({ id, name, number }) => (
        <li className={css.contacts_item} key={id}>
          {name}: {number}
          <button
            className={css.contacts_btn}
            onClick={() => {
              dispatch(removeContact(id));
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
