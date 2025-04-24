import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ContactList() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
      .then((response) => response.json())
      .then((data) => setContacts(data.results))
      .catch((error) => console.error("Error fetching contacts:", error));
  }, []);

  return (
    <div>
      <h2>Contact List</h2>
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            <Link to={`/contact/${index}`}>
              {contact.name.first} {contact.name.last}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactList;
