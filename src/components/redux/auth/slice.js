import { createSelector, createSlice, isAnyOf } from "@reduxjs/toolkit";
import { login, logout, refreshUser, register } from "./operations";


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
    .addCase(register.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.isSignedIn = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
    })
    .addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.isSignedIn = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
    })
    .addCase(refreshUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.isSignedIn = true;
      state.user = action.payload;
    })
    .addCase(logout.fulfilled, () => {
      return INITAL_STATE;
    })
    .addMatcher(isAnyOf(
      register.pending,
      login.pending,
      refreshUser.pending,
      logout.pending,
      ), (state) => {
        state.isLoading = true;
        state.isError = false;
      } 
    )
    .addMatcher(isAnyOf(
      register.rejected,
      login.rejected, 
      refreshUser.rejected, 
      logout.rejected, 
      ), (state) => {
        state.isLoading = false;
        state.isError = true;
      }
    )
});

export const authReducer = authSlice.reducer;







