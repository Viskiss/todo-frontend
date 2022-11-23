import StyleTodos from "./Todos.styles";

import TodoItem from "./components/TodoItem/TodoItem";
import FilterButtons from "./components/FilterButtons/FilterButtons";
import FormAddTodo from "./components/FormAddTodo/FormAddTodo";
import { useSelector } from "react-redux";
import { filterTodosSelector } from "../../redux/todos/todoSlice";

const Todos = () => {
  const todos = useSelector(filterTodosSelector);

  return (
    <StyleTodos>
      <div className="container">
        <FormAddTodo />
        <FilterButtons />
        <ul className="todos-list">
          {todos.map(
            (todo) => (
              <TodoItem key={todo.id} todo={todo} />
            )
          )}
        </ul>
      </div>
    </StyleTodos>
  );
};

export default Todos;
