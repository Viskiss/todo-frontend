import { useEffect } from 'react';
import StyleTodos from './Todos.styles';

import TodoItem from './components/TodoItem';
import FilterButtons from './components/FilterButtons';
import FormAddTodo from './components/FormAddTodo';
import { filterTodosSelector, todoSliceActions } from '../../redux/todos/todoSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import TodosService from '../../api/todoApi';
import { getTodos } from '../../redux/todos/todoThunks';

const Todos: React.FC = () => {
  const { filteredTodoList, filter } = useAppSelector(filterTodosSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTodos(filter));
  }, [dispatch, filter]);

  return (
    <StyleTodos>
      <div className="container">
        <FormAddTodo />
        <FilterButtons />
        <ul className="todos-list">
          {filteredTodoList.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      </div>
    </StyleTodos>
  );
};

export default Todos;
