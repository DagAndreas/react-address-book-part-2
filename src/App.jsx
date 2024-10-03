import { useEffect, useState } from "react";
import "./App.css";
import { createContext } from "react";
import ContactsForm from "./components/ContactsForm";
import MainMenu from "./components/Menu";
import { Route, Router, Routes } from "react-router-dom";
import ContactsList from "./components/ContactsList";

//api
// https://boolean-uk-api-server.fly.dev

const ContactsContext = createContext();

function App() {
  const [contacts, setContacts] = useState([]);

  const [highestId, setHighestId] = useState(0);

  //TODO: check that addContact works
  // const addContact = (contact) => {
  //   setContacts([...contacts, contact]);
  // };

  //TODO: fetch contacts?
  // https://boolean-uk-api-server.fly.dev/dagandreas/contact
  useEffect(() => {
    fetch("https://boolean-uk-api-server.fly.dev/dagandreas/contact")
      .then((res) => res.json())
      .then(setContacts);
  }, []);

  useEffect(() => {
    console.log(contacts);
    const highest = contacts.reduce((max, contact) => max < contact.id ? contact.id : max, 0)

  }, [contacts]);

  return (
    <>
      <ContactsContext.Provider
        value={{ contacts, setContacts, highestId, setHighestId }}
      >
        <Routes>
          <Route path="/" element={<ContactsList />} />

          <Route path="/new" element={<ContactsForm />} />
        </Routes>
      </ContactsContext.Provider>
    </>
  );
}

export { App, ContactsContext };
