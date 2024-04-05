// api.js

const API_URL = 'https://contact.herokuapp.com/contact';

export const fetchContacts = async () => {
  try {
    const response = await fetch(`${API_URL}/contacts`);
    if (!response.ok) {
      throw new Error('Failed to fetch contacts');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
