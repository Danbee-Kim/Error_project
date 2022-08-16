import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  Info: [],
  isDone: false,
  error: null,
};

export const __postInfo = createAsyncThunk(
  "postInfo",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.post("http://api/signup", payload);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const __postLogin = createAsyncThunk(
  "postInfo",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.post("http://api/login", payload);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const __postCheckId = createAsyncThunk(
  "postInfo",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.post("http://api/signup/check", payload);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const loginSlice = createSlice({
  name: "loginSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [__postInfo.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__postInfo.fulfilled]: (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.comments = action.payload;
    },
    [__postInfo.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default loginSlice.reducer;
