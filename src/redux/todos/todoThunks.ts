import { createAsyncThunk } from '@reduxjs/toolkit';
import type { TodoType, FilterTodoENUM } from '../../types/types';

import todoApi from '../../api/todoApi';

export const getTodosThunk = createAsyncThunk('todos/getTodo', async (filter?: FilterTodoENUM) => {
  try {
    const todos = await todoApi.fetchTodos(filter);
    return todos.data;
  } catch (error) {
    return [];
  }
});

export const deleteTodoThunk = createAsyncThunk('todos/deleteTodo', async (id: number, { rejectWithValue }) => {
  try {
    // eslint-disable-next-line no-console
    console.log(id);
    await todoApi.deleteTodo(id);
    return id;
  } catch (error) {
    return rejectWithValue([]);
  }
});

export const updateTodoThunk = createAsyncThunk('todos/updateTodo', async (todoData: TodoType, { rejectWithValue }) => {
  const { id, ...fields } = todoData;
  try {
    const todo = await todoApi.updateTodo(id, fields);
    return todo.data;
  } catch (error) {
    return rejectWithValue([]);
  }
});

export const createTodoThunk = createAsyncThunk('todos/addTodo', async (title: string, { rejectWithValue }) => {
  try {
    const todo = await todoApi.createTodo(title);
    return todo.data;
  } catch (error) {
    return rejectWithValue([]);
  }
});
