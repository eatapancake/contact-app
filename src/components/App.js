import "./App.css";
import React, { useState, useEffect } from "react";
import uuid from "react-uuid";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const retriveContacts =
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
  const [contacts, setContacts] = useState(retriveContacts);
  const addContactHandler = (contact) => {
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="App-container">
      <Header />
      <div className="contact-container">
        <AddContact addContactHandler={addContactHandler} />
        <ContactList
          contacts={contacts}
          removeContactHandler={removeContactHandler}
        />
      </div>
    </div>
  );
}

export default App;
