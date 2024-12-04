import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "../db";

const ContactsList = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      const querySnapshot = await getDocs(collection(db, "contacts"));
      const contactsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setContacts(contactsData.sort((a, b) => a.lastName.localeCompare(b.lastName))); // Sort alphabetically by last name
    };

    fetchContacts();
  }, []);

  return (
    <div>
      <h1>Contact List</h1>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            {contact.firstName} {contact.lastName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactsList;
