import { useDispatch } from 'react-redux';
import { deleteContactThunk } from 'redux/contactsOperations';
import PropTypes from 'prop-types';
import { Item } from './ContactItem.styled';
import { Button } from '@mui/material';

const ContactItem = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = () => {
    dispatch(deleteContactThunk(id));
  };
  return (
    <Item>
      {name}: {number}
      <Button
        variant="outlined"
        type="submit"
        sx={{ width: '60px', 
        boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06), 1px 2px 2px rgba(0, 0, 0, 0.16)', 
       
      }}
        onClick={() => {
          handleDeleteContact(id);
          
        }}
      >
        Delete
      </Button>
    </Item>
  );
};
export default ContactItem;

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
