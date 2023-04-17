import { TodoItem } from './todo-item';

export class TodoList {

  list: TodoItem[] = [
    new TodoItem('pierwszy'),
    new TodoItem('drugi', true),
  ];

}
