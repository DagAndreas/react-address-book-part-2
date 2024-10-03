function MainMenu() {
  return (
    <>
      <div>
        <h2>Menu</h2>
        <ul className="MenuList">
          <li>
            <a href="/">Contacts List</a>
          </li>
          <li>
            <a href="/new">Add New Contact</a>
          </li>
          {/* <li>
            <a href="/delete">Delete Contact</a>
          </li> */}
        </ul>
      </div>
    </>
  );
}

export default MainMenu
