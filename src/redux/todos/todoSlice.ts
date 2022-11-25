import { createSlice, createSelector } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { TodoType } from '../../types/types';
import { FilterTodoENUM } from '../../types/types';

const initialState = {
  todos: [] as TodoType[],
  filter: FilterTodoENUM.ACTIVE,
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo: TodoType = {
        id: Date.now(),
        value: action.payload,
        completed: false,
      };
      state.todos.push(newTodo);
    },

    deleteTodo: (state, { payload }: PayloadAction<number>) => {
      const index = state.todos.findIndex((item) => item.id === payload);
      state.todos.splice(index, 1);
    },

    completeTodo: (
      state,
      { payload }: PayloadAction<{ id: number; completed: boolean }>,
    ) => {
      const index = state.todos.findIndex((item) => item.id === payload.id);
      state.todos[index].completed = payload.completed;
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
    },

    filterTodo: (state, { payload }: PayloadAction<FilterTodoENUM>) => {
      state.filter = payload;
    },
  },
});

export const filterTodosSelector = createSelector(
  (store: { todoData: { todos: TodoType[] } }) => store.todoData.todos,
  (store: { todoData: { filter: FilterTodoENUM } }) => store.todoData.filter,
  (todos, filter) => {
    let count = 0;
    let filteredTodos = todos.filter((item) => {
      if (item.completed) {
        count++;
      }
      return { filteredTodos: count };
    });
    if (filter === FilterTodoENUM.COMPLETED) {
      filteredTodos = todos.filter((item) => item.completed);
      return { filteredTodos, activeCount: count };
    }
    if (filter === FilterTodoENUM.ACTIVE) {
      filteredTodos = todos.filter((item) => !item.completed);
      return { filteredTodos, activeCount: count };
    }
    return { filteredTodos: todos, activeCount: count };
  },
);

export const todoSliceActions = todoSlice.actions;

export default todoSlice.reducer;
