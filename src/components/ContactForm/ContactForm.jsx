import { useState } from 'react';
import { Notify } from 'notiflix';
import { nanoid } from 'nanoid';

import {
  useAddContactMutation,
  useGetContactsQuery,
} from 'redux/contactsApiSlice';

import {
  AddContactButton,
  AddContactForm,
  InputInfoLabel,
  ContactInput,
} from './ContactForm.styled';

const INPUTS_NAMES = {
  name: 'name',
  number: 'number',
};

export function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const stateMethods = {
    [INPUTS_NAMES.name]: setName,
    [INPUTS_NAMES.number]: setNumber,
  };
  const { data: contactsData } = useGetContactsQuery();
  const [addContact, { isLoading }] = useAddContactMutation();

  function isContactWithNameExist(searchName) {
    if (!contactsData) return;

    const searchNameNormalized = searchName.trim().toLowerCase();

    return contactsData.some(
      ({ name }) => name.toLowerCase() === searchNameNormalized
    );
  }

  const onSubmit = e => {
    e.preventDefault();

    if (isContactWithNameExist(name)) {
      Notify.warning("Can't add already existing contact");
      return;
    }

    addContact({ name, number, id: nanoid() });
    setName('');
    setNumber('');
  };

  const onInput = e => {
    const { name: inputName, value: inputValue } = e.target;

    stateMethods[inputName](inputValue);
  };

  return (
    <AddContactForm onSubmit={onSubmit}>
      <InputInfoLabel>
        Name
        <ContactInput
          type="text"
          name={INPUTS_NAMES.name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          autoFocus
          onInput={onInput}
          value={name}
        ></ContactInput>
      </InputInfoLabel>
      <InputInfoLabel>
        Number
        <ContactInput
          type="tel"
          name={INPUTS_NAMES.number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={onInput}
          value={number}
        ></ContactInput>
      </InputInfoLabel>
      <AddContactButton type="submit" cursor="cross" disabled={isLoading}>
        {isLoading ? 'Saving...' : 'Add contact'}
      </AddContactButton>
    </AddContactForm>
  );
}
