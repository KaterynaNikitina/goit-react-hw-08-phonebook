import ContactItem  from 'components/ContactItem/ContactItem';
import { useDispatch, useSelector } from 'react-redux';
import { List } from './ContactsList.styled';
import { useEffect } from 'react';
import { getAllContactsThunk } from 'redux/contactsOperations';
import Loader from 'components/Loader/Loader';

import {
  selectAuthentificated,
  selectUserContacts,
  selectContactsLoading,
  selectContactError,
  selectFilter,
  // selectFilteredContacts,
} from 'redux/selectors';
// import { Notify } from 'notiflix';

const ContactsList = () => {
  const authentificated = useSelector(selectAuthentificated);
  const contacts = useSelector(selectUserContacts);
  const isLoading = useSelector(selectContactsLoading);
  const error = useSelector(selectContactError);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch(selectFilter);

  useEffect(() => {
    if (!authentificated) return;

    dispatch(getAllContactsThunk());
  }, [authentificated, dispatch]);

  const visibleContacts = Array.isArray(contacts) && contacts.length > 0;

  const formattedFilter = filter.toLowerCase();

  const filteredContacts = contacts?.length > 0
  ? (contacts.filter(contact => contact.name.toLowerCase().includes(formattedFilter)))
  : [];

  return (

    <div>
      {isLoading && <Loader />}
      {error && <p>Ooops, something went wrong...</p>}
      <List>
       {!visibleContacts
        ? <p>Your Phonebook is empty. Add new contacts</p>
        : filteredContacts.length === 0 
        ? (`There is no contct ${filter} in your Phonebook`)
        : filteredContacts.map(contact => {
          return <ContactItem key={contact.id} contact={contact}/>
          })
       }
      </List>
    </div>
  );
}

export default ContactsList;
