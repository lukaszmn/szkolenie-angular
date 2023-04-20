import { Component } from '@angular/core';
import { Zadanie } from './todoList';
import { ListaZadanService } from './lista-zadan.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public dane: ListaZadanService) {
    console.log(dane.zadania.nazwa);
  }

  dodajZadanie(nazwa: string) {
    if (nazwa !== '')  // nazwa.length > 0
      this.dane.zadania.lista.push(new Zadanie(nazwa));
  }

  dodajZadanie2() {
    if (this.nazwaNowegoZadania !== '')  // this.nazwaNowegoZadania.length > 0
      this.dane.zadania.lista.push(new Zadanie(this.nazwaNowegoZadania));
    this.nazwaNowegoZadania = '';
  }

  nazwaNowegoZadania: string = '';

}
