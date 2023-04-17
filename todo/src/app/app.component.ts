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

  itemCountText(): string {
    let s = '' + this.list.list.length;
    switch (this.list.list.length) {
      case 1: return s + ' zadanie';
      case 2:
      case 3:
      case 4:
        return s + ' zadania';
      default:
        return s + ' zadań';
    }
  }

}
