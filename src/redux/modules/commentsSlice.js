import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  comments: [],
};

export const __deleteComments = createAsyncThunk(
  "deleteComments",
  async (payload, thunkAPI) => {
    try {
      await axios.delete(`http://localhost:3001/comments/${payload}`);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const commentsSlice = createSlice({
  name: "commentsSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [__deleteComments.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__deleteComments.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.comments = state.comments.filter(
        (comment) => comment.id !== payload
      );
    },
    [__deleteComments.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default commentsSlice.reducer;
