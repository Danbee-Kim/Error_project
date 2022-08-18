import todos from "./modules/todosSlice";
import login from "./modules/loginSlice";
import comments from "./modules/commentsSlice";

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    todos: todos,
    // login: login,
    comments: comments,
  },
});

export default store;
