import { useState } from "react";
import MainMenu from "./Menu";

function ContactsForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");

  const updateOnTextbox = (event, setter) => {
    const updatedText = event.target.value;
    setter(updatedText);
    console.log(updatedText);
  };

  //TODO: fix survey to add a person into the people list.
  //TODO: push the new person up into the api
  const submitSurvey = () => {
    // first create the person
    const person = {};
    person.firstName = firstName;
    person.lastName = lastName;
    person.street = street;
    person.city = city;
  };

  return (
    <>
      <main className="dashboard-layout">
        <div>
          <MainMenu />
        </div>
        <div>
          <form>
            <h2>Create Contact</h2>
            <p>First Name</p>
            <input
              onChange={(event) => updateOnTextbox(event, setFirstName)}
              type="textbox"
            ></input>
            <p>Last Name</p>
            <input
              onChange={(event) => updateOnTextbox(event, setLastName)}
              type="textbox"
            ></input>
            <p>Street</p>
            <input
              onChange={(event) => updateOnTextbox(event, setStreet)}
              type="textbox"
            ></input>
            <p>City</p>
            <input
              onChange={(event) => updateOnTextbox(event, setCity)}
              type="textbox"
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
