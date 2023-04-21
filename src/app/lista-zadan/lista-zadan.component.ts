import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Zadanie } from '../model/todoList';

@Component({
  selector: 'app-lista-zadan',
  templateUrl: './lista-zadan.component.html',
  styleUrls: ['./lista-zadan.component.scss']
})
export class ListaZadanComponent {

  @Input() lista?: Zadanie[];

  @Output() zadanieUkonczone = new EventEmitter<void>();
}
