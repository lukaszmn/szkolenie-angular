import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filtr',
  templateUrl: './filtr.component.html',
  styleUrls: ['./filtr.component.scss']
})
export class FiltrComponent {

  @Output() zmianaFiltra = new EventEmitter<boolean>();

  pokazUkonczone = true;

  zmiana() {
    this.zmianaFiltra.emit(this.pokazUkonczone);
  }

}
