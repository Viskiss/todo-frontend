export type TodoType = {
  id: number;
  value: string;
  completed: boolean;
};

export enum FilterTodoENUM {
  ACTIVE = 'ACTIVE',
  COMPLETED = 'COMPLETED',
}
