import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

import { getFilteredContacts } from '../redux/contacts/contacts-selectors';
import { fetchContacts } from 'redux/contacts/contacts-operations';

import {
  PhonebookContainer,
  PhonebookTitle,
  ContactsTitle,
} from './App.styled';

const App = () => {
  const filteredContacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <PhonebookContainer>
      <PhonebookTitle>Phonebook</PhonebookTitle>
      <ContactForm />

      <ContactsTitle>Contacts</ContactsTitle>
      <Filter />
      {filteredContacts.length > 0 && <ContactList />}
    </PhonebookContainer>
  );
};

export default App;
