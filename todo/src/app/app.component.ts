import { Component } from '@angular/core';
import { TodoList } from './todo-list';
import { TodoItem } from './todo-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';

  list = new TodoList();

  showCompleted = false;

  get tasks(): TodoItem[] {
    if (this.showCompleted)
      return this.list.list;
    else
      return this.list.list.filter(x => x.complete === false);
  }

  itemCount(): number {
    return this.list.list.length;
  }

  itemCountText(): string {
    let s = '' + this.tasks.length;
    switch (this.tasks.length) {
      case 1: return s + ' zadanie';
      case 2:
      case 3:
      case 4:
        return s + ' zadania';
      default:
        return s + ' zadań';
    }
  }

  data = new Date();

  zadanieMapa = {
    '=0': 'Brak zadań',
    '=1': '1 zadanie',
    '=2': '# zadania',
    '=3': '# zadania',
    '=4': '# zadania',
    'other': '# zadań'
  };

  addItem(name: string) {
    this.list.list.push(new TodoItem(name));
  }

}
