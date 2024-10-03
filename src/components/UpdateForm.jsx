import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ContactsContext } from "../App";
import MainMenu from "./Menu";

function UpdateForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();
  const { fetchContacts } = useContext(ContactsContext);

  useEffect(() => {
    const path = `https://boolean-uk-api-server.fly.dev/dagandreas/contact/${id}`;

    fetch(path)
      .then((res) => res.json())
      .then((data) => {
        setFirstName(data.firstName || "");
        setLastName(data.lastName || "");
        setStreet(data.street || "");
        setCity(data.city || "");
      })
      .catch((error) => {
        console.error("fetch error updateform: ", error);
      });
  }, [id]);

  const updateOnTextbox = (event, setter) => {
    setter(event.target.value);
  };

  const submitUpdate = (event) => {
    event.preventDefault();

    if (!firstName || !lastName || !street || !city) {
      console.error("All fields are required");
      return;
    }

    const updatedPerson = { firstName, lastName, street, city };

    const path = `https://boolean-uk-api-server.fly.dev/dagandreas/contact/${id}`;

    fetch(path, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedPerson),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success updating contact:", data);
        fetchContacts();
        navigate(`/contact/${id}`);
      })
      .catch((error) => {
        console.error("Error updating contact:", error);
      });
  };

  return (
    <main className="dashboard-layout">
      <div>
        <MainMenu />
      </div>
      <div>
        <form onSubmit={submitUpdate}>
          <h2>Update Contact</h2>
          <p>First Name</p>
          <input
            value={firstName}
            onChange={(event) => updateOnTextbox(event, setFirstName)}
            type="text"
          />
          <p>Last Name</p>
          <input
            value={lastName}
            onChange={(event) => updateOnTextbox(event, setLastName)}
            type="text"
          />
          <p>Street</p>
          <input
            value={street}
            onChange={(event) => updateOnTextbox(event, setStreet)}
            type="text"
          />
          <p>City</p>
          <input
            value={city}
            onChange={(event) => updateOnTextbox(event, setCity)}
            type="text"
          />
          <input
            className="form_submit"
            type="submit"
            value="Update"
          />
        </form>
      </div>
    </main>
  );

}

export default UpdateForm;
