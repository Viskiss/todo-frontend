import React, { useState } from 'react';

import StylesForm from './FormAddTodo.styles';

import Button from '../../Button';

import { useAppDispatch } from '../../../../redux/store';
import { createTodoThunk } from '../../../../redux/todos/todoThunks';

const FormAddTodo: React.FC = () => {
  const [value, setValue] = useState('');

  const dispatch = useAppDispatch();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = value.trim();

    if (result !== '') {
      dispatch(createTodoThunk(value));
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
