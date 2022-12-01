import { createAsyncThunk } from '@reduxjs/toolkit';
import type { TodoType, FilterTodoENUM } from '../../types/types';

import TodosService from '../../api/todoApi';

export const getTodos = createAsyncThunk('todos/getTodo', async (filter?: FilterTodoENUM) => {
  try {
    const todos = await TodosService.fetchTodos(filter);
    return todos.data;
  } catch (error) {
    return [];
  }
});

export const deleteTodo = createAsyncThunk('todos/deleteTodo', async (id: number, { rejectWithValue }) => {
  try {
    await TodosService.deleteTodo(id);
    return id;
  } catch (error) {
    return rejectWithValue([]);
  }
});

export const updateTodo = createAsyncThunk('todos/updateTodo', async (todoData: TodoType, { rejectWithValue }) => {
  const { id, ...fields } = todoData;
  try {
    const todo = await TodosService.updateTodo(id, fields);
    return todo.data;
  } catch (error) {
    return rejectWithValue([]);
  }
});

export const addTodo = createAsyncThunk('todos/addTodo', async (value: string, { rejectWithValue }) => {
  try {
    const todo = await TodosService.addTodo(value);
    return todo.data;
  } catch (error) {
    return rejectWithValue([]);
  }
});
