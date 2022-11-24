import { createSlice, createSelector } from "@reduxjs/toolkit";
import { FilterTodoENUM, TodoType } from "../../types/types";
import { PayloadAction } from "@reduxjs/toolkit";

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

    return { todoList, filter };
  }
);

interface SliceState {
  todos: TodoType[];
  filter: FilterTodoENUM;
}

const initialState: SliceState = {
  todos: [],
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

    deleteTodo: (state, action: PayloadAction<number>) => {
      const index = state.todos.findIndex(
        (item: { id: any }) => item.id === action.payload
      );
      state.todos.splice(index, 1);
    },

    completeTodo: (
      state,
      action: PayloadAction<{ id: number; completed: boolean }>
    ) => {
      const index = state.todos.findIndex(
        (item: { id: any }) => item.id === action.payload.id
      );
      state.todos[index].completed = action.payload.completed;
    },

    editTodo: (
      state,
      action: PayloadAction<{ id: number; value: string; completed: boolean }>
    ) => {
      const index = state.todos.findIndex(
        (item: { id: any }) => item.id === action.payload.id
      );
      state.todos[index].value = action.payload.value;
      state.todos[index].completed = action.payload.completed;
    },

    filterTodo: (state, action: PayloadAction<FilterTodoENUM>) => {
      state.filter = action.payload;
    },
  },
});

export const todoSliceActions = todoSlice.actions;

export default todoSlice.reducer;
