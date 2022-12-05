import { FilterTodoENUM, type TodoType } from '../types/types';
import api from './api';

const todosPath = '/todos';

const fetchTodos = (filter = FilterTodoENUM.ACTIVE) => {
  return api.get<TodoType[]>(todosPath, { params: { filter } });
};

const createTodo = (title: string) => {
  return api.post<TodoType>(todosPath, { title });
};

const updateTodo = (_id: number, fields: Omit<TodoType, '_id'>) => {
  return api.patch<TodoType>(`${todosPath}/${_id}`, { title: fields.title, completed: fields.completed });
};

const deleteTodo = (_id: number) => {
  return api.delete<TodoType>(`${todosPath}/${_id}`);
};

export default {
  fetchTodos, createTodo, updateTodo, deleteTodo,
};
