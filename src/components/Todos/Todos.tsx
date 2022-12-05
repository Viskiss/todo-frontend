import { useEffect } from 'react';
import StyleTodos from './Todos.styles';

import TodoItem from './components/TodoItem';
import FilterButtons from './components/FilterButtons';
import FormAddTodo from './components/FormAddTodo';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { getTodosThunk } from '../../redux/todos/todoThunks';

const Todos: React.FC = () => {
  const error = useAppSelector((state) => state.todoData.error);
  const todos = useAppSelector((state) => state.todoData.todos);
  const filter = useAppSelector((state) => state.todoData.filter);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTodosThunk(filter));
  }, [dispatch, filter]);

  if (error) return (<p> {error}</p>);

  return (
    <StyleTodos>
      <div className="container">
        <FormAddTodo />
        <FilterButtons />
        <ul className="todos-list">
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      </div>
    </StyleTodos>
  );
};

export default Todos;
