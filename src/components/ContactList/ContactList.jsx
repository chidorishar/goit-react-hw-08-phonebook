import { useSelector } from 'react-redux';

import { useGetContactsQuery } from 'redux/contactsApiSlice';
import { getFilter } from 'redux/selectors';

import { ContactsList } from './ContactList.styled';
import { ContactListItem } from './ContactListItem/ContactListItem';

export function ContactList() {
  const { data: contactsData, error, isLoading } = useGetContactsQuery();
  const filterValue = useSelector(getFilter);

  //filter contacts by filter value on changes
  const filteredContacts = (() => {
    const normalizedFilter = filterValue.toLowerCase().trim();

    if (!normalizedFilter || !contactsData) {
      return null;
    }

    return contactsData.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  })();

  return (
    <ContactsList>
      {isLoading && <p>Contacts are loading... Please wait. </p>}
      {error && <p>Network error. Contacts cant be loaded. </p>}
      {contactsData &&
        (filteredContacts ?? contactsData).map(contactData => (
          <ContactListItem key={contactData.id} contactData={contactData} />
        ))}
    </ContactsList>
  );
}
