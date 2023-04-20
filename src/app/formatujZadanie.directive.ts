import { Directive, HostBinding, Input } from '@angular/core';
import { Zadanie } from './todoList';

@Directive({
  selector: '[formatujZadanie]'
})
export class FormatujZadanieDirective {

  @Input('formatujZadanie') zadanie?: Zadanie;

  @HostBinding('class') klasa = '';

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
    this.klasa = this.zadanie?.zakonczone ? 'text-decoration-line-through' : '';
  }

}
