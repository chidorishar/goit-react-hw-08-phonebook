import { ContactForm, ContactList, Filter } from 'components/AllComponents';

import { Box } from 'components/common/Box/Box.styled';
import { ContainerCardCommon } from 'components/common/shared.styled';

export function Contacts() {
  return (
    <ContainerCardCommon>
      <Box margin="0 auto" color="textColored">
        <h1>Phonebook</h1>
        <ContactForm />

        <Box
          width={0.85}
          margin="0 auto"
          mt={[4]}
          borderColor="accentSecondary"
          color="textColoredSecondary"
        >
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </Box>
      </Box>
    </ContainerCardCommon>
  );
}
