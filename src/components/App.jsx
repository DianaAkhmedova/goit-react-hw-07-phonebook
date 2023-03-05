import { useSelector, useDispatch } from 'react-redux';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

import {
  getAllContacts,
  getFilteredContacts,
} from '../redux/contacts/contacts-selectors';
import { getFilter } from 'redux/filter/filter-selectors';
import { addContact, deleteContact } from 'redux/contacts/contacts-slice';
import { setFilter } from 'redux/filter/filter-slice';

import {
  PhonebookContainer,
  PhonebookTitle,
  ContactsTitle,
} from './App.styled';

const App = () => {
  const contacts = useSelector(getAllContacts);
  const filteredContacts = useSelector(getFilteredContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const handleAddContact = contact => {
    const isContainsContact = contacts.some(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );

    if (isContainsContact)
      return alert(`${contact.name} is already in contacts`);

    dispatch(addContact(contact));
  };

  const handleChangeFilter = ({ currentTarget: { value } }) =>
    dispatch(setFilter(value));

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <PhonebookContainer>
      <PhonebookTitle>Phonebook</PhonebookTitle>
      <ContactForm addContact={handleAddContact} />

      <ContactsTitle>Contacts</ContactsTitle>
      <Filter filterValue={filter} handleChangeFilter={handleChangeFilter} />
      {filteredContacts.length > 0 && (
        <ContactList
          contacts={filteredContacts}
          removeContact={handleDeleteContact}
        />
      )}
    </PhonebookContainer>
  );
};

export default App;
