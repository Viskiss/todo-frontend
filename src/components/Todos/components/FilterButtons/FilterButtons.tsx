import { useAppDispatch } from "../../../../redux/store";
import { todoSliceActions } from "../../../../redux/todos/todoSlice";
import { FilterTodoENUM } from "../../../../types/types";
import Button from "../../../Button/Button";

const FilterButtons = (props: { filter: string; setFilter: any; count:number | string; countActive: number | string; countCompleted: number | string; }) => {
  const { filter, setFilter, count, countActive, countCompleted } = props;

  const buttonData = [
    { title: FilterTodoENUM.ALL, count: count },
    { title: FilterTodoENUM.ACTIVE, count: countActive },
    { title: FilterTodoENUM.COMPLETED, count: countCompleted },
  ];

  const dispatch = useAppDispatch();

  const filterTodos = (title: FilterTodoENUM) => {
    setFilter(title);
    dispatch(todoSliceActions.filterTodo(title));
  };

  return (
    <div>
      {buttonData.map((item) => (
        <Button
          key={item.title}
          isActive={item.title === filter}
          onClick={() => filterTodos(item.title)}
        >
          {item.title} {item.count}
        </Button>
      ))}
    </div>
  );
};

export default FilterButtons;
