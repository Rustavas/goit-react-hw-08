import { createSelector, createSlice } from "@reduxjs/toolkit";
import { login, refreshUser, register } from "./operations";


// export const selectFilteredContacts = createSelector(
//   [selectContacts, selectFilter],
//   (contacts, filter) => {
//     return contacts.filter((contact) =>{
//       return contact.name.toLowerCase().includes(filter.toLowerCase())
//     }
//     );
//   }
// );


const INITAL_STATE = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  isError: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: INITAL_STATE,
  extraReducers: builder => builder
    .addCase(register.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    })
    .addCase(register.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.isSignedIn = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
    })
    .addCase(register.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    })
    .addCase(login.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    })
    .addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.isSignedIn = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
    })
    .addCase(login.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    })
    .addCase(refreshUser.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    })
    .addCase(refreshUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.isSignedIn = true;
      state.user = action.payload;
    })
    .addCase(refreshUser.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    })
});

export const authReducer = authSlice.reducer;







