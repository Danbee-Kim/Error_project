import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  todos: [],
};

export const __postTodos = createAsyncThunk(
  "todos/postTodos",
  async (payload, thunkAPI) => {
    console.log(payload, "payload!!!!!!!!!!!!!!!!!!");
    try {
      const data = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/api/articles`,
        payload
        // {
        //   title: payload.title,
        //   content:payload.desc
        // }
      );
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getTodos = createAsyncThunk(
  "todos/getTodos",
  async (payload, thunkAPI) => {
    // let token = localStorage.getItem("token");
    // console.log("token!!!!:", token);
    try {
      const data = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/api/articles`
        // {
        //   headers: {
        //     token: token,
        //   },
        // }
      );
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __updateTodos = createAsyncThunk(
  "todos/updateTodos",
  async (payload, thunkAPI) => {
    try {
      await axios.patch(
        `${process.env.REACT_APP_BASE_URL}/api/articles/${payload.id}`,
        {
          content: payload.content,
        }
      );
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deleteTodos = createAsyncThunk(
  "todos/deleteTodos",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.delete(
        `${process.env.REACT_APP_BASE_URL}/api/articles/${payload}`,
        payload
      );
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: {
    [__postTodos.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__postTodos.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.todos = [...state.todos, action.payload];
    },
    [__postTodos.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },

    [__getTodos.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__getTodos.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.todos = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
    },
    [__getTodos.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },

    [__updateTodos.pending]: (state) => {
      state.isLoading = true;
    },
    [__updateTodos.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.todos = state.todos.map((todo) =>
        todo.id === payload.id ? { ...todo, content: payload.content } : todo
      );
    },
    [__updateTodos.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },

    [__deleteTodos.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__deleteTodos.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    [__deleteTodos.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
  },
});

export default todosSlice.reducer;
