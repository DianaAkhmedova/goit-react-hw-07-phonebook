import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getAllContacts } from 'redux/contacts/contacts-selectors';
import { addContact } from 'redux/contacts/contacts-slice';

import { Form, FormLabel, FormInput, AddBtn } from './ContactForm.styled';

const ContactForm = () => {
  const [state, setState] = useState({
    name: '',
    number: '',
  });

  const { name, number } = state;
  const contacts = useSelector(getAllContacts);
  const dispatch = useDispatch();

  const handleAddContact = contact => {
    const isContainsContact = contacts.some(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );

    if (isContainsContact)
      return alert(`${contact.name} is already in contacts`);

    dispatch(addContact(contact));
  };

  const handleChange = ({ currentTarget }) => {
    const { name, value } = currentTarget;

    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    handleAddContact({ ...state });
    setState({ name: '', number: '' });
  };

  return (
    <Form onSubmit={handleSubmit} name="contactForm" autoComplete="on">
      <FormLabel>
        Name
        <FormInput
          onChange={handleChange}
          type="text"
          name="name"
          value={name}
          placeholder="Michael Jackson"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </FormLabel>

      <FormLabel>
        Number
        <FormInput
          onChange={handleChange}
          type="tel"
          name="number"
          value={number}
          placeholder="111-11-11"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </FormLabel>

      <AddBtn type="submit">Add contact</AddBtn>
    </Form>
  );
};
export default ContactForm;
