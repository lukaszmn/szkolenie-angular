import { Injectable } from '@angular/core';
import { ListaZadan, Zadanie } from './model/todoList';
import { ModelService } from './model/model.service';

@Injectable()
export class ListaZadanService {

  readonly ID_LISTY = 1;

  zadania = new ListaZadan('', new Date()); // CTRL .

  constructor(private model: ModelService) {
    model.pobierzListe(this.ID_LISTY)
      .subscribe(pobraneZadania => this.zadania = pobraneZadania);
  }

  zapisz() {
    this.model.zapiszListe(this.ID_LISTY, this.zadania).subscribe();
  }

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
