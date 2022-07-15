export const getContacts = state => state.contact.items;
export const getFilter = state => state.contact.filter;

export const getFilteredContacts = state => {
  const contacts = getContacts(state);
  const filter = getFilter(state);
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );
};
