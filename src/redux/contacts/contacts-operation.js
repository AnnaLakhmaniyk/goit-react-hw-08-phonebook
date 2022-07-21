import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import axios from 'axios';

export const getContact = createAsyncThunk('contacts/getContacts', async () => {
  try {
    const { data } = await axios.get('/contacts');
    return data;
  } catch (error) {
    toast.error(`oops, something went wrong`);
  }
});

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async idContact => {
    try {
      await axios.delete(`/contacts/${idContact}`);
      return idContact;
    } catch (error) {
      toast.error(`oops, something went wrong`);
    }
  }
);

export const createContact = createAsyncThunk(
  'contacts/createContact',
  async newContact => {
    try {
      const contact = await axios.post('/contacts', newContact);
      return contact.data;
    } catch (error) {
      toast.error(`oops, something went wrong`);
    }
  }
);
