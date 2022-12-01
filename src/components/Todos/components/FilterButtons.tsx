import Button from '../Button';

import { useAppDispatch } from '../../../redux/store';
import { todoSliceActions } from '../../../redux/todos/todoSlice';
import { FilterTodoENUM } from '../../../types/types';

const FilterButtons: React.FC = () => {
  const dispatch = useAppDispatch();

  const filterTodos = (filterName: FilterTodoENUM) => {
    dispatch(todoSliceActions.setFilter(filterName));
  };

  return (
    <div>
      <Button
        isActive
        onClick={() => filterTodos(FilterTodoENUM.ACTIVE)}
      >
        ACTIVE
      </Button>
      <Button
        isActive
        onClick={() => filterTodos(FilterTodoENUM.COMPLETED)}
      >
        COMPLETED
      </Button>

    </div>
  );
};

export default FilterButtons;
