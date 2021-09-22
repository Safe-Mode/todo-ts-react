import React, { useRef } from 'react';
import './NewTodo.css';
import { NewToDoProps } from '../../models/new-todo';

const NewTodo: React.FC<NewToDoProps> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const toDoSubmitHandler = (evt: React.FormEvent) => {
    evt.preventDefault();

    const text = textInputRef.current!.value;
    props.onAddToDo(text);
  };

  return (
      <form onSubmit={ toDoSubmitHandler }>
        <div>
          <label htmlFor="todo-text">Todo text</label>
          <input type="text" id="todo-text" ref={ textInputRef } />
        </div>
        <button type="submit">ADD TODO</button>
      </form>
  );
};

export default NewTodo;
