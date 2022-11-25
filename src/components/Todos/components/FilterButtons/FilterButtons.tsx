import { useAppDispatch } from '../../../../redux/store';
import { todoSliceActions } from '../../../../redux/todos/todoSlice';
import type { TodoType } from '../../../../types/types';
import { FilterTodoENUM } from '../../../../types/types';
import Button from '../../../Button/Button';

interface IFilterButtons {
  todos: TodoType[];
  filter: FilterTodoENUM;
}

const FilterButtons: React.FC<IFilterButtons> = ({ todos, filter }) => {
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
            {key} {FilterTodoENUM[key] === filter ? todos.length : ''}
          </Button>
        ),
      )}
    </div>
  );
};

export default FilterButtons;
