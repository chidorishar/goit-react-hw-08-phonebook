import { Box } from 'components/common/Box/Box.styled';
import { ContactForm, ContactList, Filter } from './AllComponents';

export function App() {
  return (
    <Box
      width="wide"
      m={[3]}
      p={[3]}
      textAlign="center"
      borderRadius="small"
      boxShadow="medium"
    >
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
    </Box>
  );
}
