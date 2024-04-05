

// contactSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContactsFromApi = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    try {
      const response = await fetch('https://contact.herokuapp.com/contact');
      if (!response.ok) {
        throw new Error('Failed to fetch contacts');
      }
      const data = await response.json();
      
      return data.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    loading: false,
    error: null,
  },
  
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload); // Add the new contact to the contacts array
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
    },
    searchContacts: (state, action) => {
      const query = action.payload.toLowerCase();
      state.filteredContacts = state.contacts.filter(contact => {
        // Check if contact and its properties exist
        if (!contact || !contact.name || !contact.phoneNumber) return false;
        // Filter contacts whose name or other properties contain the search query
        return (
          contact.name.toLowerCase().includes(query) ||
          contact.phoneNumber.includes(query)
          
        );
      });
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchContactsFromApi.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchContactsFromApi.fulfilled, (state, action) => {
        state.loading = false;
        state.contacts = action.payload;
        state.error = null;
      })
      .addCase(fetchContactsFromApi.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});


export const { addContact,deleteContact, searchContacts } = contactSlice.actions;

export default contactSlice.reducer;
