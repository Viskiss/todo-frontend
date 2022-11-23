import { configureStore } from "@reduxjs/toolkit";

import { useDispatch } from "react-redux";
import { StorageService } from "./localStorage";
import todoReducer from "./todos/todoSlice";

const store = configureStore({
  reducer: {
    todoData: todoReducer,
  },
  devTools: true,
  preloadedState: StorageService.getItem("REDUX_STORAGE"),
});

type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
