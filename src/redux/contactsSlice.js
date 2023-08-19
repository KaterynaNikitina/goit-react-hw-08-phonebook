import { createSlice } from '@reduxjs/toolkit';
import {
  getAllContactsThunk,
  addNewContactThunk,
  deleteContactThunk,
} from './contactsOperations';

const initialState = {
  contacts: null,
  isLoading: false,
  error: null,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder =>
    builder
      // --- GET ALL Contacts for the Phonebook ---
      .addCase(getAllContactsThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllContactsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = action.payload;
      })
      .addCase(getAllContactsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // --- ADD New  Contact ---
      .addCase(addNewContactThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addNewContactThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts.push(action.payload);
      })
      .addCase(addNewContactThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      //   --- DELETE Contact from Phonebook ---
      .addCase(deleteContactThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteContactThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        const deletedContactIndex = state.contacts.findIndex(
          contact => contact.id === action.payload.id
        );
        state.contacts.splice(deletedContactIndex, 1);
      })
      .addCase(deleteContactThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const contactsSliceReducer = contactsSlice.reducer;
