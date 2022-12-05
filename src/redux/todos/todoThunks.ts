import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AxiosError } from 'axios';
import type { TodoType, FilterTodoENUM } from '../../types/types';

import todoApi from '../../api/todoApi';

export const getTodosThunk = createAsyncThunk('todos/getTodo', async (filter: FilterTodoENUM, { rejectWithValue }) => {
  try {
    const todos = await todoApi.fetchTodos(filter);
    return todos.data;
  } catch (err) {
    const error = err as AxiosError;
    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});

export const deleteTodoThunk = createAsyncThunk('todos/deleteTodo', async (id: number, { rejectWithValue }) => {
  try {
    await todoApi.deleteTodo(id);
    return id;
  } catch (err) {
    const error = err as AxiosError;
    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});

export const updateTodoThunk = createAsyncThunk('todos/updateTodo', async (todoData: TodoType, { rejectWithValue }) => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { _id, ...fields } = todoData;
  try {
    const todo = await todoApi.updateTodo(_id, fields);
    return todo.data;
  } catch (err) {
    const error = err as AxiosError;
    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});

export const createTodoThunk = createAsyncThunk('todos/addTodo', async (title: string, { rejectWithValue }) => {
  try {
    const todo = await todoApi.createTodo(title);
    return todo.data;
  } catch (err) {
    const error = err as AxiosError;
    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});
