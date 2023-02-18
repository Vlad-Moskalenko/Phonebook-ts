import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';

import { useAppSelector } from '../hooks/hook';

export const App = () => {
  const contacts = useAppSelector(state => state.contacts.contacts);

  return (
    <main className="app-wrapper">
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        {contacts.length > 0 ? (
          <>
            <Filter />
            <ContactsList />
          </>
        ) : (
          <p>There are no contacts yet...</p>
        )}
      </Section>
    </main>
  );
};
