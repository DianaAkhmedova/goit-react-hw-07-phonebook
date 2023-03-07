import { useSelector } from 'react-redux';

import { getFilteredContacts } from 'redux/contacts/contacts-selectors';
import ContactListItem from './ContactListItem/ContactListItem';

const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);

  const contactsItem = contacts.map(({ id, name, phone }) => (
    <ContactListItem
      key={id}
      id={id}
      name={name}
      number={phone}
      type="button"
    />
  ));
  return <ul>{contactsItem}</ul>;
};
export default ContactList;
