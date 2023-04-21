import { Component } from '@angular/core';
import { Zadanie } from './todoList';
import { ListaZadanService } from './lista-zadan.service';
import { FormControl, FormGroup, NgControl, Validators } from '@angular/forms';
import { niedozwolonaNazwa } from './niedozwolonaNazwa.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  imie: string = '';

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

  zapiszImie(poleImie: NgControl) {
    if (poleImie.valid)
      console.log('Zapisuję', poleImie.value);
  }

  poleImie = new FormControl('', [
    Validators.required,
    Validators.minLength(4),
    niedozwolonaNazwa('Adam')
  ]);

  zmien() {
    this.poleImie.setValue('Jan');
  }

  zapisz() {
    console.log(this.poleImie.value, this.poleImie.valid);
  }

  ////////////

  form = new FormGroup({
    imie: new FormControl('', [Validators.required]),
    nazwisko: new FormControl(''),
  });

  zmienFormularz() {
    this.form.setValue({
      imie: 'Jan',
      nazwisko: 'Kowalski'
    });
    this.form.patchValue({
      imie: 'Adam'
    });
    this.form.controls.imie.setValue('Adam');
  }

  zapiszFormularz() {
    console.log(this.form.value);
    this.form.controls.imie.value === this.form.value.imie
  }


}
