import { createSelector } from '@reduxjs/toolkit';
export const getContacts = state => state.items;
export const getFilter = state => state.filter;
export const getLoading = state => state.loadings;

export const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  }
);
