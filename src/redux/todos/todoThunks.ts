import { createAsyncThunk } from '@reduxjs/toolkit';
import TodosService from '../../api/todoApi';

export const getTodos = createAsyncThunk('todos/getTodo', async (_, { rejectWithValue }) => {
  try {
    const todos = await TodosService.fetchTodos();
    return todos;
  } catch (error) {
    return rejectWithValue([]);
  }
});

// const addTodo = createAsyncThunk('todo/addTodo', async (payload) => {
//   const response = await fetch('http://localhost:3333/todos', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ value: payload.value }),
//   });
//   if (response.ok) {
//     const todo = await response.json();
//     return todo;
//   }
// });

// const updateTodo = createAsyncThunk('todo/updateTodo', async (payload) => {
//   const response = await fetch('http://localhost:3333/todos', {
//     method: 'PACH',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ value: payload.value, completed: payload.completed }),
//   });
//   if (response.ok) {
//     const todo = await response.json();
//     return todo;
//   }
// });

// const deleteTodo = createAsyncThunk('todo/deleteTodo', async (payload) => {
//   const response = await fetch('http://localhost:3333/todos', {
//     method: 'DELETE',
//   });
//   if (response.ok) {
//     return { id: payload.id };
//   }
// });
