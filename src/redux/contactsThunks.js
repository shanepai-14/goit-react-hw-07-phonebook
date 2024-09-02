import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://66cc5c59a4dd3c8a71b754ec.mockapi.io'; // Replace with your actual API URL

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  const response = await axios.get(`${BASE_URL}/contacts`);
  return response.data;
});

export const addContact = createAsyncThunk('contacts/addContact', async (newContact) => {
  const response = await axios.post(`${BASE_URL}/contacts`, newContact);
  return response.data;
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id) => {
  await axios.delete(`${BASE_URL}/contacts/${id}`);
  return id;
});
