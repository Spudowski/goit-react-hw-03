import './App.css';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './components/ContactForm';
import SearchBox from './components/SearchBox';
import ContactList from './components/ContactList';

function App() {

  const [filteredText, setFilteredText] = useState('');
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem('saved-contacts');
    if (savedContacts !== null) {
      return JSON.parse(savedContacts)
    }
    return [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ]
  });

  useEffect(() => {
    window.localStorage.setItem('saved-contacts', JSON.stringify(contacts))
  }, [contacts]);
  

  const filteredContacts = contacts.filter(contact => 
    contact.name.toLowerCase().includes(filteredText)
  )

  const addContact = (newContact) => {
    setContacts([...contacts, { ...newContact, id: nanoid() }])
  }

  const deleteContact = (id) => {
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    setContacts(updatedContacts);
  }

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={addContact} />
        <SearchBox
          filteredText={filteredText}
          setFilteredText={setFilteredText}
        />
        <ContactList
          contacts={filteredContacts}
          onDelete={deleteContact}
        />
      </div>
    </>
  );
}

export default App
