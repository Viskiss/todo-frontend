import { createAsyncThunk } from '@reduxjs/toolkit';
import type { TodoType, FilterTodoENUM } from '../../types/types';

import fetchTodos from '../../api/todoApi';

export const getTodosThunk = createAsyncThunk('todos/getTodo', async (filter?: FilterTodoENUM) => {
  try {
    const todos = await fetchTodos(filter);
    return todos.data;
  } catch (error) {
    return [];
  }
});

export const deleteTodoThunk = createAsyncThunk('todos/deleteTodo', async (id: number, { rejectWithValue }) => {
  try {
    deleteTodo(id);
    return id;
  } catch (error) {
    return rejectWithValue([]);
  }
});

export const updateTodoThunk = createAsyncThunk('todos/updateTodo', async (todoData: TodoType, { rejectWithValue }) => {
  const { id, ...fields } = todoData;
  try {
    const todo = await updateTodo(id, fields);
    return todo.data;
  } catch (error) {
    return rejectWithValue([]);
  }
});

export const createTodoThunk = createAsyncThunk('todos/addTodo', async (value: string, { rejectWithValue }) => {
  try {
    const todo = await createTodo(value);
    return todo.data;
  } catch (error) {
    return rejectWithValue([]);
  }
});
