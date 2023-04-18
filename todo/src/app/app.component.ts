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

  selectedProduct: string | null = '';

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

  addItem(name: string) {
    this.list.list.push(new TodoItem(name));
  }

  select(event: Event) {
    this.selectedProduct = (event.target as HTMLInputElement).value;
  }

  selectRow(event: Event, nazwa: string) {
    this.selectedProduct = nazwa;
    (event.target as HTMLInputElement).classList.add('bg-info');
  }

}
