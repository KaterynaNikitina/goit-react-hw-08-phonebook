import { useDispatch } from 'react-redux';
import { deleteContactThunk } from 'redux/contactsOperations';
import PropTypes from 'prop-types';
import { Item, ItemBtn } from './ContactItem.styled';

const ContactItem = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = () => {
    dispatch(deleteContactThunk(id));
  }
  return (
    <Item>
      {name}: {number}
      <ItemBtn
        onClick={() => {handleDeleteContact(id)}}
      >
        Delete
      </ItemBtn>
    </Item>
  );
};
export default ContactItem;

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
})
}
