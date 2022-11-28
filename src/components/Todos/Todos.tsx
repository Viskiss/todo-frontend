import StyleTodos from './Todos.styles';

import TodoItem from './components/TodoItem';
import FilterButtons from './components/FilterButtons';
import FormAddTodo from './components/FormAddTodo';
import { filterTodosSelector } from '../../redux/todos/todoSlice';
import { useAppSelector } from '../../redux/store';

const Todos: React.FC = () => {
  const todos = useAppSelector(filterTodosSelector);

  return (
    <StyleTodos>
      <div className="container">
        <FormAddTodo />
        <FilterButtons />
        <ul className="todos-list">
          {todos.filteredTodoList.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      </div>
    </StyleTodos>
  );
};

export default Todos;
