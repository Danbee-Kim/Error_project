import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  comments: [],
  isLoading: false,
  error: null,
};

export const __createComments = createAsyncThunk(
  "createComments",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.post(
        `${process.env.REACT_APP_SERVER_BASE_URL}/comment`,
        payload
      );
      // console.log("data@#", data);
      return thunkAPI.fulfillWithValue(data);
    } catch (e) {
      // console.log("error!@", e);
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const __readComments = createAsyncThunk(
  "readComments",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get(
        `${process.env.REACT_APP_SERVER_BASE_URL}/comment/${payload.id}`
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);

export const __deleteComments = createAsyncThunk(
  "deleteComments",
  async (payload, thunkAPI) => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_SERVER_BASE_URL}/comment/${payload}`
      );
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
    [__createComments.pending]: (state) => {
      state.comments.isLoading = true;
    },
    [__createComments.fulfilled]: (state, action) => {
      state.comments.isLoading = false;
      // console.log(state.comments);
      // console.log(action.payload);
      state.comments.push(action.payload);
    },
    [__createComments.rejected]: (state, action) => {
      state.comments.isLoading = false;
      state.error = action.payload;
    },

    [__readComments.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__readComments.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.comments = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
    },
    [__readComments.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },

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
