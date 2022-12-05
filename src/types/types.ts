export type TodoType = {
  _id: number;
  title: string;
  completed: boolean;
};

export enum FilterTodoENUM {
  ACTIVE = 'ACTIVE',
  COMPLETED = 'COMPLETED',
}
