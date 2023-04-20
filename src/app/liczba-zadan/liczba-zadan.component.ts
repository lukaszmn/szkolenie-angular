import { Component, Input } from '@angular/core';
import { Zadanie } from '../todoList';

@Component({
  selector: 'app-liczba-zadan',
  templateUrl: './liczba-zadan.component.html',
  styleUrls: ['./liczba-zadan.component.scss']
})
export class LiczbaZadanComponent {

  @Input() lista?: Zadanie[];

}
