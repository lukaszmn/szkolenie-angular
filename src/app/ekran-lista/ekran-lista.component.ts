import { Component } from '@angular/core';
import { ListaZadanService } from '../lista-zadan.service';
import { Zadanie } from '../model/todoList';

@Component({
  selector: 'app-ekran-lista',
  templateUrl: './ekran-lista.component.html',
  styleUrls: ['./ekran-lista.component.scss']
})
export class EkranListaComponent {

  constructor(public dane: ListaZadanService) {
    console.log(dane.zadania.nazwa);
  }

  dodajZadanie(nazwa: string) {
    if (nazwa !== '')  // nazwa.length > 0
      this.dane.zadania.lista.push(new Zadanie(nazwa));
  }

  dodajZadanie2() {
    if (this.nazwaNowegoZadania !== '') { // this.nazwaNowegoZadania.length > 0
      this.dane.zadania.lista.push(new Zadanie(this.nazwaNowegoZadania));
      this.dane.zapisz();
    }
    this.nazwaNowegoZadania = '';
  }

  nazwaNowegoZadania: string = '';

}
