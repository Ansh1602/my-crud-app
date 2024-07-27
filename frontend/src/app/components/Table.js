// src/app/components/Table.js
import { useState} from 'react';
import {deleteContact, sendEmail} from '../../../utils/api';

const Table = ({ contacts, onSelect }) => {
  const [selectedContacts, setSelectedContacts] = useState([]);

  const handleDelete = async (id) => {
    await deleteContact(id);
    // Since `contacts` is managed in the parent component, call `fetchContacts` there
  };

  const handleSelect = (contact) => {
    const isSelected = selectedContacts.find((c) => c._id === contact._id);
    if (isSelected) {
      setSelectedContacts(selectedContacts.filter((c) => c._id !== contact._id));
    } else {
      setSelectedContacts([...selectedContacts, contact]);
    }
  };

  const handleSendEmail = async () => {
    await sendEmail(selectedContacts);
    alert('Email sent successfully!');
  };

  return (
    <div>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">
              <input
                type="checkbox"
                onChange={(e) =>
                  e.target.checked
                    ? setSelectedContacts(contacts)
                    : setSelectedContacts([])
                }
                checked={selectedContacts.length === contacts.length}
              />
            </th>
            <th className="py-2">ID</th>
            <th className="py-2">Name</th>
            <th className="py-2">Phone Number</th>
            <th className="py-2">Email</th>
            <th className="py-2">Hobbies</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => (
            <tr key={contact._id}>
              <td className="px-4 py-2 border">
                <input
                  type="checkbox"
                  checked={selectedContacts.some((c) => c._id === contact._id)}
                  onChange={() => handleSelect(contact)}
                />
              </td>
              <td className="px-4 py-2 border">{index + 1}</td>
              <td className="px-4 py-2 border">{contact.name}</td>
              <td className="px-4 py-2 border">{contact.phoneNumber}</td>
              <td className="px-4 py-2 border">{contact.email}</td>
              <td className="px-4 py-2 border">{contact.hobbies}</td>
              <td className="px-4 py-2 border">
                <button
                  onClick={() => onSelect(contact)}
                  className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(contact._id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded ml-2"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        onClick={handleSendEmail}
        className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Send Email
      </button>
    </div>
  );
};

export default Table;
