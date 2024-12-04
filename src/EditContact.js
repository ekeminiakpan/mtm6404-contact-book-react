import { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import db from "../db";

const EditContact = ({ contact }) => {
  const [firstName, setFirstName] = useState(contact.firstName);
  const [lastName, setLastName] = useState(contact.lastName);
  const [email, setEmail] = useState(contact.email);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const contactRef = doc(db, "contacts", contact.id);
    await updateDoc(contactRef, {
      firstName,
      lastName,
      email,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
      />
      <input
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        required
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">Update Contact</button>
    </form>
  );
};

export default EditContact;
