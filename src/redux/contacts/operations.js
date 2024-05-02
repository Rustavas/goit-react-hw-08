import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../auth/operations";



export const contacts = createAsyncThunk(
  "contacts/getAll",
  async (_, thunkApi) => {
    try {
      const { data } = await instance.get("/contacts");
      return data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
)
export const addContact = createAsyncThunk(
  "contacts/addNew",
  async (formData, thunkApi) => {
    try {
      const { data } = await instance.post("/contacts", formData);
      return data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
)
export const deleteContact = createAsyncThunk(
  "contacts/delete",
  async (contactId, thunkApi) => {
    try {
      const { data } = await instance.delete(`/contacts/${contactId}`);
      return data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
)