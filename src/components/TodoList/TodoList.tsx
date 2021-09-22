import React from 'react';
import './TodoList.css';
import { TodoListProps } from '../../models/todo-list';

const TodoList: React.FC<TodoListProps> = props => {
  return (
      <ul>
        { props.items.map(todo => (
            <li key={ todo.id }>
              { todo.text }
              <button type="button" onClick={ props.onDeleteToDo.bind(null, todo.id) }>DELETE</button>
            </li>
        )) }
      </ul>
  );
};

export default TodoList;
