import axios from 'axios';

axios.defaults.baseURL = 'https://6535313bc620ba9358ec3ff0.mockapi.io';

export const getAllContacts = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};

export const postContact = async contact => {
  const { data } = await axios.post('/contacts', contact);
  return data;
};

export const deleteContactById = async id => {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
};