import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { fetchDeleteContact } from 'redux/contacts/contacts-operations';

import { ContactItem, ContactInfo, RemoveBtn } from './ContactListItem.styled';

const ContactListItem = ({ id, name, number, type }) => {
  const dispatch = useDispatch();

  return (
    <ContactItem>
      <ContactInfo>
        {name}: {number}
      </ContactInfo>
      <RemoveBtn onClick={() => dispatch(fetchDeleteContact(id))} type={type}>
        Delete
      </RemoveBtn>
    </ContactItem>
  );
};

export default ContactListItem;

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
