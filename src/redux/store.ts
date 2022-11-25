import { configureStore } from '@reduxjs/toolkit';

import { useDispatch } from 'react-redux';
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

export const useAppDispatch: () => AppDispatchType = useDispatch;

export default store;
