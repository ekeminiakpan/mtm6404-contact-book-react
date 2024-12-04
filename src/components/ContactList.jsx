import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getContacts } from '../services/contactService';

function ContactList() {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    loadContacts();
  }, []);

  const loadContacts = async () => {
    const contactsData = await getContacts();
    setContacts(contactsData.sort((a, b) => a.lastName.toLowerCase().localeCompare(b.lastName.toLowerCase())));
  };

  const filteredContacts = contacts.filter(contact => 
    `${contact.firstName} ${contact.lastName}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Contact Book</h1>
      </div>
      
      <div className="search-container">
        <input
          type="text"
          className="search-box"
          placeholder="Search contacts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Link to="/contact/new" className="btn btn-primary">
          Add Contact
        </Link>
      </div>

      <div className="contact-list">
        {filteredContacts.length === 0 && !searchTerm && (
          <div className="empty-contacts">
            No contacts yet. Click "Add Contact" to create one!
          </div>
        )}
        {filteredContacts.length === 0 && searchTerm && (
          <div className="empty-contacts">
            No contacts found matching your search.
          </div>
        )}
        {filteredContacts.map(contact => (
          <Link
            key={contact.id}
            to={`/contact/${contact.id}`}
            className="contact-item"
          >
            <div className="contact-name">
              {contact.lastName}, {contact.firstName}
            </div>
            <div className="contact-email">{contact.email}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ContactList; 