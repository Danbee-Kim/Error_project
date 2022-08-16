import todos from "../redux/modules/todosSlice";
import login from "../redux/modules/loginSlice";
import logger from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    todos: todos,
    login: login,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
