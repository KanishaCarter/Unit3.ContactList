import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ContactList from './ContactList';
import ContactDetails from './ContactDetails';

function App() {
  return (
    <div>
      <h1>Contact App</h1>
      <Routes>
        <Route path="/" element={<ContactList />} />
        <Route path="/contact/:id" element={<ContactDetails />} />
      </Routes>
    </div>
  );
}

export default App;
