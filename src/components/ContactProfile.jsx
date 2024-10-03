import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MainMenu from "./Menu";

function ContactProfile() {
  const [contact, setContact] = useState({});
  const { id } = useParams();

  useEffect(() => {
    console.log("fetching id: ", id);

    fetch("https://boolean-uk-api-server.fly.dev/dagandreas/contact/" + id)
      .then((res) => res.json())
      .then(setContact);
  }, []);

  return (
    <>
      <main className="dashboard-layout">
        <div>
          <MainMenu />
        </div>
        <div>
          <h2>
            {contact.firstName} {contact.lastName}
          </h2>
          <p>
            {contact.street}, {contact.city}
          </p>
          {/* TODO: render map of where */}
        </div>
      </main>

      <div></div>
    </>
  );
}

export default ContactProfile;
