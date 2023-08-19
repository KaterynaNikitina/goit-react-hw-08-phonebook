import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactsList from 'components/ContactsList/ContactsList';
import Box from '@mui/material/Box';

const ContactsPage = () => {
  return (
    <Box
      sx={{
        maxWidth: '800px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: ' auto',
        border: '1px transparent #2a2a2a',
        borderRadius: '15px',
        marginTop: '24px',
        padding: '24px',
        boxShadow: `0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16)`,
        backgroundColor: '#f7f3f3',
      }}
    >
      <ContactForm />
      <Filter />
      <ContactsList />
    </Box>
  );
};

export default ContactsPage;
