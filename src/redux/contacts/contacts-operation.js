import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getContact = createAsyncThunk('contacts/getContacts', async () => {
  try {
    const { data } = await axios.get('/contacts');
    return data;
  } catch (error) {
    // TODO: Добавить обработку ошибки error.message
  }
});

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async idContact => {
    try {
      const contact = await axios.delete(`/contacts/${idContact}`);
      return contact;
    } catch (error) {
      // TODO: Добавить обработку ошибки error.message
    }
  }
);

export const createContact = createAsyncThunk(
  'contacts/createContact',
  async newContact => {
    try {
      const contact = await axios.post('/contacts', newContact);
      console.log(contact.data);
      return contact.data;
    } catch (error) {
      // TODO: Добавить обработку ошибки error.message
    }
  }
);
