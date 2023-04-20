import { Injectable } from '@angular/core';
import { ListaZadan, Zadanie } from './todoList';

@Injectable()
export class ListaZadanService {

  zadania = new ListaZadan('Obowiązki', new Date()); // CTRL .

  pokazUkonczone = true;

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

}
