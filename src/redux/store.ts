import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import { StorageService } from './localStorage';
import todoReducer from './todos/todoSlice';

const store = configureStore({
  devTools: true,
  reducer: {
    todoData: todoReducer,
  },
  preloadedState: StorageService.getItem('REDUX_STORAGE'),
});

type AppDispatchType = typeof store.dispatch;
type AppSelectorType = ReturnType<typeof store.getState>;

export const useAppSelector: TypedUseSelectorHook<AppSelectorType> = useSelector;
export const useAppDispatch: () => AppDispatchType = useDispatch;

export default store;
