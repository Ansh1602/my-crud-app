// app/page.js
"use client"  

import { useState, useEffect  } from 'react';
import Form from './components/Form';
import Table from './components/Table';
import { getContacts } from '../../utils/api';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    const data = await getContacts();
    setContacts(data);
  };

  const handleSelectContact = (contact) => {
    setSelectedContact(contact);
  };

  const handleSave = () => {
    setSelectedContact(null);
    fetchContacts(); // Refresh contacts after saving or updating
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Contact Manager</h1>
      <Form selectedContact={selectedContact} onSave={handleSave} onUpdate={handleSave} />
      <Table contacts={contacts} onSelect={handleSelectContact} />
    </div>
  );
};

export default App;