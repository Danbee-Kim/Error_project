import todos from "./modules/loginSlice";
import login from "./modules/todosSlice";

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    todos: todos,
    login: login,
  },
});

export default store;
