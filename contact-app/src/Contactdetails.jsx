import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function ContactDetails() {
  const { id } = useParams();
  const [contact, setContact] = useState(null);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
      .then((response) => response.json())
      .then((data) => setContact(data.results[id]))
      .catch((error) => console.error("Error fetching contact details:", error));
  }, [id]);

  if (!contact) return <p>Loading...</p>;

  return (
    <div>
      <h2>{contact.name.first} {contact.name.last}</h2>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>
      <img src={contact.picture.large} alt={`${contact.name.first} ${contact.name.last}`} />
    </div>
  );
}

export default ContactDetails;
