import StyleTodos from './Todos.styles';

import TodoItem from './components/TodoItem/TodoItem';
import FilterButtons from './components/FilterButtons/FilterButtons';
import FormAddTodo from './components/FormAddTodo/FormAddTodo';
import { filterTodosSelector } from '../../redux/todos/todoSlice';
import { useAppSelector } from '../../redux/store';

const Todos: React.FC = () => {
  const todos = useAppSelector(filterTodosSelector);

  return (
    <StyleTodos>
      <div className="container">
        <FormAddTodo />
        <FilterButtons count={todos.activeCount} />
        <ul className="todos-list">
          {todos.filteredTodos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      </div>
    </StyleTodos>
  );
};

export default Todos;
