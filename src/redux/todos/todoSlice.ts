import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { TodoType } from '../../types/types';
import { FilterTodoENUM } from '../../types/types';
import storage from '../../utility/storage';
import { createTodoThunk, deleteTodoThunk, getTodosThunk, updateTodoThunk } from './todoThunks';

const initialState = () => ({
  todos: [] as TodoType[],
  filter: FilterTodoENUM.ACTIVE,
  loading: false,
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
        state.loading = false;
      }
    });

    // builder.addCase(getTodos.pending, (state, action) => {
    //   if (action.payload) {
    //     state.loading = true;
    //   }
    // });

    builder.addCase(deleteTodoThunk.fulfilled, (state, action) => {
      if (action.payload) {
        state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      }
    });

    builder.addCase(updateTodoThunk.fulfilled, (state, action) => {
      if (action.payload) {
        const index = state.todos.findIndex((item) => item.id === action.payload.id);
        state.todos[index].title = action.payload.title;
        state.todos[index].completed = action.payload.completed;
      }
    });

    builder.addCase(createTodoThunk.fulfilled, (state, action) => {
      if (action.payload) {
        state.todos.push(action.payload);
      }
    });
  },

});

export const todoSliceActions = todoSlice.actions;

export default todoSlice.reducer;
