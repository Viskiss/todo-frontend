import Button from '../Button';

import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { filterTodosSelector, todoSliceActions } from '../../../redux/todos/todoSlice';
import { FilterTodoENUM } from '../../../types/types';

const FilterButtons: React.FC = () => {
  const dispatch = useAppDispatch();

  const count = useAppSelector(filterTodosSelector);

  const filterTodos = (filterName: FilterTodoENUM) => {
    dispatch(todoSliceActions.setFilter(filterName));
  };

  return (
    <div>
      <Button
        isActive
        onClick={() => filterTodos(FilterTodoENUM.ACTIVE)}
      >
        ACTIVE {count.activeCount}
      </Button>
      <Button
        isActive
        onClick={() => filterTodos(FilterTodoENUM.COMPLETED)}
      >
        COMPLETED {count.completedCount}
      </Button>

    </div>
  );
};

export default FilterButtons;
