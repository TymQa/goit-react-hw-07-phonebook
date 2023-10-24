import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filterSlice.js/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const setFilterValue = ({ target: { name, value } }) => {
    if (name === 'filter') {
      dispatch(changeFilter(value));
    }
  };

  return (
    <>
      <span> Find contacts by name: </span>
      <input
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={setFilterValue}
      />
    </>
  );
};
export default Filter;