import { Title, Paragr } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';

const Filter = () => {
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    dispatch(setFilter(target.value));
  };
  return (
    <div>
      <Title>Contacts</Title>
      <Box
        sx={{
          width: '800px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Paragr>Find contact by name</Paragr>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          type="text"
          name="userName"
          required
          minLength={2}
          sx={{
            width: '300px',
          }}
          value={filter}
          onChange={handleChange}
        ></TextField>
      </Box>
    </div>
  );
};
export default Filter;
