import todos from "./redux/modules/todosSlice";
import login from "./redux/modules/loginSlice";

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    todos: todos,
    login: login,
  },
  
});

export default store;
