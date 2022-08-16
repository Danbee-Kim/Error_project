import todos from "./modules/todosSlice";
import login from "./modules/loginSlice";

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    todos: todos,
    login: login,
  },
});

export default store;
