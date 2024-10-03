I want the default to route to "/" displaying the empty list of contacts added
I want to split up the page into a component with the links and two other. One component form for adding new contacts, and another component to display the currently added components.

```jsx
function App() {
  return (
    <>
      {/* this should be global */}
      <div>
        <h2>Menu</h2>
        <div>
          <a href="">Contacts List</a>
        </div>
        <div>
          <a href="">Add New Contact</a>
        </div>
      </div>

      {/* this is for route create contact  */}
      <div>
        <h2>Create Contact</h2>
        <p>First Name</p>
        <input type="textbox"></input>
        <p>Last Name</p>
        <input type="textbox"></input>
        <p>Street</p>
        <input type="textbox"></input>
        <p>City</p>
        <input type="textbox"></input>
      </div>

      {/* this is for list of contacts  */}
      <div>
        <ul>
          <li>{/* map contacts to <Contact/> */}</li>
        </ul>
      </div>
    </>
  );
}
```