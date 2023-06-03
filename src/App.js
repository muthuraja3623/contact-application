import React, { useState, useEffect } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import ContactList from '../src/Components/Home';
import AddEditContact from '../src/Components/Home/component/AddEditContact';
import MapView from '../src/Components/Map';
import Footer from './Components/Footer';
import "./assets/css/index.scss";
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';



function App() {
  const [contacts, setContacts] = useState([]);

  console.log("contacts", contacts);
  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (storedContacts) {
      setContacts(storedContacts);
    }
  }, []);

  useEffect(() => {
    if(contacts.length > 0){
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }, [contacts]);

  const addContact = (contact) => {
    setContacts([contact, ...contacts]);
  };

  const updateContact = (updatedContact) => {
    const updatedContacts = contacts.map((contact) =>
      contact.id === updatedContact.id ? updatedContact : contact
    );
    setContacts(updatedContacts);
  };


  return (
    <div>
      <Router>
          <Navbar />
          <div className="container content-bottom-align">
        <Routes>
            <Route path="/" element={<ContactList contacts={contacts} updateContact={updateContact} />} />
            <Route path="/add" element={<AddEditContact addContact={addContact} />} />
            <Route path="/edit/:id" element={<AddEditContact contacts={contacts} updateContact={updateContact} />} />
            <Route path="/map" element={<MapView contacts={contacts} />} />
        </Routes>
          </div>
          <Footer/>
      </Router>
    </div>
  );
}

export default App;
