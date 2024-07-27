const API_URL = 'http://localhost:5000/api/contacts'; // Backend server URL

// Get all contacts
export const getContacts = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

// Create a new contact
export const createContact = async (contact) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(contact),
  });
  return response.json();
};

// Update a contact
export const updateContact = async (id, contact) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(contact),
  });
  return response.json();
};

// Delete a contact
export const deleteContact = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  return response.json();
};

// Send email with selected contacts
export const sendEmail = async (contacts) => {
  const response = await fetch(`${API_URL}/send-email`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ contacts }),
  });
  return response.json();
};
