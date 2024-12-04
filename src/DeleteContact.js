import { doc, deleteDoc } from "firebase/firestore";
import db from "../db";

const DeleteContact = ({ contactId }) => {
  const handleDelete = async () => {
    const contactRef = doc(db, "contacts", contactId);
    await deleteDoc(contactRef);
  };

  return <button onClick={handleDelete}>Delete Contact</button>;
};

export default DeleteContact;
