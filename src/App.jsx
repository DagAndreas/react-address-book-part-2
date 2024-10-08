import { useEffect, useState } from "react";
import "./App.css";
import { createContext } from "react";
import ContactsForm from "./components/ContactsForm";
import MainMenu from "./components/Menu";
import { Route, Router, Routes, useLocation } from "react-router-dom";
import ContactsList from "./components/ContactsList";
import ContactProfile from "./components/ContactProfile";
import UpdateForm from "./components/UpdateForm";

//api
// https://boolean-uk-api-server.fly.dev

const ContactsContext = createContext();

function App() {
  const [contacts, setContacts] = useState([]);

  const location = useLocation();


  //TODO: fetch contacts?
  // https://boolean-uk-api-server.fly.dev/dagandreas/contact
  const fetchContacts = () => {
    fetch("https://boolean-uk-api-server.fly.dev/dagandreas/contact")
      .then((res) => res.json())
      .then(setContacts)
      .catch((error) => console.error('Error fetching contacts:', error));
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  useEffect(() => {
    // Check if the user is navigating to the root path
    if (location.pathname === "/") {
      fetchContacts();
    }
  }, [location.pathname]);

  return (
    <>
      <ContactsContext.Provider
        value={{ contacts, setContacts, fetchContacts }}
      >
        <Routes>
          <Route path="/" element={<ContactsList />} />

          <Route path="/new" element={<ContactsForm />} />

          <Route path="/contact/:id" element={<ContactProfile />} />
          
          <Route path="/update/:id" element={<UpdateForm/>} />
        </Routes>
      </ContactsContext.Provider>
    </>
  );
}

export { App, ContactsContext };
