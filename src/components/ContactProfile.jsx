import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MainMenu from "./Menu";

function ContactProfile() {
  const [contact, setContact] = useState({});
  const { id } = useParams();

  const navigate = useNavigate()

  useEffect(() => {
    console.log("fetching id: ", id);

    fetch("https://boolean-uk-api-server.fly.dev/dagandreas/contact/" + id)
      .then((res) => res.json())
      .then(setContact);
  }, []);


  const handleEditClick = () => {
    navigate(`/update/${id}`);
  };
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
          <button onClick={handleEditClick}>Edit</button>
        </div>
      </main>

      <div></div>
    </>
  );
}

export default ContactProfile;
