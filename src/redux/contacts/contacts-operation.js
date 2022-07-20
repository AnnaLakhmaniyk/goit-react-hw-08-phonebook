import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchGetContact,
  fetchDeleteContact,
  fetchCreateContact,
} from 'redux/contactsApi';

export const getContact = createAsyncThunk('contacts/getContacts', async () => {
  return await fetchGetContact();
});

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async idContact => {
    await fetchDeleteContact(idContact);
    return idContact;
  }
);
export const createContact = createAsyncThunk(
  'contacts/createContact',
  async newContact => {
    return await fetchCreateContact(newContact);
  }
);
