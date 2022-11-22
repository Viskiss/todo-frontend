import TodoItemStyles from "./TodoItem.styles";
import React from "react";
import Button from "../../../Button/Button";
import { TodoItem } from "../../../../types/types";

import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  completeTodo,
  deleteTodo,
  editTodo,
  todoSliceActions,
} from "../../../../redux/todos/todoSlice";
import { useAppDispatch } from "../../../../redux/store";

const TodoItem: React.FC<{todo: TodoItem}> = (props) => {
  // const {
  //   todo: { id, value, completed },
  // } = props;

  const [todoValue, setTodoValue] = useState(props.todo.value);

  const dispatch = useAppDispatch();

  const removeTodo = () => {
    dispatch(todoSliceActions.deleteTodo({ id: props.todo.id }));
  };

  const completedTodo = (id: number) => {
    dispatch(completeTodo({ id: id, completed: !completed }));
  };

  const changeTodo = () => {
    if (!todoValue) {
      dispatch(deleteTodo({ id: id }));
    } else {
      dispatch(editTodo({ id: id, value: todoValue, completed: completed }));
    }
  };

  return (
    <TodoItemStyles completed={completed}>
      <input
        className="todo-item_input"
        type="text"
        id={id}
        value={todoValue}
        onBlur={changeTodo}
        onChange={(event) => setTodoValue(event.target.value)}
      />
      <div className="todo-item_buttons">
        <Button isActive={false} onClick={() => removeTodo(id)}>
          Delete
        </Button>
        <Button isActive={false} onClick={() => completedTodo(id)}>
          Completed
        </Button>
      </div>
    </TodoItemStyles>
  );
};

export default TodoItem;
