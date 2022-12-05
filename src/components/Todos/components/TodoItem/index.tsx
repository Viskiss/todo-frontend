import React, { useState } from 'react';

import TodoItemStyles from './TodoItem.styles';

import Button from '../../Button';
import type { TodoType } from '../../../../types/types';
import { useAppDispatch } from '../../../../redux/store';
import {
  deleteTodoThunk,
  updateTodoThunk,
} from '../../../../redux/todos/todoThunks';

interface ITodoItem {
  todo: TodoType;
}

const TodoItem: React.FC<ITodoItem> = ({ todo }) => {
  const [todoValue, setTodoValue] = useState(todo.title);

  const dispatch = useAppDispatch();

  const removeTodo = (_id: number) => {
    dispatch(deleteTodoThunk(_id));
  };

  const completeTodo = (_id: number) => {
    dispatch(
      updateTodoThunk({ _id, completed: !todo.completed, title: todo.title }),
    );
  };

  const changeTodo = (_id: number) => {
    if (!todoValue) {
      dispatch(deleteTodoThunk(_id));
    } else {
      dispatch(
        updateTodoThunk({
          _id,
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
        id={String(todo._id)}
        value={todoValue}
        onBlur={() => changeTodo(todo._id)}
        onChange={(event) => setTodoValue(event.target.value)}
      />
      <div className="todo-item_buttons">
        <Button isActive={false} onClick={() => removeTodo(todo._id)}>
          Delete
        </Button>
        <Button isActive={false} onClick={() => completeTodo(todo._id)}>
          Completed
        </Button>
      </div>
    </TodoItemStyles>
  );
};

export default TodoItem;
