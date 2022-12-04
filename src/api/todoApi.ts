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

// export default class TodosService {
//   static fetchTodos(filter = FilterTodoENUM.ACTIVE) {
//     return api.get<TodoType[]>('/todos', { params: { filter } });
//   }

//   static deleteTodo(id: number): Promise<AxiosResponse<TodoType>> {
//     return api.delete<TodoType>(`/todos/${id}`);
//   }

//   static updateTodo(id: number, fields: Omit<TodoType, 'id'>): Promise<AxiosResponse<TodoType>> {
// return api.patch<TodoType>(`/todos/${id}`, { value: fields.value, completed: fields.completed });
//   }

//   static addTodo(value: string): Promise<AxiosResponse<TodoType>> {
//     return api.post<TodoType>('/todos', { value });
//   }
// }

export default {
  fetchTodos, createTodo, updateTodo, deleteTodo,
};
