import type { AxiosResponse } from 'axios';
import api from './axios';
import type { TodoType } from '../types/types';

export default class TodosService {
  static fetchTodos(): Promise<AxiosResponse<TodoType[]>> {
    return api.get<TodoType[]>('/todos');
  }

  static deleteTodo(id: number): Promise<AxiosResponse<TodoType>> {
    return api.delete<TodoType>(`/todos/:${id}`);
  }

  static updateTodo(id: number, value: string): Promise<AxiosResponse<TodoType>> {
    return api.patch<TodoType>(`/todos/${id}`, { id, value });
  }

  static addTodo(todo: TodoType): Promise<AxiosResponse<TodoType>> {
    return api.post<TodoType>('/todos', { todo });
  }
}
