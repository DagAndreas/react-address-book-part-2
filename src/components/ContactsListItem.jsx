function ContactsListItem(props) {
  const { contact } = props;

  return (
    <>
      <div>
        <a href={"/contact/" + contact.id}>
          <h3>
            {contact.firstName} {contact.lastName}
          </h3>
        </a>
      </div>
    </>
  );
}

export default ContactsListItem;
