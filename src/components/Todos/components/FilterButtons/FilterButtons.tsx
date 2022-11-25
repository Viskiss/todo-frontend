import Button from '../../../Button/Button';

import { useAppDispatch } from '../../../../redux/store';
import { todoSliceActions } from '../../../../redux/todos/todoSlice';
import { FilterTodoENUM } from '../../../../types/types';

interface IFilterButtons {
  count: number;
}

const FilterButtons: React.FC<IFilterButtons> = ({ count }) => {
  const dispatch = useAppDispatch();

  const filterTodos = (filterName: FilterTodoENUM) => {
    dispatch(todoSliceActions.filterTodo(filterName));
  };

  return (
    <div>
      <Button
        isActive={false}
        onClick={() => filterTodos(FilterTodoENUM.ACTIVE)}
      >
        ACTIVE
      </Button>
      <Button
        isActive={count > 0}
        onClick={() => filterTodos(FilterTodoENUM.COMPLETED)}
      >
        COMPLETED {count}
      </Button>
    </div>
  );
};

export default FilterButtons;
