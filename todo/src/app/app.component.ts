import { Component } from '@angular/core';
import { TodoList } from './todo-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';

  list = new TodoList();

  itemCount(): number {
    return this.list.list.length;
  }

}
