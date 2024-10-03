import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ContactsContext } from "../App";

function ContactsListItem(props) {
  const { contact } = props;
  const navigate = useNavigate();

  const { fetchContacts } = useContext(ContactsContext);

  const handleViewClick = () => {
    navigate(`/contact/${contact.id}`);
  };

  const handleDeleteClick = async () => {
    const path =
      "https://boolean-uk-api-server.fly.dev/dagandreas/contact/" + contact.id;
    try {

      const response = await fetch(path, { method: "DELETE" });
      const data = await response.json();
      console.log("Success in contactslistitem: ", data);

      await fetchContacts();
      navigate("/");
    } catch (error) {
      console.error("Error in contactslistitem async: ", error);
    }
  };

  return (
    <>
      <div className="ContactCard">
        <a href={"/contact/" + contact.id}>
          <h3>
            {contact.firstName} {contact.lastName}
          </h3>
        </a>
        <button onClick={handleViewClick}>View</button>
        <button onClick={handleDeleteClick}>Delete</button>
      </div>
    </>
  );
}

export default ContactsListItem;
