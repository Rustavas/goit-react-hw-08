import { createSelector, createSlice } from "@reduxjs/toolkit";
import { selectPhonebookContacts } from "../contacts/selector";
import { selectNameFilter } from "./selector";
// import { selectFilter } from "./selector";

export const selectFilteredContacts = createSelector(
  [selectPhonebookContacts, selectNameFilter],
  (contacts, filter) => {
    return contacts.filter((contact) =>{
      return contact.name.toLowerCase().includes(filter.toLowerCase())
    }
    );
  }
);

const INITAL_STATE = {
  name: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: INITAL_STATE,
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;

