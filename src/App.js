import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactsList from "./components/ContactsList";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<ContactsList />} />
      <Route path="/add" element={<AddContact />} />
      <Route path="/edit/:id" element={<EditContact />} />
    </Routes>
  </Router>
);

export default App;
