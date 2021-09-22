import { ToDo } from './todo';

export interface TodoListProps {
  items: ToDo[];
  onDeleteToDo: (id: string) => void;
}
