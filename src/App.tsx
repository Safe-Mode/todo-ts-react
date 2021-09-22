import React, { useState } from 'react';

import { ToDo } from './models/todo';
import TodoList from './components/TodoList/TodoList';
import NewTodo from './components/NewTodo/NewTodo';

const App: React.FC = () => {
  const [todos, setToDos] = useState<ToDo[]>([]);

  const toDoAddHandler = (text: string) => {
    setToDos(prevState => [
        ...prevState,
        {
          id: Math.random().toString(),
          text
        }
    ]);
  };

  const onDeleteToDoHandler = (id: string) => {
    setToDos(prevState => prevState.filter(todo => (todo.id !== id)));
  };

  return (
    <div className="App">
      <NewTodo onAddToDo={ toDoAddHandler } />
      <TodoList items={ todos } onDeleteToDo={ onDeleteToDoHandler } />
    </div>
  );
}

export default App;
