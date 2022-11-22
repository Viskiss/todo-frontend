import StylesForm from "./FormAddTodo.styles";

import Button from "../../../Button/Button";

import { useState } from "react";
import { useDispatch } from "react-redux";
import {todoSliceActions } from "../../../../redux/todos/todoSlice";
import { useAppDispatch } from "../../../../redux/store";

const FormAddTodo = () => {
  const [value, setValue] = useState("");

  const dispatch = useAppDispatch();

  const submitHandler = () => {
    const result = value.trim();

    if (result !== "") {
      dispatch(todoSliceActions.addTodo({ todo: value }));
    }

    setValue("");
  };

  return (
    <StylesForm onSubmit={submitHandler}>
      <input
        value={value}
        onChange={(event) => setValue(event.target.value)}
        className="form-todos_input"
      />
      <Button isActive={false} type="submit">
        Add
      </Button>
    </StylesForm>
  );
};

export default FormAddTodo;
