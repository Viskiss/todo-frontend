import React, { useState } from 'react';

import TodoItemStyles from './TodoItem.styles';

import Button from '../../Button';
import type { TodoType } from '../../../../types/types';
import { todoSliceActions } from '../../../../redux/todos/todoSlice';
import { useAppDispatch } from '../../../../redux/store';
import { deleteTodo, updateTodo } from '../../../../redux/todos/todoThunks';

interface ITodoItem {
  todo: TodoType;
}

const TodoItem: React.FC<ITodoItem> = ({ todo }) => {
  const [todoValue, setTodoValue] = useState(todo.value);

  const dispatch = useAppDispatch();

  const removeTodo = (id: number) => {
    dispatch(deleteTodo(id));
  };

  const completeTodo = (id: number) => {
    dispatch(updateTodo({ id, completed: !todo.completed, value: todo.value }));
  };

  const changeTodo = (id: number) => {
    if (!todoValue) {
      dispatch(deleteTodo(id));
    } else {
      dispatch(
        updateTodo({
          id,
          value: todoValue,
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
