import { useAppDispatch } from "../../../../redux/store";
import { todoSliceActions } from "../../../../redux/todos/todoSlice";
import { FilterTodoENUM, TodoType } from "../../../../types/types";
import Button from "../../../Button/Button";

interface IFilterButtons {
  filter: FilterTodoENUM;
  todos: TodoType[]
}

const FilterButtons: React.FC<IFilterButtons> = ({ filter, todos  }) => {
  const dispatch = useAppDispatch();

  const filterTodos = (filterName: FilterTodoENUM) => {
    dispatch(todoSliceActions.filterTodo(filterName));
  };

  return (
    <div>
      {(Object.keys(FilterTodoENUM) as (keyof typeof FilterTodoENUM)[]).map(
        (key) => (
          <Button
          key={key}
            isActive={FilterTodoENUM[key] === filter}
            onClick={() => filterTodos(FilterTodoENUM[key])}
          >
            {key} {FilterTodoENUM[key] === filter ? todos.length : ""}
          </Button>
        )
      )}
    </div>
  );
};

export default FilterButtons;
