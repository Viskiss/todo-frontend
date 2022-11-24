import { createSlice, createSelector } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { FilterTodoENUM, TodoType } from "../../types/types";

export const filterTodosSelector = createSelector(
  (store: { todoData: { todos: TodoType[] } }) => store.todoData.todos,
  (store: { todoData: { filter: FilterTodoENUM } }) => store.todoData.filter,
  (todos, filter) => {
    const todoList = todos.filter((todo: { completed: boolean }) => {
      switch (filter) {
        case FilterTodoENUM.ALL:
          return todos;
        case FilterTodoENUM.ACTIVE:
          return !todo.completed;
        case FilterTodoENUM.COMPLETED:
          return todo.completed;
        default:
          return todos;
      }
    });

    return todoList;
  }
);

const initialState = {
  todos: [] as TodoType[],
  filter: FilterTodoENUM.ALL,
};

const todoSlice = createSlice({
  name: "todos",
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
      { payload }: PayloadAction<{ id: number; completed: boolean }>
    ) => {
      const index = state.todos.findIndex((item) => item.id === payload.id);
      state.todos[index].completed = payload.completed;
    },

    editTodo: (
      state,{payload,}: PayloadAction<{ id: number; value: string; completed: boolean }>
    ) => {
      const index = state.todos.findIndex((item) => item.id === payload.id);
      state.todos[index].value = payload.value;
      state.todos[index].completed = payload.completed;
    },

    filterTodo: (state, {payload}: PayloadAction<FilterTodoENUM>) => {
      state.filter = payload;
    },
  },
});

export const todoSliceActions = todoSlice.actions;

export default todoSlice.reducer;
