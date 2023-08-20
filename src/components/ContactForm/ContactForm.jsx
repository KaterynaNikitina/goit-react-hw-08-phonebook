import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewContactThunk } from 'redux/contactsOperations';
import { selectUserContacts } from 'redux/selectors';
import { Notify } from 'notiflix';
import { Button, TextField } from '@mui/material';
import Box from '@mui/material/Box';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectUserContacts);

  const handleSubmit = ev => {
    ev.preventDefault();
    const form = ev.currentTarget;
    const name = form.elements.contactName.value;
    const number = form.elements.contactNumber.value;

    const isExistingContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isExistingContact) {
      Notify.failure(`${name} is already in contacts list!`);
      return;
    }

    dispatch(
      addNewContactThunk({
        name,
        number,
      })
    );
    ev.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          width: '800px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1>Phonebook</h1>
        <TextField
          id="outlined-basic-1"
          label="Name"
          variant="outlined"
          type="text"
          name="contactName"
          required
          minLength={2}
          sx={{
            width: '400px',
            marginBottom: '20px',
          }}
        ></TextField>
        <TextField
          id="outlined-basic-1"
          label="Password"
          variant="outlined"
          type="text"
          name="contactNumber"
          required
          minLength={2}
          sx={{
            width: '400px',
            marginBottom: '20px',
          }}
        ></TextField>

        <Button variant="contained" type="submit" sx={{ width: '400px' }}>
          Add contact
        </Button>
      </Box>
    </form>
  );
};

export default ContactForm;
