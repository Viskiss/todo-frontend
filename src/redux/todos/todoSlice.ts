import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { TodoType } from '../../types/types';
import { FilterTodoENUM } from '../../types/types';
import storage from '../../utility/storage';
import { createTodoThunk, deleteTodoThunk, getTodosThunk, updateTodoThunk } from './todoThunks';

const initialState = () => ({
  todos: [] as TodoType[],
  filter: FilterTodoENUM.ACTIVE,
  error: '',
});

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {

    setFilter: (state, { payload }: PayloadAction<FilterTodoENUM>) => {
      state.filter = payload;
      storage.todosFilter.setItem(payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTodosThunk.fulfilled, (state, action) => {
      if (action.payload) {
        state.todos = action.payload;
      }
    });

    builder.addCase(getTodosThunk.rejected, (state, action) => {
      // eslint-disable-next-line no-console
      console.log(action.error.message);
      state.error = action.error.message!;
    });

    builder.addCase(deleteTodoThunk.fulfilled, (state, action) => {
      if (action.payload) {
        state.todos = state.todos.filter((todo) => todo._id !== action.payload);
      }
    });

    builder.addCase(deleteTodoThunk.rejected, (state, action) => {
      // eslint-disable-next-line no-console
      console.log(action.error.message);
      state.error = action.error.message!;
    });

    builder.addCase(updateTodoThunk.fulfilled, (state, action) => {
      if (action.payload) {
        const index = state.todos.findIndex((item) => item._id === action.payload._id);
        state.todos[index].title = action.payload.title;
        state.todos[index].completed = action.payload.completed;
      }
    });

    builder.addCase(updateTodoThunk.rejected, (state, action) => {
      // eslint-disable-next-line no-console
      console.log(action.error.message);
      state.error = action.error.message!;
    });

    builder.addCase(createTodoThunk.fulfilled, (state, action) => {
      if (action.payload) {
        state.todos.push(action.payload);
      }
    });

    builder.addCase(createTodoThunk.rejected, (state, action) => {
      // eslint-disable-next-line no-console
      console.log(action.error.message);
      state.error = action.error.message!;
    });
  },

});

export const todoSliceActions = todoSlice.actions;

export default todoSlice.reducer;
