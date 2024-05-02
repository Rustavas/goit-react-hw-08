import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { addContact, contacts, deleteContact } from "./operations";



const INITAL_STATE = {
  contacts: [],
  isLoading: false,
  isError: false,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: INITAL_STATE,
  extraReducers: builder => builder
    .addCase(contacts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.contacts = action.payload;
    })
    .addCase(addContact.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.contacts.push(action.payload);
    })
    .addCase(deleteContact.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      const contactIndex = state.contacts.findIndex(contact => contact.id === action.payload.id);
      state.contacts.splice(contactIndex, 1);
    })
    .addMatcher(isAnyOf(
      contacts.pending,
      addContact.pending,
      deleteContact.pending,
      ), (state) => {
        state.isLoading = true;
        state.isError = false;
      } 
    )
    .addMatcher(isAnyOf(
      contacts.rejected,
      addContact.rejected,
      deleteContact.rejected,
      ), (state) => {
        state.isLoading = false;
        state.isError = true;
      }
    )
});

export const contactsReducer = contactsSlice.reducer;







