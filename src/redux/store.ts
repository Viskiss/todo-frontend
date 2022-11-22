import { configureStore } from "@reduxjs/toolkit";

import { useDispatch, useSelector } from "react-redux";
import todoReducer from "./todos/todoSlice";

const store = configureStore({
  reducer: {
    todoData: todoReducer,
  },
  devTools: true,
});
type StoreType = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

// export const useAppSelector = useSelector<StoreType>
export const useAppDispatch : () => AppDispatch = useDispatch


export default store;
