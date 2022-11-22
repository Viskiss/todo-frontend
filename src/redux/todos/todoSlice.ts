import { createSlice, createSelector } from "@reduxjs/toolkit";
import { FilterTodoENUM, TodoType } from "../../types/types";
import { PayloadAction } from "@reduxjs/toolkit";


export const filterTodosSelector = createSelector(
  (store: { todoData: { todos: [] } }) => store.todoData.todos,
  (store: { todoData: any[] }) => store.todoData.filter,
  (todos: [], filter: {}) => {
    const todoList = todos.filter((todo: { completed: boolean }) => {
      switch (filter) {
        case "ALL":
          return todos;
        case "ACTIVE":
          return !todo.completed;
        case "COMPLETED":
          return todo.completed;
      }
    });
    return todoList;
  }
);

const getInitialState = () =>( {
todos:[] as TodoType[],
filter: FilterTodoENUM.ALL ,
})
 
const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: JSON.parse(localStorage.getItem("todos") || "") || [],
    filter: FilterTodoENUM.ALL,
  },
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

    // completeTodo: (state, action: PayloadAction<TodoItem>) => {
    //   const index = state.todos.findIndex(
    //     (item: { id: any }) => item.id === action.payload.id
    //   );

    //   state.todos[index].completed = action.payload.completed;
    // },

    editTodo: (state, action: PayloadAction<{id: number; data: Partial<Omit<TodoType, "id">>}>) => {
      const index = state.todos.findIndex(
        (item: { id: any }) => item.id === action.payload.id
      );
      state.todos[index].value = action.payload;
      state.todos[index].completed = action.payload;
    },

    filterTodo: (state, action: PayloadAction<FilterTodoENUM>) => {
      state.filter = action.payload;
    },
  },
});

export const todoSliceActions = todoSlice.actions;

export default todoSlice.reducer;
