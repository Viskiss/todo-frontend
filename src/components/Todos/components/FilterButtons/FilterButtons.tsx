import { useAppDispatch } from "../../../../redux/store";
import { todoSliceActions } from "../../../../redux/todos/todoSlice";
import { FilterTodoENUM } from "../../../../types/types";
import Button from "../../../Button/Button";

const FilterButtons: React.FC = () => {
  const dispatch = useAppDispatch();

  const filterTodos = (filterName: FilterTodoENUM) => {
    dispatch(todoSliceActions.filterTodo(filterName));
  };

  return (
    <div>
      <Button onClick={() => filterTodos(FilterTodoENUM.ALL)} isActive>
        {FilterTodoENUM.ALL}
      </Button>
      <Button onClick={() => filterTodos(FilterTodoENUM.ACTIVE)} isActive>
        {FilterTodoENUM.ACTIVE}
      </Button>
      <Button onClick={() => filterTodos(FilterTodoENUM.COMPLETED)} isActive>
        {FilterTodoENUM.COMPLETED}
      </Button>
    </div>
  );
};

export default FilterButtons;
