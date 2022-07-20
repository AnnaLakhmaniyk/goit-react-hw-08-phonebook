import axios from 'axios';
axios.defaults.baseURL = 'https://62d4245acd960e45d453fd16.mockapi.io';

const fetchGetContact = async () => {
  const contact = await axios.get('/contacts');
  return contact.data;
};

const fetchDeleteContact = idContact => {
  return axios.delete(`/contacts/${idContact}`);
};
const fetchCreateContact = async newContact => {
  const contact = await axios.post('/contacts', newContact);
  return contact.data;
};
export { fetchGetContact, fetchDeleteContact, fetchCreateContact };
