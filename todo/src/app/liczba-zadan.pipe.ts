import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'liczbaZadan'})
export class LiczbaZadanPipe implements PipeTransform {
  transform(count: number): string {
    let s = '' + count;
    switch (count) {
      case 1: return s + ' zadanie';
      case 2:
      case 3:
      case 4:
        return s + ' zadania';
      default:
        return s + ' zadań';
    }
  }
}
