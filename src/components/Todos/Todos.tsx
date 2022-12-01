import { useEffect } from 'react';
import axios from 'axios';
import StyleTodos from './Todos.styles';

import TodoItem from './components/TodoItem';
import FilterButtons from './components/FilterButtons';
import FormAddTodo from './components/FormAddTodo';
import { filterTodosSelector, todoSliceActions } from '../../redux/todos/todoSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import TodosService from '../../api/todoApi';

const Todos: React.FC = () => {
  const todos = useAppSelector(filterTodosSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getTodos = async () => {
      const response = await TodosService.fetchTodos();
      dispatch(todoSliceActions.getTodos(response.data));
    };
    getTodos();
  }, [dispatch]);

  // async function getTodos() {
  //   try {
  //     const response = await TodosService.fetchTodos();
  //     dispatch(todoSliceActions.getTodos(response.data));
  //   } catch (e) { /* empty */ }
  // }

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
