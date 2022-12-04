import React, { useState } from 'react';

import TodoItemStyles from './TodoItem.styles';

import Button from '../../Button';
import type { TodoType } from '../../../../types/types';
import { useAppDispatch } from '../../../../redux/store';
import { deleteTodoThunk, updateTodoThunk } from '../../../../redux/todos/todoThunks';

interface ITodoItem {
  todo: TodoType;
}

const TodoItem: React.FC<ITodoItem> = ({ todo }) => {
  const [todoValue, setTodoValue] = useState(todo.title);

  const dispatch = useAppDispatch();

  const removeTodo = (id: number) => {
    dispatch(deleteTodoThunk(id));
  };

  const completeTodo = (id: number) => {
    dispatch(updateTodoThunk({ id, completed: !todo.completed, title: todo.title }));
  };

  const changeTodo = (id: number) => {
    if (!todoValue) {
      dispatch(deleteTodoThunk(id));
    } else {
      dispatch(
        updateTodoThunk({
          id,
          title: todoValue,
          completed: todo.completed,
        }),
      );
    }
  };

  return (
    <TodoItemStyles completed={todo.completed}>
      <input
        className="todo-item_input"
        type="text"
        id={String(todo.id)}
        value={todoValue}
        onBlur={() => changeTodo(todo.id)}
        onChange={(event) => setTodoValue(event.target.value)}
      />
      <div className="todo-item_buttons">
        <Button isActive={false} onClick={() => removeTodo(todo.id)}>
          Delete
        </Button>
        <Button isActive={false} onClick={() => completeTodo(todo.id)}>
          Completed
        </Button>
      </div>
    </TodoItemStyles>
  );
};

export default TodoItem;
