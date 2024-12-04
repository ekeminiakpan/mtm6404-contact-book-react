import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getContacts, deleteContact } from '../services/contactService';

const ContactDetails = ({ edit }) => {
  const [contact, setContact] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    loadContact();
  }, [id]);

  const loadContact = async () => {
    const contacts = await getContacts();
    const foundContact = contacts.find(c => c.id === id);
    setContact(foundContact);
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this contact?')) {
      await deleteContact(id);
      navigate('/');
    }
  };

  if (!contact) return <div>Loading...</div>;

  return (
    <div className="contact-details">
      <div className="contact-details-header">
        <h1>Contact Details</h1>
        <div className="button-group">
          <Link to="/" className="btn btn-secondary">Back</Link>
          <Link to={`/contact/edit/${id}`} className="btn btn-primary">Edit</Link>
          <button onClick={handleDelete} className="btn btn-danger">Delete</button>
        </div>
      </div>
      
      <div className="contact-info">
        <div className="info-row">
          <span className="label">First Name:</span>
          <span className="value">{contact.firstName}</span>
        </div>
        <div className="info-row">
          <span className="label">Last Name:</span>
          <span className="value">{contact.lastName}</span>
        </div>
        <div className="info-row">
          <span className="label">Email:</span>
          <span className="value">{contact.email}</span>
        </div>
        <div className="info-row">
          <span className="label">Phone:</span>
          <span className="value">{contact.phone}</span>
        </div>
        <div className="info-row">
          <span className="label">Address:</span>
          <span className="value">{contact.address || 'No address provided'}</span>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails; 