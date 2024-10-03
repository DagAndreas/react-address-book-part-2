import { useContext } from "react";
import { ContactsContext } from "../App";
import ContactsListItem from "./ContactsListItem";
import MainMenu from "./Menu";

function ContactsList() {
  const { contacts } = useContext(ContactsContext);

  return (
    <>
      <main className="dashboard-layout">
        <div>
          <MainMenu />
        </div>
        <div>
          <ul>
            {/* map over contacts and create items */}
             {contacts.map((person, index) => (
                <ContactsListItem key={index} contact = {person}/>
             ))}
            </ul>
        </div>
      </main>
    </>
  );
}

export default ContactsList;
