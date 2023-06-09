import { Directive, HostBinding, Input } from '@angular/core';
import { Zadanie } from './model/todoList';

@Directive({
  selector: '[formatujZadanie]'
})
export class FormatujZadanieDirective {

  @Input('formatujZadanie') zadanie?: Zadanie;

  @HostBinding('class') klasa = '';

  ngAfterContentChecked() {
    this.klasa = this.zadanie?.zakonczone ? 'text-decoration-line-through' : '';
  }

}
