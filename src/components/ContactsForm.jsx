import { useState } from "react";
import MainMenu from "./Menu";
import { useNavigate } from "react-router-dom";

function ContactsForm() {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [street, setStreet] = useState(null);
  const [city, setCity] = useState(null);

  const navigate = useNavigate();

  const updateOnTextbox = (event, setter) => {
    const updatedText = event.target.value;
    setter(updatedText);
    console.log(updatedText);
  };

  //TODO: fix survey to add a person into the people list.
  //TODO: push the new person up into the api
  const submitSurvey = (event) => {
    event.preventDefault();

    if (!firstName || !lastName || !street || !city) {
      console.error("All fields are required");
      return;
    }

    // first create the person
    const person = {};
    person.firstName = firstName;
    person.lastName = lastName;
    person.street = street;
    person.city = city;

    // submit the request to the api
    const path = "https://boolean-uk-api-server.fly.dev/dagandreas/contact";

    fetch(path, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(person),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success in contactsform: ", data);
      })
      .then(navigate("/"))
      .catch((error) => {
        console.error("Error in contactsform: ", error);
      });
  };

  return (
    <>
      <main className="dashboard-layout">
        <div>
          <MainMenu />
        </div>
        <div>
          <form onSubmit={submitSurvey}>
            <h2>Create Contact</h2>
            <p>First Name</p>
            <input
              onChange={(event) => updateOnTextbox(event, setFirstName)}
              type="text"
            ></input>
            <p>Last Name</p>
            <input
              onChange={(event) => updateOnTextbox(event, setLastName)}
              type="text"
            ></input>
            <p>Street</p>
            <input
              onChange={(event) => updateOnTextbox(event, setStreet)}
              type="text"
            ></input>
            <p>City</p>
            <input
              onChange={(event) => updateOnTextbox(event, setCity)}
              type="text"
            ></input>

            <input
              className="form_submit"
              type="submit"
              value="Submit Survey"
            />
          </form>
        </div>
      </main>
    </>
  );
}

export default ContactsForm;
