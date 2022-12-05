import { FilterTodoENUM, type TodoType } from '../types/types';
import api from './api';

const todosPath = '/todos';

const fetchTodos = (filter = FilterTodoENUM.ACTIVE) => {
  return api.get<TodoType[]>(todosPath, { params: { filter } });
};

const createTodo = (title: string) => {
  return api.post<TodoType>(todosPath, { title });
};

const updateTodo = (id: number, fields: Omit<TodoType, 'id'>) => {
  return api.patch<TodoType>(`${todosPath}/${id}`, { title: fields.title, completed: fields.completed });
};

const deleteTodo = (id: number) => {
  return api.delete<TodoType>(`${todosPath}/${id}`);
};

export default {
  fetchTodos, createTodo, updateTodo, deleteTodo,
};
