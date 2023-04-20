import { Component } from '@angular/core';
import { ListaZadanService } from '../lista-zadan.service';

@Component({
  selector: 'app-filtr',
  templateUrl: './filtr.component.html',
  styleUrls: ['./filtr.component.scss']
})
export class FiltrComponent {

  constructor(public dane: ListaZadanService) {
  }

}
