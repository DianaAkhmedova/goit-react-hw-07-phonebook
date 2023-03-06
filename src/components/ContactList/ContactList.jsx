import { useSelector } from 'react-redux';

import { getFilteredContacts } from 'redux/contacts/contacts-selectors';

import ContactListItem from './ContactListItem/ContactListItem';

const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);

  const contactsItem = contacts.map(({ id, name, number }) => (
    <ContactListItem
      key={id}
      id={id}
      name={name}
      number={number}
      type="button"
    />
  ));
  return <ul>{contactsItem}</ul>;
};
export default ContactList;
