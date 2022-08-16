import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setRefreshTokenToCookie, getRefreshToken } from "../../actions/Cookie";
const initialState = {
  response: "",
};

export const __postInfo = createAsyncThunk(
  "postInfo",
  async (payload, thunkAPI) => {
    try {
      console.log(payload);
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_BASE_URL}/signup`,
        payload
      );
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const __postToken = createAsyncThunk(
  "postToken",
  async (payload, thunkAPI) => {
    try {
      const refresh_token = getRefreshToken();
      console.log(refresh_token);
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_BASE_URL}/tests`,
        "",
        {
          headers: {
            Authorization: refresh_token,
          },
        }
      );
      console.log(response);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __postLogin = createAsyncThunk(
  "postLogin",
  async (payload, thunkAPI) => {
    try {
      console.log(payload);
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_BASE_URL}/login`,
        payload
      );
      const token = response.headers.authorization;
      setRefreshTokenToCookie(token);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
// export const __postCheckId = createAsyncThunk(
//   "postCheckId",
//   async (payload, thunkAPI) => {
//     try {
//       console.log(payload);
//       const response = await axios.post(
//         `${process.env.REACT_APP_SERVER_BASE_URL}/signup/check`,
//         payload
//       );
//       return thunkAPI.fulfillWithValue(response.data);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

export const loginSlice = createSlice({
  name: "loginSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [__postInfo.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__postInfo.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log(action.payload);
      state.response = action.payload;
    },
    [__postInfo.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__postLogin.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__postLogin.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log(action);
      state.reponse = action.payload;
    },
    [__postLogin.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default loginSlice.reducer;
