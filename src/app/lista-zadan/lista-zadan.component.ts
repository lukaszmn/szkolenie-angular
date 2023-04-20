import { Component, Input } from '@angular/core';
import { Zadanie } from '../todoList';

@Component({
  selector: 'app-lista-zadan',
  templateUrl: './lista-zadan.component.html',
  styleUrls: ['./lista-zadan.component.scss']
})
export class ListaZadanComponent {

  @Input() lista?: Zadanie[];

}
