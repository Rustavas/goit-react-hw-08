import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

const instance = axios.create({
  baseURL: "https://connections-api.herokuapp.com",
})

export const setToken = (token) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export const clearToken = () => {
  instance.defaults.headers.common.Authorization = "";
}

export const register = createAsyncThunk(
  "auth/register",
  async (formData, thunkApi) => {
    try {
      const { data } = await instance.post("/users/signup", formData);
      console.log("register: ", data);
      setToken(data.token);
      return data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
)

export const login = createAsyncThunk(
  "auth/login",
  async (formData, thunkApi) => {
    try {
      const { data } = await instance.post("/users/login", formData);
      console.log("login: ", data);
      setToken(data.token);
      return data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
)
