function ContactsListItem(props) {
  const { contact } = props;

  return (
    <>
      <div>
        <h2>{contact.firstName} {contact.lastName}</h2>
        <p>{contact.street}, {contact.city}</p>
        {/* render map of where */}
        
      </div>
    </>
  );
}

export default ContactsListItem