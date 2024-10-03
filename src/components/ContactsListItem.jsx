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

  const handleDeleteClick = () => {
    const path =
      "https://boolean-uk-api-server.fly.dev/dagandreas/contact/" + contact.id;

    fetch(path, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success in contactlistitem: ", data);
        fetchContacts();
        navigate("/");
      })
      .catch((error) => {
        console.error("Error in contactlistitem: ", error);
      });
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
