import React, { useState } from 'react';

import StylesForm from './FormAddTodo.styles';

import Button from '../../Button';

import { todoSliceActions } from '../../../../redux/todos/todoSlice';
import { useAppDispatch } from '../../../../redux/store';

const FormAddTodo: React.FC = () => {
  const [value, setValue] = useState('');

  const dispatch = useAppDispatch();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = value.trim();

    if (result !== '') {
      dispatch(todoSliceActions.addTodo(value));
    }

    setValue('');
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
