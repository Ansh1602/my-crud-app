// src/app/components/Form.js
import { useState, useEffect } from 'react';
import { createContact, updateContact } from '../../../utils/api';

const Form = ({ selectedContact, onSave, onUpdate }) => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    hobbies: '',
  });

  useEffect(() => {
    if (selectedContact) {
      setFormData(selectedContact);
    }
  }, [selectedContact]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedContact) {
      await updateContact(selectedContact._id, formData);
      onUpdate();
    } else {
      await createContact(formData);
      onSave();
    }
    setFormData({ name: '', phoneNumber: '', email: '', hobbies: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
        <input
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Hobbies</label>
        <input
          type="text"
          name="hobbies"
          value={formData.hobbies}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          {selectedContact ? 'Update' : 'Save'}
        </button>
      </div>
    </form>
  );
};

export default Form;
