import { createSelector } from '@reduxjs/toolkit';
export const getContacts = state => state.contact.items;
export const getFilter = state => state.contact.filter;
export const getLoading = state => state.contact.loadings;

export const getVisibleContact = createSelector(
  [getContacts, getFilter],
  (todos, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return todos.filter(({ description }) =>
      description.toLowerCase().includes(normalizedFilter)
    );
  }
);
