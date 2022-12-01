import { createSlice, createSelector } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { TodoType } from '../../types/types';
import { FilterTodoENUM } from '../../types/types';
import type { StateType } from '../store';
import storage from '../../utility/storage';
import { addTodo, deleteTodo, getTodos, updateTodo } from './todoThunks';

const initialState = () => ({
  todos: [] as TodoType[],
  filter: storage.todosFilter.getItem() || FilterTodoENUM.ACTIVE,
  loading: '',
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
    builder.addCase(getTodos.fulfilled, (state, action) => {
      if (action.payload) {
        state.todos = action.payload;
        state.loading = 'end';
      }
    });

    builder.addCase(deleteTodo.fulfilled, (state, action) => {
      if (action.payload) {
        state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        state.loading = 'end';
      }
    });

    builder.addCase(updateTodo.fulfilled, (state, action) => {
      if (action.payload) {
        const index = state.todos.findIndex((item) => item.id === action.payload.id);
        state.todos[index].value = action.payload.value;
        state.todos[index].completed = action.payload.completed;
        state.loading = 'end';
      }
    });

    builder.addCase(addTodo.fulfilled, (state, action) => {
      if (action.payload) {
        state.todos.push(action.payload);
        state.loading = 'end';
      }
    });
  },

});

export const filterTodosSelector = createSelector(
  (store: StateType) => store.todoData.todos,
  (store: StateType) => store.todoData.filter,
  (todos, filter) => {
    let activeCount = 0;
    const filteredTodoList = todos.filter((todo) => {
      if (!todo.completed) {
        activeCount++;
      }
      switch (filter) {
        case FilterTodoENUM.ACTIVE:
          return !todo.completed;
        case FilterTodoENUM.COMPLETED:
          return todo.completed;
        default:
          return todos;
      }
    });

    return { filter, filteredTodoList, activeCount, completedCount: todos.length - activeCount };
  },
);

export const todoSliceActions = todoSlice.actions;

export default todoSlice.reducer;
