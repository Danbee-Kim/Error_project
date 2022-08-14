import login from "./modules/loginSlice";
const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    login: login,
  },
});

export default store;
