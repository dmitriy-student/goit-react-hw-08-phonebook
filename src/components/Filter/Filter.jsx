import { useDispatch, useSelector } from 'react-redux';
import css from './Filter.module.css';
import { changeFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/contacts/contactsSelectors';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const change = e => {
    const { value } = e.currentTarget;
    dispatch(changeFilter(value));
  };

  return (
    <label className={css.filter_label}>
      Filter contacs by name
      <input
        className={css.filter_input}
        type="text"
        value={filter}
        onChange={change}
      />
    </label>
  );
};
