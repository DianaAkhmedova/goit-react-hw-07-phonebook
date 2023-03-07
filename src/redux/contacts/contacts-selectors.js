export const getAllContacts = ({ contacts }) => contacts.items;
export const getFilteredContacts = ({ contacts, filter }) => {
  if (!filter) {
    return contacts.items;
  }

  return contacts.items.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};
