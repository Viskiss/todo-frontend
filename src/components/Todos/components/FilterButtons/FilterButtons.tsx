import { useAppDispatch } from "../../../../redux/store";
import { todoSliceActions } from "../../../../redux/todos/todoSlice";
import { FilterTodoENUM } from "../../../../types/types";
import Button from "../../../Button/Button";

interface IFilterButtons {
  filter: FilterTodoENUM;
}

const FilterButtons: React.FC<IFilterButtons> = ({ filter }) => {
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
            {key}
          </Button>
        )
      )}
    </div>
  );
};

export default FilterButtons;
