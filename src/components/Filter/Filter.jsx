import { Label, Input } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';

const Filter = () => {
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    dispatch(setFilter(target.value));
  };
  return (
    <Label>
      Find contact by name
      <Input
        type="text"
        value={filter}
        placeholder="enter name"
        onChange={handleChange}
      ></Input>
    </Label>
  );
};
export default Filter;
