export class StorageService {
  static setItem<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  static getItem<T>(key: string): T {
    const item = localStorage.getItem(key);

    return item ? JSON.parse(item) : undefined;
  }
}
