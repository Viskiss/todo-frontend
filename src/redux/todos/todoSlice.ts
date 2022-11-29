import { createSlice, createSelector } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { TodoType } from '../../types/types';
import { FilterTodoENUM } from '../../types/types';
import type { StateType } from '../store';
import storage from '../../utility/storage';

const initialState = () => ({
  todos: storage.todos.getItem() || [] as TodoType[],
  filter: storage.todosFilter.getItem() || FilterTodoENUM.ACTIVE,
});

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, { payload }: PayloadAction<string>) => {
      const newTodo: TodoType = {
        id: Date.now(),
        value: payload,
        completed: false,
      };
      state.todos.push(newTodo);
      storage.todos.setItem(state.todos);
    },

    deleteTodo: (state, { payload }: PayloadAction<number>) => {
      const index = state.todos.findIndex((item) => item.id === payload);
      state.todos.splice(index, 1);
      storage.todos.setItem(state.todos);
    },

    completeTodo: (
      state,
      { payload }: PayloadAction<{ id: number; completed: boolean }>,
    ) => {
      const index = state.todos.findIndex((item) => item.id === payload.id);
      state.todos[index].completed = payload.completed;
      storage.todos.setItem(state.todos);
    },

    editTodo: (
      state,
      {
        payload,
      }: PayloadAction<{ id: number; value: string; completed: boolean }>,
    ) => {
      const index = state.todos.findIndex((item) => item.id === payload.id);
      state.todos[index].value = payload.value;
      state.todos[index].completed = payload.completed;
      storage.todos.setItem(state.todos);
    },

    setFilter: (state, { payload }: PayloadAction<FilterTodoENUM>) => {
      state.filter = payload;
      storage.todosFilter.setItem(payload);
    },
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

    return { filteredTodoList, activeCount, completedCount: todos.length - activeCount };
  },
);

export const todoSliceActions = todoSlice.actions;

export default todoSlice.reducer;
