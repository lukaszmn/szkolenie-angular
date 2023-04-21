import { Pipe, PipeTransform } from '@angular/core';
import { Zadanie } from './model/todoList';

@Pipe({
  name: 'liczbaZadan'
})
export class LiczbaZadanPipe implements PipeTransform {

  transform(value?: Zadanie[]): string {
    // if (!value)
    //   return 'Brak zadań';
    const ilosc = value?.length || 0;
    if (ilosc === 0)
      return 'Brak zadań';
    else if (ilosc === 1)
      return '1 zadanie';
    else if (ilosc <= 4)
      return `${ilosc} zadania`;
    else
      return `${ilosc} zadań`;

  }

}
