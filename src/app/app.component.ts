import { Component } from '@angular/core';
import { ListaZadan } from './todoList';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  zadania = new ListaZadan('Obowiązki'); // CTRL .

  constructor() {
    console.log(this.zadania.nazwa);
  }

}
