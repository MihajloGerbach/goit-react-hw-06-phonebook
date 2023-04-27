import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, action) {
      state.push(action.payload);
    },
    deleteContact(state, active) {
      return state.filter(({ id }) => id !== active.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;