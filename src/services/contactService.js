import { 
  collection, 
  getDocs, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  query, 
  orderBy 
} from 'firebase/firestore';
import { db } from '../firebase/db';

const CONTACTS_COLLECTION = 'contacts';

export const getContacts = async () => {
  const contactsQuery = query(
    collection(db, CONTACTS_COLLECTION), 
    orderBy('lastName')
  );
  const snapshot = await getDocs(contactsQuery);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};

export const addContact = async (contactData) => {
  const docRef = await addDoc(collection(db, CONTACTS_COLLECTION), contactData);
  return { id: docRef.id, ...contactData };
};

export const updateContact = async (id, contactData) => {
  const contactRef = doc(db, CONTACTS_COLLECTION, id);
  await updateDoc(contactRef, contactData);
  return { id, ...contactData };
};

export const deleteContact = async (id) => {
  const contactRef = doc(db, CONTACTS_COLLECTION, id);
  await deleteDoc(contactRef);
}; 