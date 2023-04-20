import { Component } from '@angular/core';
import { ListaZadan, Zadanie } from './todoList';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  zadania = new ListaZadan('Obowiązki', new Date()); // CTRL .

  pokazUkonczone = true;

  data = new Date();

  constructor() {
    console.log(this.zadania.nazwa);
  }

  listaZadan(): Zadanie[] {
    if (this.pokazUkonczone) {
      return this.zadania.lista;
    } else {
      return this.zadania.lista.filter(function(element) {
        return element.zakonczone === false
      });
    }

    /* inne możliwości
    return this.zadania.lista.filter(element => {
      return element.zakonczone === false
    });

    return this.zadania.lista.filter(element => element.zakonczone === false);
    */
  }

  dodajZadanie(nazwa: string) {
    if (nazwa !== '')  // nazwa.length > 0
      this.zadania.lista.push(new Zadanie(nazwa));
  }

  dodajZadanie2() {
    if (this.nazwaNowegoZadania !== '')  // this.nazwaNowegoZadania.length > 0
      this.zadania.lista.push(new Zadanie(this.nazwaNowegoZadania));
    this.nazwaNowegoZadania = '';
  }

  nazwaNowegoZadania: string = '';

}
