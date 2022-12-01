import type { AxiosResponse } from 'axios';
import { FilterTodoENUM, type TodoType } from '../types/types';
import api from './axios';

export default class TodosService {
  static fetchTodos(filter = FilterTodoENUM.ACTIVE) {
    return api.get<TodoType[]>('/todos', { params: { filter } });
  }

  static deleteTodo(id: number): Promise<AxiosResponse<TodoType>> {
    return api.delete<TodoType>(`/todos/${id}`);
  }

  static updateTodo(id: number, fields: Omit<TodoType, 'id'>): Promise<AxiosResponse<TodoType>> {
    return api.patch<TodoType>(`/todos/${id}`, { value: fields.value, completed: fields.completed });
  }

  static addTodo(value: string): Promise<AxiosResponse<TodoType>> {
    return api.post<TodoType>('/todos', { value });
  }
}
