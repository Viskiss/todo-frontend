export type TodoType = {
  id: number;
  value: string;
  completed: boolean;
};


export enum FilterTodoENUM {
  ALL = "ALL",
  ACTIVE = "ACTIVE",
  COMPLETED = "COMPLETED",
};

// export type InitialStateTodos = {
//   todos: TodoItem[],
//   filter: FilterTodo
// };

