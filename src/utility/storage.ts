import type { FilterTodoENUM, TodoType } from '../types/types';

class StorageItem<D> {
  key: string;

  defaultValue: D | null;

  constructor(key: string, defaultValue?: D) {
    this.key = key;
    this.defaultValue = defaultValue ?? null;
  }

  setItem(data: D) {
    localStorage.setItem(this.key, JSON.stringify(data));
  }

  getItem(): D | null {
    try {
      const storedItem = localStorage.getItem(this.key);
      const parsedItem = JSON.parse(storedItem as string);
      return parsedItem || this.defaultValue;
    } catch {
      return this.defaultValue;
    }
  }
}

export default {
  todos: new StorageItem<TodoType[]>('todos'),
  todosFilter: new StorageItem<FilterTodoENUM>('filter'),
};
