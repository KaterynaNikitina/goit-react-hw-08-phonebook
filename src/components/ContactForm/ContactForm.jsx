import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewContactThunk } from 'redux/contactsOperations';
import { selectUserContacts } from 'redux/selectors';
import { Notify } from 'notiflix';

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
      <label>
        <p>Name:</p>
        <input name="contactName" type="text" required></input>
      </label>
      <br />
      <label>
        <p>Number:</p>
        <input name="contactNumber" type="text" required></input>
      </label>
      <br />
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;
