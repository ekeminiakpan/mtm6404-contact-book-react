import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactList from './components/ContactList';
import ContactDetails from './components/ContactDetails';
import ContactForm from './components/ContactForm';
import './App.css';

function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<ContactList />} />
          <Route path="/contact/:id" element={<ContactDetails />} />
          <Route path="/contact/new" element={<ContactForm />} />
          <Route path="/contact/edit/:id" element={<ContactForm isEdit />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
